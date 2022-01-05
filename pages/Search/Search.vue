<template>
	<view class="page-wrap">
		<view class="search-wrap xflex-list">
			<view class="input xflex-list">
				<image class="search-img" src="http://120.24.56.30:9000/system/s1.png" mode="widthFix"></image>
				<u-input @confirm="search('')" class="input-box" v-model="keyWord" placeholder="请输入关键词搜索"></u-input>
			</view>
			<!-- <view class="search-btn bg-default1" @click="search('')">
				搜索
			</view> -->
		</view>
		<view class="search-list" v-if="historyList.length>0">
			<text class="title f32-c333 fwb">历史记录</text>
			<view class="list  xflex-list">
				<view class="item mt20" v-for="(item,index) in historyList" :key="index" @click="search(item)">
					{{item}}
				</view>
			</view>
		</view>
		<view class="search-list">
			<text class="title f32-c333 fwb">搜索推荐</text>
			<view class="list xflex-list">
				<view class="item mt20" v-for="(item,index) in recommendList" :key="index" @click="search(item)">
					{{item.keyword}}
				</view>
			</view>
		</view>
		<view class="search-list">
			<text class="title f32-c333 fwb">圈子推荐</text>
			<view class="list circle ">
				<view class="item mt20 row jc-sb" v-for="(item,index) in circleList" :key="index" @click="toDetail(item)">
					<view class="left row">
						<text :class="['index',index<3 && 'top']" >{{index+1}}</text>
						<text class="name">{{item.name}}</text>
					</view>
					<view class="right row">
						<image class="huo" src="http://120.24.56.30:9000/system/huo2.png" ></image>
						<text>{{item.memberCount}}</text>
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
				keyWord:'',
				pageType:'',
				historyList:uni.getStorageSync('keyWords') || [],
				recommendList:[],
				circleList:[]
			};
		},
		onLoad(e) {
			this.pageType=e.pageType || 'invitation'
			this.getSearchList()
            if(uni.getStorageSync('token')){
                this.getCircleList()
            }
		},
		methods:{
			search(item){
				if(item.keyword || item){
					uni.navigateTo({
						url:'../SearchResult/SearchResult?keyWord='+(item.keyword || item)+'&pageType='+this.pageType
					})
				}else{
					if(!this.keyWord){
						uni.showToast({
							title:'请输入搜索关键词',
							icon:'none'
						})
						return 
					}else{
						let words=uni.getStorageSync('keyWords') || []
						if(words.length>10){
							words.pop()
						}
						if(words.indexOf(this.keyWord)==-1){
							words.unshift(this.keyWord)
						}
						uni.navigateTo({
							url:'../SearchResult/SearchResult?keyWord='+ this.keyWord +'&pageType='+this.pageType
						})
						uni.setStorageSync('keyWords',words)
						this.historyList=uni.getStorageSync('keyWords')
					}
				}
			},
			// 搜索推荐
			getSearchList(){
				let data={
					size:20,
					current:1
				}
				this.$http({url:'/goods/search/recommendSearch',data}).then(res=>{
					this.recommendList=res.data.records
				})
				
			},
			// 圈子推荐
			getCircleList(){
				this.$http({url:'/goods/circle/recommendCircle'}).then(res=>{
					this.circleList=res.data.records
				})
			},
			toDetail(item){
				uni.navigateTo({
					url:'../Detail/Detail?id='+item.id
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
.page-wrap{
	padding:30upx 40upx;
	background-color: #fff;
	min-height: 100vh;
	.search-wrap{
		justify-content: space-between;
		padding-bottom: 10upx;
		border-bottom: 4upx solid #000000;
		.input{
			width: 100%;
			background-color: #fff;
			border-radius: 50upx;
			padding-left: 20upx;
			margin-right: 20upx;
			.input-box{
				width: 90%;
			}
			.search-img{
				width: 40upx;
				margin-right: 20upx;
			}
		}
		
	}
	.search-list{
		margin-top: 50upx;
		.list{
			.item{
				padding: 8upx 30upx;
				background-color: #F7F8F9;
				border-radius: 8upx;
				color: #000;
				margin-right: 30upx;
			}
		}
		.circle{
			.item{
				padding: 30upx 0;
				background-color: transparent;
				margin: 20upx 0;
				border-bottom: 1px solid #f1f1f1;
				&:last-child{
					border:none
				}
				.left{
					color: #000;
					.index{
						font-size: 28upx;
						width: 40upx;
						height: 50upx;
						background-image: url('http://120.24.56.30:9000/system/ss-icon1.png');
						background-size: cover;
						line-height: 50upx;
						text-align: center;
						color: #000;
						margin-right: 10upx;
					}
					.top{
						background-image: url('http://120.24.56.30:9000/system/ss-icon2.png');
						color: #fff;
					}
					.name{
						font-size: 32upx;
					}
				}
				.right{
					color: #666;
					font-size: 28upx;
					.huo{
						width: 28upx;
						height: 28upx;
						margin-right: 10upx;
					}
				}
			}
			
		}
	}
}
</style>
