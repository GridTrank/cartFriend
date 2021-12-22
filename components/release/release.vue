<template>
	<view class="release" @click="toPage">
		<image src="http://120.24.56.30:9000/system/release.png" mode=""></image>
	</view>
</template>
<script>
	export default {
		props:{
			circleId:{
				type:String,
				default:''
			},
			pageFrom:{
				type:String,
				default:''
			},
			isMmember:{
				type:Number | String,
				default:''
			}
		},
		data() {
			return {
			};
		},
		methods:{
			toPage(){
				if(!uni.getStorageSync('token') ){
					uni.showToast({
						title:'请先登录',
						icon:'none'
					})
					setTimeout(()=>{
						uni.navigateTo({
							url:'/pages/Login/Login'
						})
					},1000)
					
				}
				if(this.pageFrom=='Detail' && this.isMmember!==1){
					uni.showToast({
						title:'请先加入当前圈子',
						icon:'none'
					})
					return
				}
				uni.navigateTo({
					url:'/pages/Release/Release?circleId='+this.circleId
				})
			}
		}
	}
</script>
<style lang="scss">
.release{
	position: fixed;
	background-color: $default-color;
	width: 130upx;
	height: 130upx;
	border-radius: 50%;
	bottom: 150upx;
	right: 50upx;
	color: #fff;
	text-align: center;
	line-height: 130upx;
	box-shadow: 0 0 12upx rgba(1,1,1,0.4);
	overflow: hidden;
	image{
		width: 100%;
		height: 100%;
	}
}
</style>
