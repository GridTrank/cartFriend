// 登录
import {http} from '@/utils/http.js'
export const Login=()=>{
	getCode().then(code=>{
		
		http("/member/openId",{code:code}).then(res=>{
			console.log(111111111,res)
			getToken(res.data)
		}).catch(err=>{
		})
	}).catch(err=>{
		console.log(err)
	})
}

export const  getToken=(id)=>{
	return new Promise((resolve,reject)=>{
		http("/auth/mobile/wechat_login",{openid:id,tenantId:2}).then(res=>{
			uni.setStorageSync('token',res.access_token)
			uni.setStorageSync('user_id',res.user_id)
		}).catch(err=>{
			console.log(err)
		})
	})
}

function getCode(){
	return new Promise((resolve,reject)=>{
		uni.getProvider({
			service:'oauth',
			success:function(res) {
				uni.login({
					provider:res.provider[0],
					success:function(result){
						
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


// 上传
export const uploadFile=()=>{
	uni.chooseImage({
	    success: (chooseImageRes) => {
	        const tempFilePaths = chooseImageRes.tempFilePaths;
	        uni.uploadFile({
	            url: 'http://8.134.100.47/api/member/update',
	            filePath: tempFilePaths[0],
	            name: 'photo',
				header:{
					'Authorization': 'Bearer '+uni.getStorageSync('token'),
					'Content-Type': 'multipart/form-data'
				},
	            formData: {
	                'userId': uni.getStorageSync('user_id')
	            },
	            success: (uploadFileRes) => {
	                console.log(uploadFileRes.data);
	            }
	        });
	    }
	})
}

// 图片预览
export const previewImage=(res)=>{
	console.log(res)
	let urls=[]
	res.forEach(item=>{
		urls.push(item.image)
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