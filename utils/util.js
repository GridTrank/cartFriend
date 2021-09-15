// 登录
import {http} from '@/utils/http.js'
export const Login=()=>{
	getCode().then(code=>{
		http("/member/openId",{code:code}).then(res=>{
			getToken(res.data.data)
		}).catch(err=>{
		})
	}).catch(err=>{
		console.log(err)
	})
}

export const  getToken=(id)=>{
	return new Promise((resolve,reject)=>{
		http("/auth/mobile/wechat_login",{openid:id,tenantId:2}).then(res=>{
			uni.setStorage({
				key:'token',
				data:res.data.access_token
			})
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
