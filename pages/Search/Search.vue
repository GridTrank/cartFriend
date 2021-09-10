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
		<view class="search-list">
			<text class="title f32-c333 fwb">历史记录</text>
			<view class="list  xflex-list">
				<view class="item mt20" v-for="(item,index) in 6" :key="index" @click="search(item)">
					广州
				</view>
			</view>
		</view>
		
		<view class="search-list">
			<text class="title f32-c333 fwb">搜索推荐</text>
			<view class="list xflex-list">
				<view class="item mt20" v-for="(item,index) in 6" :key="index" @click="search(item)">
					广州
				</view>
			</view>
		</view>
		
		<view class="search-list">
			<text class="title f32-c333 fwb">圈子推荐</text>
			<view class="list circle xflex-list">
				<view class="item mt20  xflex-list-item" v-for="(item,index) in 6" :key="index" @click="toDetail(item)">
					<image class="img" src="@/static/image/icon.png" mode="widthFix"></image>
					<text class="name">圈子</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyWord:''
			};
		},
		methods:{
			search(item){
				console.log(item)
				if(item){
					uni.navigateTo({
						url:'../SearchResult/SearchResult?val='+item
					})
				}else{
					if(!this.keyWord){
						uni.showToast({
							title:'请输入搜索关键词',
							icon:'none'
						})
						return
					}else{
						uni.navigateTo({
							url:'../SearchResult/SearchResult?val='+ this.keyWord
						})
					}
				}
				
			},
			toDetail(item){}
			
		}
	}
</script>

<style lang="scss" scoped>
.page-wrap{
	padding:30upx 40upx;
	min-height: 100vh;
	.search-wrap{
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
	.search-list{
		margin-top: 40upx;
		.list{
			.item{
				padding: 8upx 30upx;
				background-color: $default-color;
				border-radius: 50upx;
				color: #fff;
				margin-right: 30upx;
			}
		}
		.circle{
			.item{
				padding: 0;
				background-color: transparent;
				.img{
					width: 100upx;
				}
				.name{
					color: #333;
				}
			}
			
		}
	}
}
</style>
