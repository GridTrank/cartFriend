<template>
	<view class="page-wrap">
		<view class="page-top" :class="fixed && 'fixed'"> 
			<navigator url="../Search/Search" class="search-wrap">
				<u-icon name="search"  size="32"></u-icon>
				<text  class="s-txt">请输入关键词搜索</text>
			</navigator>
		</view>
		<view class="my-circle">
			<view class="my-circle-top">
				<view class="circle-t">我加入的圈子</view>
				<view class="circle-m">更多推荐<u-icon name="arrow-right"  size="28"></u-icon></view>
			</view>
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
		<circle-list :item="item"></circle-list>
		<release></release>
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
			}else{
				this.fixed=false
			}
		},
		created(){
		},
		methods:{
			selectCircleItem(item,index){
				this.selectIndex=index
			},
		}
	}
</script>

<style lang="scss" scoped>
.page-wrap{
	position: relative;
	.page-top{
		// background-color: #18B566;
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
	.my-circle{
		padding: 40upx 20upx;
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
