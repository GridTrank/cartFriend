// 登录
import {http} from '@/utils/http.js'
import store from '@/store';

export const baseUrl='https://dongsiquan.com/api'
// export const baseUrl='http://8.134.100.47/api/'

// 登录
export const Login=()=>{
	uni.showLoading({
		title:'加载中'
	})
	return new Promise((resolve,reject)=>{
		getCode().then(code=>{
			getToken(code).then(r=>{
				resolve(r)
			})
		}).catch(err=>{
			reject(err)
		})
	})
	
}

// 获取token
export const  getToken=(id)=>{
	return new Promise((resolve,reject)=>{
		let query={
			url:'/auth/mobile/wechatLogin',
			data:{
				code:id,
				tenantId:2
			}
		}
		http(query).then(res=>{
			uni.hideLoading()
			uni.setStorageSync('token',res.access_token)
			uni.setStorageSync('user_id',res.user_id)
            getUserInfo(res.user_id).then(r=>{
				resolve(r)
			}).catch((err)=>{
				reject(err)
			})
		}).catch(err=>{
			console.log(err)
			reject(err)
		})
	})
}

// 获取系统用户信息
export const getUserInfo=(userId)=>{
	return new Promise((resolve,reject)=>{
		http({url:"/member/info"}).then(res=>{
		    if(res){
				if(!res.data.nickName || !res.data.photo){
					let data={}
					if(!res.data.nickName){
						data.nickName=uni.getStorageSync("userInfo").nickName
					}
					if(!res.data.photo){
						data.photo=uni.getStorageSync("userInfo").avatarUrl
					}
					http({url:'/member/update',data,method:'post'}).then(res=>{})
				}
				
				let info=Object.assign({},uni.getStorageSync("userInfo"),res.data)
		        uni.setStorageSync("userInfo",info)
				
				resolve(res.data)
		    }
		}).catch(err=>{
			console.log(err)
			reject(err)
		})
	})
    
}

// 获取code
function getCode(){
	return new Promise((resolve,reject)=>{
		uni.getProvider({
			service:'oauth',
			success:function(res) {
               
				uni.login({
					provider:res.provider[0],
					success:function(result){
                        // console.log(result)
                        // return
						resolve(result.code)
					},
					fail:function(err){
						reject('获取code失败',err)
					}
				})
			}
		})
	})
	
}

// 授权后的用户信息
export const getUserProfile=()=>{
    uni.getUserProfile({
        desc:'登陆',
        success:(res)=>{
            console.log('授权后的用户信息',res)
            uni.setStorageSync('userInfo',res.userInfo)
			
            Login().then(res=>{
				uni.showToast({
					title:'登录成功',
					icon:'none'
				})
				setTimeout(()=>{
					// uni.switchTab({
					// 	url:'/pages/Index/index'
					// })
					uni.navigateBack()
				},1500)
			})
        },
        fail:(err)=>{
            console.log(222,err)
        }
    })
}


// 上传
export const uploadFile=(url,fileKey,data)=>{
	return new Promise((resolve,reject)=>{
		
		uni.chooseImage({
		    success: (chooseImageRes) => {
		        const tempFilePaths = chooseImageRes.tempFilePaths;
		        uni.uploadFile({
		            url: baseUrl+url,
		            filePath: tempFilePaths[0],
		            name: 'photo',
					header:{
						'Authorization': 'Bearer '+uni.getStorageSync('token'),
						'Content-Type': 'multipart/form-data'
					},
		            formData: {
		                'userId': uni.getStorageSync('user_id'),
		                ...data
		            },
		            success: (uploadFileRes) => {
						let data=JSON.parse(uploadFileRes.data) 
						if(data.code==200){
							resolve(data.data)
						}else{
							reject(data)
						}
		            },
					fail: (err) => {
						reject('上传失败',err)
					}
		        });
		    }
		})
	})
	
}

