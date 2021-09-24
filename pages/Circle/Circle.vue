<template>
	<view class="page-wrap">
		<view class="page-top" :class="fixed && 'fixed'"> 
			<view class="search-wrap">
				<u-icon name="search"  size="32"></u-icon>
				<text  class="s-txt">请输入圈子关键词</text>
			</view>
		</view>
		<view class="circle-info">
			<view class="my-circle-top">
				<view class="circle-t">我的圈子</view>
			</view>
			<view class="circle-wrap">
				<scroll-view class="cirlce-list" scroll-x="true">
					<view class="circle-item" 
						v-for="(item,index) in 9" 
						:class="selectIndex==index && 'select-item'"
						@click="selectCircleItem(item,index)"
					>
						<view class="circle-img">
						</view>
						<view class="circle-name">
							圈子名称
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="circle-info">
			<view class="my-circle-top">
				<view class="circle-t">会员权益</view>
			</view>
			<view class="circle-wrap">
				<text class="title">会员可免费加入的圈子</text>
				<view class="circle-join">
					<view class="join-item">
						<text class="item-t1">包月</text>
						<text class="item-t2">9.9/月</text>
					</view>
					<view class="join-item">
						<text class="item-t1">包年</text>
						<text class="item-t2">99/年</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="circle-info">
			<view class="my-circle-top">
				<view class="circle-t">加入圈子</view>
			</view>
			<view class="circle-wrap xflex-list">
				<view class="xflex-list-item" @click="create">
					<u-icon name="plus-circle" color="#666" size="56"></u-icon>
					<view class="creat-circle">
						创建新圈子
					</view>
				</view>
				<view class="xflex-list-item" v-for="(item,index) in 8" :key="index">
					<view class="creat-circle">
						圈子
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
				selectIndex:0,
				fixed:false,
				item:[
					{
						image:'https://cdn.uviewui.com/uview/swiper/1.jpg',
					},
					{
						image:'https://cdn.uviewui.com/uview/swiper/2.jpg'
					},
					{
						image:'https://cdn.uviewui.com/uview/swiper/3.jpg'
					}
				]
			};
		},
		onPageScroll(res) {
			
			if(res.scrollTop>=100){
				this.fixed=true
			}else if(res.scrollTop<=30){
				this.fixed=false
			}
		},
		created(){
		},
		methods:{
			selectCircleItem(item,index){
				this.selectIndex=index
			},
			create(){
				uni.navigateTo({
					url:'/pages/EditDetail/EditDetail?type='+'add'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-wrap{
	position: relative;
	background-color: #f2f2f2;
	padding-bottom: 40upx;
	.page-top{
		background-color: #fff;
		width: 100%;
		position: relative;
		overflow: hidden;
		.search-wrap{
			display: flex;
			width: 90%;
			margin:24upx auto;
			border-radius: 50upx;
			background-color: #fff;
			height: 66upx;
			display: flex;
			padding: 0 30upx;
			align-items: center;
			background-color: #e2e2e2;
			.s-txt{
				margin-left: 20upx;
			}
		}
	}
	.fixed{
		position: fixed;
		width: 100%;
		top: 0;
		background-color: #fff;
		z-index: 999;
		border-bottom: 1px solid #e2e2e2;
	}
	.circle-info{
		padding: 40upx 20upx 0;
		background-color: #f2f2f2;
		.my-circle-top{
			display: flex;
			justify-content: space-between;
			.circle-t{
				color: #000;
				font-size: 34upx;
				font-weight: 600;
			}
		}
		.circle-wrap{
			margin-top: 20upx;
			padding: 20upx;
			background-color: #fff;
			border-radius: 24upx;
			.title{
				display: inline-block;
				text-align: center;
				width: 100%;
				color: #333;
				font-size: 32upx;
				margin-top: 20upx;
			}
			.circle-join{
				@include XflexBox(space-around);
				.join-item{
					@include YflexBox(center);
					background-color: $default-color;
					color: #fff;
					font-size: 36upx;
					font-weight: 600;
					padding: 40upx 60upx;
					margin: 20upx 0;
					border-radius: 24upx;
					text{
						line-height: 60upx;
						display: inline-block;
					}
				}
			}
		}
		.xflex-list{
			background-color: #f2f2f2;
			.xflex-list-item{
				width: 210upx;
				height: 200upx;
				margin-bottom: 20upx;
				margin-right: 20upx;
				&:nth-child(3n+3){
					margin-right: 0;
				}
			}
		}
		.cirlce-list{
			display: flex;
			flex-wrap: nowrap;
			margin-top: 30upx ;
			white-space: nowrap;
			.circle-item{
				margin-right: 30upx;
				width: 150upx;
				display: inline-block;
				text-align: center;
				
				.circle-img{
					width: 100upx;
					height: 100upx;
					border-radius: 50%;
					background-color: #fff;
					margin: auto;
					border: 2upx solid #ddd;
				}
				.circle-name{
					color: #999;
				}
			}
			.select-item{
				.circle-img{
					border: 2upx solid $default-color;
				}
				.circle-name{
					color: #333;
				}
			}
		}
	}
	
}
</style>
