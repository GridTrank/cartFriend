<template>
	<view class="page-wrap">
		<view class="model-wrap">
			<navigator url="./ModifyInfo?pageType=avatar" hover-class="none" class="item xflex-list">
				<text class="label">头像</text>
				<view class="info">
					<image  :src="userInfo.photo"  class="avatar"></image>
					<view class="iconfont">&#xe654;</view>
				</view>
			</navigator>
			<navigator  url="./ModifyInfo?pageType=nickName" hover-class="none" class="item  xflex-list ">
				<text class="label">昵称</text>
				<view class="info">
					<view class="title">{{userInfo.nickName}}</view>
					<view class="iconfont">&#xe654;</view>
				</view>
			</navigator>
			<navigator  url="./ModifyInfo?pageType=desc" hover-class="none" class="item xflex-list ">
				<text class="label">个人介绍</text>
				<view class="info">
					<view class="iconfont">&#xe654;</view>
				</view>
			</navigator>
		</view>
		
	</view>
</template>
<script>
	export default{
		data(){
			return{
				userInfo:uni.getStorageSync('userInfo')
			}
		},
		onShow() {
			this.$getUserInfo().then(res=>{
				this.userInfo=res
			})
		}
	}
</script>
<style lang="scss" scoped>
	.page-wrap{
		padding: 30upx;
		
		.item{
			justify-content: space-between;
			border-bottom: 1px solid #f1f1f1;
			padding: 30upx 0;
			&:last-child{
				border: none;
			}
			.info{
				display: flex;
				align-items: center;
				height: 80upx;
				.iconfont{
					font-size: 28upx;
					margin-left: 20upx;
					color: #666;
				}
			}
		}
	}
</style>
