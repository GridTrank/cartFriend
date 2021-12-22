<template>
	<view class="page-wrap">
		<!-- <image class="login-img" src="../../static/image/avatar.png" ></image> -->
		
		<!-- #ifdef MP-WEIXIN -->
		<view class="login-btn " @click="login">
			登录发现更多精彩
		</view> 
		<navigator hover-class="none" url="/pages/Index/index"  open-type="switchTab" class="login-btn back" >
			返回首页
		</navigator>
		<!-- #endif -->
		
		<!-- #ifdef MP-BAIDU -->
		<button class="login-btn" open-type="getUserInfo" @getuserinfo="getuserinfo">
			登录发现更多精彩
		</button>
		<!-- #endif -->
		
	</view>
</template>

<script>
	import {getUserProfile,Login} from '@/utils/util.js'
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			login(){
				getUserProfile()
			},
			getuserinfo(res){
				uni.setStorageSync('userInfo',res.userInfo)
				Login().then(res=>{
					uni.showToast({
						title:'登录成功',
						icon:'none'
					})
					setTimeout(()=>{
						uni.switchTab({
							url:'/pages/Index/index'
						})
					},1500)
				})
			}
		}
	}
</script>

<style lang="scss">
.page-wrap{
	.login-img{
		width: 200upx;
		height: 200upx;
		border-radius: 50%;
		margin: 200upx auto;
		display: block;
	}
	.login-btn{
		width: 80%;
		margin: auto;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		background-color: $default-color;
		color: #fff;
		border-radius: 70upx;
		margin-top: 200upx;
	}
	.back{
		margin: 20upx auto;
	}
}
</style>
