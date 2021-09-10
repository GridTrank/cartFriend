<template>
	<view class="page-wrap">
		<view class="user-info">
			<view class="info">
				<image class="avatar" src="@/static/image/icon.png" mode="widthFix"></image>
				<view class="mesage">消息</view>
				<view class="change">修改</view>
				
				<view class="nick-name">用户昵称</view>
				<view class="autograph">个性签名</view>
				<view class="xflex-list mt40 list" >
					<view class="xflex-list-item " v-for="(item,index) in toolList" :key="index">
						<view class="i-t1">{{item.label}}</view>
						<view class="i-t2">{{item.value}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="to-page xflex-list pd40-region">
			<view class="model-wrap">
				个人主页
			</view>
			<view class="model-wrap">
				发布
			</view>
		</view>
		
		<view class="region pd40-region">
			<view class="xflex-list">
				<text class="f32-c333 fwb">推荐问题</text>
				<text class="f28-c666">更多问题</text>
			</view>
			<view class="question model-wrap mt20">
				<view class="title f32-c333 fwb twoHidden">
					21岁了，高中没毕业，现在很迷茫，不想再去厂里上班了，想学习并提升自己，怎么做？
				</view>
				<view class="bottom xflex-list jc-sb mt40">
					<text class="f28-c666">123已回答</text>
					<view class="btns xflex-list">
						<view class="btn btnStyle1">忽略</view>
						<view class="btn btnStyle2">去回答</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="region pd40-region">
			<text class="title">访客列表</text>
			<view class="xflex-list list">
				
				<view class="xflex-list-item item" v-for="(item,index) in visitorList" :key="index">
					<text>{{item.time}}</text>
					<view class="xflex-list child-list">
						<text>{{item.nikeName}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				toolList:[
					{label:'收藏',value:'100'},
					{label:'提问数',value:'100'},
					{label:'最近浏览',value:'100'}
				],
				visitorList:[
					{
						time:'5分钟前',
						avatar:require('../../static/image/icon.png'),
						nikeName:'用户昵称',
						isFollow:1
					},
					{
						time:'5分钟前',
						avatar:require('../../static/image/icon.png'),
						nikeName:'用户昵称',
						isFollow:1
					},
					{
						time:'5分钟前',
						avatar:require('../../static/image/icon.png'),
						nikeName:'用户昵称',
						isFollow:1
					},
					{
						time:'5分钟前',
						avatar:require('../../static/image/icon.png'),
						nikeName:'用户昵称',
						isFollow:1
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.page-wrap{
	.user-info{
		padding: 230upx 40upx 0;
		background-color: $default-color;
		height: 480rpx;
		margin-bottom: 160upx;
		.info{
			padding:100upx 40upx 40upx 40upx;
			position: relative;
			border-radius: 24upx;
			background-color: #fff;
			margin-top: 50upx;
			position: relative;
			.avatar{
				width: 140upx;
				position: absolute;
				left: 50upx;
				top: -60upx;
			}
			.mesage{
				position: absolute;
				right: 0;
				top: -80upx;
				padding: 8upx 25upx;
				border-radius: 24upx;
				background-color: #fff;
			}
			.change{
				position: absolute;
				right: 20upx;
				top: 30upx;
				padding: 8upx 25upx;
				border-radius: 24upx;
				color: #c2c2c2;
				background-color: #f2f2f2;
			}
			.list{
				justify-content: space-around;
				.xflex-list-item{
					.i-t1{
						font-weight: 600;
						font-size: 32upx;
						color: #333;
					}
					.i-t2{
						font-size: 28upx;
						color: #555;
					}
				}
			}
		}
	}
	.to-page {
		justify-content: space-between;
		.model-wrap{
			width: 45%;
			text-align: center;
			padding: 80upx 40upx;
		}
	}
	.region{
		.xflex-list{
			justify-content: space-between;
		}
		.question{
			.btnStyle1{
				padding: 4upx 20upx;
				margin-right: 20upx;
			}
			.btnStyle2{
				padding: 4upx 20upx;
			}
		}
	}
}

</style>