// 图片预览
export const previewImage=(res)=>{
	console.log(res)
	let urls=[]
	res.forEach(item=>{
		urls.push(item.image || item)
	})
	uni.previewImage({
	    urls: urls,
	    longPressActions: {
	        itemList: ['发送给朋友', '保存图片', '收藏'],
	        success: function(data) {
	            console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
	        },
	        fail: function(err) {
	            console.log(err.errMsg);
	        }
	    }
	})
}

import emoji_List from '../common/emojiList.js';
import online_Emoji from '../common/onlineEmoji.js';

export function newDate() {
	let data = new Date();
	let y = data.getFullYear();
	let m = data.getMonth() + 1;
	m = m < 10 ? '0' + m : m;
	let d = data.getDate();
	d = d < 10 ? '0' + d : d;
	let h = data.getHours();
	h = h < 10 ? '0' + h : h;
	let minute = data.getMinutes();
	minute = minute < 10 ? '0' + minute : minute;
	let second = data.getSeconds();
	second = second < 10 ? '0' + second : second;
	return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}
export function latelyDate(time) {
	if (!time) {
		return
	}
	let oldDate = new Date(time)
	let newDate = new Date()
	let dayNum = "";
	let getTime = (newDate.getTime() - oldDate.getTime()) / 1000;

	if (getTime < 60 * 5) {
		dayNum = "刚刚";
	} else if (getTime >= 60 * 5 && getTime < 60 * 60) {
		dayNum = parseInt(getTime / 60) + "分钟前";
	} else if (getTime >= 3600 && getTime < 3600 * 24) {
		dayNum = parseInt(getTime / 3600) + "小时前";
	} else if (getTime >= 3600 * 24 && getTime < 3600 * 24 * 30) {
		dayNum = parseInt(getTime / 3600 / 24) + "天前";
	} else if (getTime >= 3600 * 24 * 30 && getTime < 3600 * 24 * 30 * 12) {
		dayNum = parseInt(getTime / 3600 / 24 / 30) + "个月前";
	} else if (time >= 3600 * 24 * 30 * 12) {
		dayNum = parseInt(getTime / 3600 / 24 / 30 / 12) + "年前";
	}
	let year = oldDate.getFullYear();
	let month = oldDate.getMonth() + 1;
	let day = oldDate.getDate();
	let hour = oldDate.getHours();
	let minute = oldDate.getMinutes();
	let second = oldDate.getSeconds();
	if (dayNum) {
		return dayNum;
	} else {
		return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
	}

}


export function richText(msg) {
	let content = msg.content;
	if (msg.type == 'img') {
		content = '[图片]';
	} else if (msg.type == 'voice') {
		content = '[语音]';
	}
	return content;
}
//替换表情符号为图片
export function replaceEmoji(content) {
	let replacedStr = content.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
		for (let i = 0; i < emoji_List.length; i++) {
			let row = emoji_List[i];
			for (let j = 0; j < row.length; j++) {
				let EM = row[j];
				if (EM.alt == item) {
					//在线表情路径，图文混排必须使用网络路径，请上传一份表情到你的服务器后再替换此路径
					//比如你上传服务器后，你的100.gif路径为https://www.xxx.com/emoji/100.gif 则替换onlinePath填写为https://www.xxx.com/emoji/
					let onlinePath = 'https://s2.ax1x.com/2019/04/12/';
					let imgstr = '<img src="' + onlinePath + online_Emoji[EM.url] + '">';
					return imgstr;
				}
			}
		}
	});
	return '<div style="display: flex;align-items: center;word-wrap:break-word;">' + replacedStr + '</div>';
}
//处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪
export function setPicSize(content) {
	// 让图片最长边等于设置的最大长度，短边等比例缩小，图片控件真实改变，区别于aspectFit方式。
	let maxW = uni.upx2px(350); //350是定义消息图片最大宽度
	let maxH = uni.upx2px(350); //350是定义消息图片最大高度
	if (content.w > maxW || content.h > maxH) {
		let scale = content.w / content.h;
		content.w = scale > 1 ? maxW : maxH * scale;
		content.h = scale > 1 ? maxW / scale : maxH;
	}
	return content;
}
