<template>
	<view class="list-wrap">
		<view class="info" v-for="(item,index) in item" :key="index">
			<view class="info-top">
				<view class="info-user">
					<view class="user-avatar"></view>
					<view class="nick-name">用户昵称</view>
				</view>
				<view class="reward">
					<u-icon name="rmb-circle" color="#f59a23" size="36"></u-icon>
					悬赏
					<text>￥500</text>
				</view>
			</view>
			<view class="info-center">
				<view class="info-title twoHidden" >帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称帖子名称</view>
				<view class="note-info">
					<view class="note threeHidden">
						帖子详情帖子详情帖子详情帖子详情帖子详情帖子详情帖子详情帖子详情帖子详情帖子详情帖子详情帖子详情帖子详情帖子详情
					</view>
					<view class="note-img"></view>
				</view>
			</view>
			<view class="info-bottom">
				<text>999赞同</text>
				<text>999浏览量</text>
				<text>999评论</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.list-wrap{
	background-color: #f2f2f2;
	padding-bottom: 30upx;
	.info{
		background-color: #fff;
		padding: 30upx;
		margin-bottom: 30upx;
		.info-top{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 20upx;
			.info-user{
				display: flex;
				align-items: center;
				.user-avatar{
					width: 80upx;
					height: 80upx;
					background-color: #18B566;
					border-radius: 50%;
					margin-right: 20upx;
				}
			}
			.reward{
				color: #f59a23;
				display: flex;
				align-items: center;
			}
		}
		.info-center{
			.info-title{
				font-size: 30upx;
				font-weight: 600;
			}
			.note-info{
				margin: 30upx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.note{
					width: 58%;
					color: #666;
					font-size: 28upx;
				}
			}
		}
		.info-bottom{
			@include XflexBox(flex-start);
			text{
				margin-right: 20upx;
				padding-right: 20upx;
				border-right:2upx solid #ddd;
				&:last-child{
					border:none;
				}
			}
		}
	}
}
</style>
