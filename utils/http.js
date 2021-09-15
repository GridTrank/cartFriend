
import {Login} from '@/utils/util.js'

let baseUrl='http://8.134.100.47/api'

export const http=(url,data,method)=>{
	
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl+url,
			data:data,
			header:{
				'Authorization': 'Basic aW90OmlvdA==',
				'token':uni.getStorage('token') || ''
			},
			method:method || 'get',
			success: (res) => {
				if(url!='/auth/mobile/wechat_login'){
					if(res.data.code==200){
						resolve(res.data)
					}else if(res.data.code==401){
						uni.showToast({
							title:'登录过期，请重新登录'
						})
						Login()
						
					}
				}
				
			},
			fail:function(err){
				reject(err)
			}
		})
	})
}


