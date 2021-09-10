<template>
	<view class="page-wrap">
		<view class="material model-wrap">
			<view class="material-user">
				<text class="nick-name">用户昵称</text>
				<image class="avatar" src="@/static/image/icon.png" mode="widthFix"></image>
			</view>
			<view class="material-item">
				<text class="m-i-t1">当前月卡剩余天数</text>
				<text class="m-i-t2">0天</text>
			</view>
			<view class="material-item">
				<text class="m-i-t1">当前余额</text>
				<text class="m-i-t2">￥20</text>
				<text class="m-i-t3">赏金￥20</text>
				<text class="m-i-t4">去充值</text>
			</view>
			<view class="material-item">
				<text class="m-i-t1">当前汽油</text>
				<text class="m-i-t2">200ml</text>
			</view>
		</view>
		
		<view class="open model-wrap">
			<view class="open-vip">
				<text class="v-tit">开通会员</text>
				<view class="v-desc">
					<text class="v-d-t1">专享4大会员权益</text>
					<text class="v-d-t2">会员可免费加入圈子</text>
				</view>
			</view>
			<view class="open-list mt20">
				<view class="open-item model-wrap">
					<text class="item-t1">包月</text>
					<text class="item-t2">9.9/月</text>
				</view>
				<view class="open-item model-wrap">
					<text class="item-t1">包年</text>
					<text class="item-t2">99/年</text>
				</view>
			</view>
		</view>
		
		<view class="interest">
			<text class="tit">会员权益</text>
			<view class="interest-list">
				<view class="interest-item model-wrap">
					<view class="i-t1">免费加入</view>
					<view class="i-t1">付费圈子</view>
				</view>
				<view class="interest-item model-wrap">
					<view class="i-t1">每天可邀请20人进入圈子</view>
					<view class="i-t2">非会员仅5人</view>
				</view>
				<view class="interest-item model-wrap">
					<view class="i-t1">每天提问数量10次</view>
					<view class="i-t2">非会员仅5次</view>
				</view>
				<view class="interest-item model-wrap">
					<view class="i-t1">每天留言数量10次</view>
					<view class="i-t2">非会员仅2次</view>
				</view>
			</view>
		</view>
		
		<view class="center interest mt20">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectIndex:0,
				fixed:false,
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
		onPageScroll(res) {
			console.log(res.scrollTop)
			
			if(res.scrollTop>=100){
				this.fixed=true
			}else if(res.scrollTop<=30){
				this.fixed=false
			}
		},
		created(){
			console.log(this.$u)
		},
		methods:{
			selectCircleItem(item,index){
				this.selectIndex=index
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-wrap{
	padding: 40upx;
	.material{
		position: relative;
		margin-bottom: 40upx;
		margin-top: 60upx;
		.material-user{
			position: absolute;
			right: 20upx;
			top: -75upx;
			display: flex;
			align-items: center;
			.nick-name{
				font-size: 32upx;
				font-weight: 600;
			}
			.avatar{
				background-color: #e2e2e2;
				width: 100upx;
				border-radius: 50%;
				margin-left: 30upx;
			}
		}
		.material-item{
			display: flex;
			align-items: center;
			text{
				margin: 20upx 0;
			}
			.m-i-t1{
				font-size: 32upx;
				font-weight: 600;
				margin-right: 40upx;
			}
			.m-i-t2{
				font-size: 38upx;
				font-weight: 600;
				margin-right: 40upx;
			}
			.m-i-t4{
				padding: 14upx 20upx;
				background-color: $default-color;
				border-radius:50upx;
				color: #fff;
				margin-left: 30upx;
			}
		}
	}
	.open{
		margin-bottom: 40upx;
		background-color: $default-color;
		.open-vip{
			@include XflexBox(space-between); 
			.v-tit{
				color: #fff;
				font-size: 36upx;
				font-weight: 600;
			}
			.v-desc{
				text{
					display:block;
					color: #fff;
					font-size: 36upx;
					font-weight: 600;
				}
				.v-d-t2{
					font-weight: 500;
					font-size: 28upx;
				}
			}
		}
		.open-list{
			@include XflexBox(space-around);
			.open-item{
				padding: 60upx;
				text{
					display: block;
					font-size: 30upx;
					font-weight: bold;
					text-align: center;
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
				.i-t1{
					text-align: center;
					font-size: 28upx;
					color: #333;
				}
				.i-t2{
					color: #666;
					font-size: 28upx;
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
