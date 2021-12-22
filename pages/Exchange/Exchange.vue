<template>
	<view class="page-wrap">
		<page-header
		title="会员"
		:showLeft='false'
		:white='white'
		textColor="#000"
		></page-header>
		<view class="material mt60" v-if="userInfo.nickName">
			<view class="material-user row">
				<view class="img-wrap">
					<image class="avatar" :src="userInfo.photo" mode="widthFix"></image>
				</view>
				<view class="user-info">
					<view class="nick-name">{{userInfo.nickName}}</view>
					<view class="days mt10">
						<text class="m-i-t1">当前月卡剩余天数</text>
						<text class="m-i-t2">{{amountDetail.daysCount}}天</text>
					</view>
				</view>
				<navigator hover-class="none" url="/pages/ExchangePage/Recharge/Recharge" class="to-recharge"></navigator>
			</view>
			<view class="list row">
				<view class="material-item column">
					<text class="top">￥{{amountDetail.balanceCount}}</text>
					<text class="bottom">当前余额</text>
				</view>
				<view class="material-item column">
					<text class="top">￥{{amountDetail.bountyCount}}</text>
					<text class="bottom">当前赏金</text>
				</view>
				<view class="material-item column">
					<text class="top">{{amountDetail.gasolineCount}}ml</text>
					<text class="bottom">当前汽油</text>
				</view>
			</view>
		</view>
		
		<view class="open ">
			<view class="open-vip">
				<view class="v-tit">开通会员专享4大会员权益</view>
				<view class="v-desc">会员可免费加入圈子</view>
			</view>
			<view class="open-list mt20">
				<view @click="toPage('mounth')" class="open-item model-wrap column">
					<image class="item-img" src="http://120.24.56.30:9000/system/hy2.png" mode="widthFix"></image>
					<text class="item-bg ">月</text>
					<text class="item-t1 mt10">月卡</text>
					<text class="item-t2 ">9.9 <text> /月</text></text>
				</view>
				<view @click="toPage('quarter')" class="open-item model-wrap column">
					<image class="item-img" src="http://120.24.56.30:9000/system/hy2.png" mode="widthFix"></image>
					<text class="item-bg ">季</text>
					<text class="item-t1 mt10">季卡</text>
					<text class="item-t2 ">29<text>/季</text></text>
				</view>
				<view @click="toPage('year')"  class="open-item model-wrap column">
					<image class="item-img " src="http://120.24.56.30:9000/system/hy2.png" mode="widthFix"></image>
					<text class="item-bg ">年</text>
					<text class="item-t1 mt10">年卡</text>
					<text class="item-t2 ">99<text>/年</text></text>
				</view>
			</view>
		</view>
		<view class="interest">
			<view class="interest-list">
				<view class="interest-item model-wrap ">
					<image src="http://120.24.56.30:9000/system/hy4.png" mode="widthFix"></image>
					<view class="i-t1">加入圈子无限制</view>
					<view class="i-t1">创建专属圈子</view>
				</view>
				<view class="interest-item model-wrap ">
					<image src="http://120.24.56.30:9000/system/hy5.png" mode="widthFix"></image>
					<view class="i-t1">专属会员标志</view>
				</view>
				<view class="interest-item model-wrap ">
					<image src="http://120.24.56.30:9000/system/hy6.png" mode="widthFix"></image>
					<view class="i-t1">发布视频可达60s</view>
				</view>
				<view class="interest-item model-wrap ">
					<image src="http://120.24.56.30:9000/system/hy7.png" mode="widthFix"></image>
					<view class="i-t1">发布帖子无限制</view>
				</view>
			</view>
		</view>
		<view v-if="false" class="center interest mt20">
			<text class="tit mt20">兑换中心</text>
			<view class="list model-wrap xflex-list mt20">
				<view class="item xflex-list-item" v-for="(item,index) in changeItem" :key="index">
					<view class="label">
						{{item.label}}
					</view>
					<view class="line">
						<view class="title">{{item.title}}</view>
						<u-line-progress :percent="item.value"  active-color="#f59a23"></u-line-progress>
					</view>
					<view class="btn">兑换</view>
				</view>
			</view>
		</view>
		<authorization></authorization>
	</view>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				selectIndex:0,
				detail:{},
				userInfo:{},
				white:false,
				changeItem:[
					{
						label:'会员月卡',
						title:'会员月卡',
						value:50
					},
					{
						label:'会员年卡',
						title:'会员月卡',
						value:60
					},
					{
						label:'实物',
						title:'汽油',
						value:70
					},
					{
						label:'京东购物卡',
						title:'京东购物卡',
						value:80
					},
				]
			};
		},
		computed:{
			...mapState(['amountDetail'])
		},
		onPageScroll(res) {
			if(res.scrollTop>=50){
				this.white=true
			}else if(res.scrollTop<=30){
				this.white=false
			}
		},
		onLoad(){
			this.userInfo=uni.getStorageSync('userInfo')
		},
		onShow() {
			this.$store.dispatch('amountDetail')
		},
		methods:{

			selectCircleItem(item,index){
				this.selectIndex=index
			},
			toPage(type){
				
				uni.navigateTo({
					url:'../ExchangePage/Recharge/OpenVip?type='+type
				})
			}
			
		}
	}
