<template>
	<view class="page-wrap">
		<view class="search-wrap xflex-list">
			<view class="input xflex-list">
				<u-icon name="search"  size="32"></u-icon>
				<u-input class="input-box" v-model="keyWord" placeholder="请输入关键词搜索"></u-input>
			</view>
			<view class="search-btn" @click="search('')">
				搜索
			</view>
		</view>
		<view class="mt30 xflex-list model-wrap">
			<image class="img" src="@/static/image/icon.png" mode="widthFix"></image>
			<view class="info">
				<view class="">圈子推荐</view>
				<view class="">圈子简介</view>
				<view class="">1388个成员</view>
			</view>
			<view class="join-btn">
				加入
			</view>
		</view>
		<view class="mt30">
			<circle-list :item="item"></circle-list>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyWord:'',
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
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.page-wrap{
	min-height: 100vh;
	.search-wrap{
		padding:30upx 40upx;
		justify-content: space-between;
		.input{
			width: 76%;
			background-color: #fff;
			border-radius: 50upx;
			padding-left: 20upx;
			margin-right: 20upx;
			.input-box{
				width: 85%;
			}
		}
		.search-btn{
			padding: 16upx 40upx;
			background-color: $default-color;
			border-radius: 50upx;
			color: #fff;
		}
	}
	.model-wrap{
		padding:30upx 40upx;
		justify-content: space-between;
		.img{
			width: 140upx;
		}
		.info{
			width: 50%;
		}
		.join-btn{
			padding: 6upx 30upx;
			background-color: $default-color;
			border-radius: 50upx;
			color: #fff;
		}
	}
	
}
</style>
