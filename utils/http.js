

let baseUrl='http://8.134.61.255/api/auth'

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
				resolve(res)
			},
			fail:function(err){
				reject(err)
			}
		})
	})
}