</script>
<style lang="scss" scoped>
.page-wrap{
	padding:30upx;
	background-image: url('http://120.24.56.30:9000/system/ch-bg.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-color: linear-gradient(180deg, #FFE5C2 0%, #F3F3FE 100%);
	.material{
		width: 100%;
		height: 400upx;
		position: relative;
		margin-bottom: 40upx;
		margin-top: 40upx;
		background-image: url('http://120.24.56.30:9000/system/hy1.png');
		background-size: 100% 100%;
		padding: 30upx;
		.material-user{
			position: relative;
			.img-wrap{
				width: 120upx;
				height: 120upx;
				background-color: #FFE2B7;
				border-radius: 10upx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 10upx;
				.avatar{
					width: 110upx;
					border-radius: 10upx;
				}
			}
			.user-info{
				.nick-name{
					font-size: 32upx;
					font-weight: 600;
					color: #fff;
				}
				.days{
					color: #FE4901;
					font-size: 28upx;
					padding: 4upx;
					border-radius: 8upx;
					background-color: #FFE2B7;
				}
			}
			.to-recharge{
				position: absolute;
				right: 0upx;
				top: 0upx;
				width: 140upx;
				height: 140upx;
			}
		}
		.list{
			justify-content: space-between;
			margin-top: 77upx;
			.material-item{
				background: #FFF5E6;
				color: #825615;
				width: 200upx;
				padding: 20upx 0;
				border-radius: 12upx;
				text-align: center;
				.top{
					font-size: 48upx;
					font-weight: bold;
				}
				.bottom{
					font-size: 24upx;
					margin-top: 10upx;
				}
			}
		}
		
	}
	.open{
		margin-bottom: 40upx;
		width: 100%;
		height: 430upx;
		background-image: url('http://120.24.56.30:9000/system/hy9.png');
		position: relative;
		background-size: 100% 100%;
		padding: 30upx;
		.open-vip{
			color: #412815;
			.v-tit{
				font-size: 40upx;
				font-weight: 600;
			}
			.v-desc{
				font-size: 28upx;
			}
		}
		.open-list{
			display: flex;
			align-items: center;
			justify-content: space-between;
			.open-item{
				position: relative;
				border: 1px solid #AF9072;
				width: 200upx;
				height: 260upx;
				justify-content: center;
				align-items: center;
				.item-img{
					width: 100%;
					position: absolute;
					top: 0;
					left: 0;
				}
				.item-bg{
					background-image: url('http://120.24.56.30:9000/system/hy8.png');
					width: 50upx;
					height: 40upx;
					background-size: 100% 100%;
					text-align: center;
					margin-top: 70upx;
					color: #BB9576;
					font-size: 24upx;
				}
				.item-t1{
					color: #825615;
					font-size: 28upx;
				}
				.item-t2{
					color: #825615;
					font-size: 58upx;
					text{
						font-size: 28upx;
					}
				}
			}
		}
	}
	.interest{
		.tit{
			font-size: 32upx;
			font-weight: 600;
			color: #333;
		}
		.interest-list{
			@include XflexBox(space-around); 
			flex-wrap: wrap;
			.interest-item{
				margin-top: 30upx;
				width: 320upx;
				height: 240upx;
				@include XflexBox(center); 
				flex-direction: column;
				background-color: #FFE5C2;
				image{
					width: 80upx;
					height: 80upx;
				}
				.i-t1{
					text-align: center;
					font-size: 28upx;
					color: #412815;
					font-weight: 500;
					margin-top: 20upx;
				}
				
			}
		}
	}
	.center{
		.list{
			flex-direction: column;
			.item{
				flex-direction: row;
				justify-content: space-between;
				width: 100%;
				margin-bottom: 40upx;
				position: relative;
				&::after{
					content: '';
					display: block;
					position: absolute;
					bottom: -20upx;
					width: 100%;
					height: 2upx;
					background-color: #e2e2e2;
				}
				&:last-child{
					&::after{
						display: none;
					}
				}
				.label{
					width: 130upx;
					height: 130upx;
					background-color: $default-color;
					color: #fff;
					font-size: 30upx;
					font-weight: bold;
					text-align: center;
					border-radius: 24upx;
					@include XflexBox(center)
				}
				.line{
					width: 50%;
					margin: -45upx 20upx 0 10upx;
				}
				.btn{
					padding: 10upx 20upx;
					background-color: $default-color;
					color: #fff;
					border-radius: 50upx;
				}
			}
		}
	}
}
</style>
