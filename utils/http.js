
import {Login} from '@/utils/util.js'
let baseUrl='https://dongsiquan.com/api'
import store from '@/store';
// let baseUrl='http://8.134.100.47/api'

let requestUrl=[]
export const send=(data)=>{
	return new Promise((resolve,reject)=>{
		if(requestUrl.indexOf(data.url)==-1 ){
			if(data.url=='/member/openId' || data.url=='/auth/mobile/wechatLogin'){
				requestUrl.unshift(data.url)
			}else{
				requestUrl.push({
					url:data.url,
					data:data.data,
					method:data.method
				})	
			}
			if(!uni.getStorageSync('token')){
				Login().then(res=>{
					requestUrl.forEach((item,index)=>{
						if(item && item.url==data.url){
							requestUrl.splice(index,1)
						}
						http(item).then(res=>{
							resolve(res)
						}).catch((err)=>{
							reject(err)
						})
					})
				})
			}else{
				requestUrl.forEach((item,index)=>{
					if(item && item.url==data.url){
						requestUrl.splice(index,1)
					}
					http(item).then(res=>{
						resolve(res)
					}).catch((err)=>{
						reject(err)
					})
				})
			}
		}
	})
}

export const http=(queryData)=>{
	return new Promise((resolve,reject)=>{
		let cancelUrl=[
			'/member/openId',
			'/auth/mobile/wechatLogin',
			'/goods/circle/list',
			'/goods/product/getList',
			'/goods/circle/product',
			'/goods/search/recommendSearch'
			]
		if(!uni.getStorageSync('token') && cancelUrl.indexOf(queryData.url)==-1 ){
			uni.showToast({
				title:'请先登录',
				icon:'none'
			})
			setTimeout(()=>{
				uni.navigateTo({
					url:'/pages/Login/Login'
				})
			},1000)
			return
		}
		uni.request({
			url:baseUrl+queryData.url,
			data:queryData.data,
			header:{
				'Authorization':uni.getStorageSync('token')? 'Bearer '+uni.getStorageSync('token'): 'Basic aW90OmlvdA=='
			},
			method:queryData.method || 'GET',
			success: (res) => {
				if(queryData.url!='/auth/mobile/wechatLogin'){
					if(res.data.code==200 ){
						resolve(res.data)
					}else if(res.data.code==401){
						uni.navigateTo({
							url:'/pages/Login/Login'
						})
						uni.clearStorageSync()
						// store.state.showLoginPop=true
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				}else{
					resolve(res.data)
				}
				
			},
			fail:function(err){
				uni.hideLoading()
				reject(err)
			}
		})
	})
}


