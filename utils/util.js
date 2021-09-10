// 登录
export const Login=(that)=>{
	getCode().then(code=>{
		that.$http("/mobile/wechat_login",{openid:code}).then(res=>{
			// console.log(111,res)
		}).catch(err=>{
			console.log(222,err)
		})
	}).catch(err=>{
		console.log(333,err)
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
