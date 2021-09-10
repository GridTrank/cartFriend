<template>
	<view class="release" @click="toPage">
		发布
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toPage(){
				uni.navigateTo({
					url:'/pages/Release/Release'
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
}
</style>
