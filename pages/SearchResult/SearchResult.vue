<template>
	<view class="page-wrap">
		<view class="search-wrap xflex-list">
			<view class="input xflex-list">
				<u-icon name="search"  size="32"></u-icon>
				<u-input class="input-box" v-model="keyWord" placeholder="请输入关键词搜索"></u-input>
			</view>
			<view class="search-btn" @click="search">
				搜索
			</view>
		</view>
		<view class="search-res">
			<view @click="toDetail(circle)" class="mt30 xflex-list model-wrap" v-for="(circle,cIndex) in circleList" :key="cIndex">
				<image class="img" :src="circle.photo" ></image>
				<view class="info">
					<view class="row">
						<view class="left">{{circle.name}}</view>
						<view class="right bg-default">{{circle.memberCount}}个成员</view>
					</view>
					<view class="mt20">{{circle.description}}</view>
				</view>
				
				<view class="join-btn bg-default" @click.stop="join(circle)">
					{{circle.isMember?'已加入':'加入'}}
				</view>
			</view>
		</view>
		
		<view class="mt30 " v-if="pageType!='circle'">
			<invitation-list :item="inviList"></invitation-list>
		</view>
		
		<view  v-if="inviList.length<=0 && circleList.length<=0">
			<no-data></no-data>
		</view>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				keyWord:'',
				pageType:'',
				size:10,
				current:1,
				circleList:[],
				inviList:[],
				showNoData:true,
				isContinue:true
			}
		},
		onLoad(e) {
			this.pageType=e.pageType
			this.keyWord=e.keyWord
			this.search()
		},
		methods: {
			search(){
				if(this.pageType=='invitation'){
					this.searchCircle()
					this.searchList()
				}else{
					this.searchCircle()
				}
			},
			searchCircle(){
				if(!uni.getStorageSync('token'))return
				this.$http({url:'/goods/circle/getList',data:{keyword:this.keyWord}}).then(res=>{
					this.circleList=res.data
				})
			},
			toDetail(item){
				uni.navigateTo({
					url:'../Detail/Detail?id='+item.id
				})
			},
			searchList(){
				let data={
					keyword:this.keyWord,
					size:this.size,
					current:this.current
				}
				this.inviList=[]
				let url=uni.getStorageSync('userInfo')?'/goods/product/getList2':'/goods/product/getList'
				this.$http({url,data}).then(res=>{
					if(res.data.records.length>1){
						this.showNoData=false
					}
					this.inviList=this.inviList.concat(res.data.records)
					if(res.data.records.length>=10 ){
						this.isContinue=true
					}else{
						this.isContinue=false
					}
				})
			},
			join(item){
				let data={
					isMember:0,  //1为加入  0为退出
					circleId:item.circleId,
				}
				if(item.isMember===1){
					uni.showModal({
						title: '提示',
						content: '确定退出当前圈子吗？',
						success: res => {
							if(res.confirm){
								data.isMember=0
								this.joinCircle_(data)
							}
						},
						fail: () => {
							
						},
					});
				}else{
					data.isMember=1
					this.joinCircle_(data)
				}
			},
			joinCircle_(data){
				this.$http({url:'/goods/circle/join',data,method:'POST'}).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					this.searchCircle()
					console.log(this.circleList)
				})
			},
			
		},
		// 上拉加载
		onReachBottom(){
			if(this.isContinue){
				this.current++
				this.searchList()
			}
		},
	}
</script>
<style lang="scss" scoped>
.page-wrap{
	padding: 30upx;
	.search-wrap{
		justify-content: space-between;
		background-color: #fff;
		border-radius: 16upx;
		.input{
			width: 76%;
			padding-left: 20upx;
			margin-right: 20upx;
			.input-box{
				width: 85%;
			}
		}
		.search-btn{
			background-color:$base-color;
			border-radius: 16upx;
			color: #fff;
			font-size: 36upx;
			padding: 6upx 20upx;
			margin-right: 10upx;
		}
		/deep/ .u-input{
			margin-left: 20upx;
		}
	}
	.search-t{
		font-size: 32upx;
	}
	.model-wrap{
		justify-content: space-between;
		.img{
			width: 80upx;
			height: 80upx;
			border-radius: 50%;
		}
		.info{
			.row{
				.left{
					margin-right: 10upx;
					color: #363636;
					font-size: 32upx;
				}
				.right{
					font-size: 24upx;
					padding: 4upx 12upx;
				}
			}
		}
		.join-btn{
			font-size: 36upx;
			width: 150upx;
			height: 140upx;
			text-align: center;
			line-height: 140upx;
			padding: 0 20upx;
		}
	}
	
}
</style>
