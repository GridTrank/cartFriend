<template>
	<view class="page-wrap">
		<view class="page-top" > 
			<view class="circle-info search-wrap xflex-list">
				<view class="input xflex-list">
					<u-icon name="search"  size="32"></u-icon>
					<u-input @confirm="search" class="input-box" v-model="keyWord" placeholder="请输入关键词搜索"></u-input>
				</view>
				
			</view>
		</view>
		<view class="circle-info model-wrap my-creat mt20" v-if="myCircleList.length>0">
			<view class="my-circle-top">
				我创建的圈子
			</view>
			<view class="circle-wrap">
				<scroll-view class="cirlce-list" scroll-x="true" @scrolltolower="scrolltolower">
					<view class="circle-item" 
						v-for="(item,index) in myCircleList" 
						:key="index"
						@click="selectCircleItem(item,index)"
					>
						<image class="circle-img" :src="item.photo"></image>
						<view class="circle-name oneHidden">
							{{item.name}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="circle-info model-wrap my-join mt30" v-if="myJoinList.length>0">
			<view class="my-circle-top">
				我加入的圈子
			</view>
			<view class="circle-wrap">
				<scroll-view class="cirlce-list" scroll-x="true" @scrolltolower="scrolltolowerJoin">
					<view class="circle-item" 
						v-for="(item,index) in myJoinList" 
						:key="index"
						@click="selectCircleItem(item,index)"
					>
						<image class="circle-img" :src="item.circlePhoto"></image>
						<view class="circle-name oneHidden">
							{{item.circleName}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view v-if="false" class="creat-title mt30" @click="create">
			创建新圈子
		</view>
		
		<view class="circle-info model-wrap mt30">
			<navigator 
			hover-class="none" 
			:url="'../Detail/Detail?id='+item.id " 
			class="row list" 
			v-for="(item,index) in circleList" 
			:key="index">
				<image class="img" :src="item.photo" ></image>
				<view class="info">
					<view class="name">
						<text class="n">{{item.name}}</text>
						<text class="bg-default type">{{item.type==1?'公开制':item.type==2?'邀请制':item.type==3?'付费制':'公开制'}}</text>
						<text class="bg-default">{{item.memberCount || 0}}/成员数</text>
					</view>
					<view class="desc mt20">
						{{item.description || '描述描述描述描述描述描述描述'}}
					</view>
				</view>
			</navigator>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectIndex:0,
				fixed:false,
				item:[],
				myCircleList:[],
				myJoinList:[],
				circleList:[],
				keyWord:'', 
				current:1,
				isContinue:true,
				currentJoin:1,
				currentCircle:1,
				isContinueJoin:true,
				isContinueCircle:true
			};
		},
		onPageScroll(res) {
			if(res.scrollTop>=100){
				this.fixed=true
			}else if(res.scrollTop<=30){
				this.fixed=false
			}
		},
		onLoad(){
		},
		onShow() {
			if(uni.getStorageSync('token')){
				this.getMyCircle()
				this.getMyJoin()
			}
            this.current=1
            this.currentCircle=1
            this.currentJoin=1
			this.myCircleList=[]
			this.myJoinList=[]
            this.circleList=[]
			this.getList()
		},
		// 上拉加载
		onReachBottom(){
			if(this.isContinueCircle){
				this.currentCircle++
				this.getList()
			}
		},
		methods:{
			getMyCircle(){
				let data={
					size:10,
					current:this.current
				}
				this.$http({url:'/goods/circle/myCreate',data}).then(res=>{
					this.myCircleList=this.myCircleList.concat(res.data.records)
					if(res.data.records.length>=10 ){
						this.isContinue=true
					}else{
						this.isContinue=false
					}
				})
			},
			getMyJoin(){
				let data={
					size:10,
					current:this.currentJoin
				}
				this.$http({url:'/goods/circle/myCircle',data}).then(res=>{
					this.myJoinList=this.myJoinList.concat(res.data.records)
					if(res.data.records.length>=10 ){
						this.isContinueJoin=true
					}else{
						this.isContinueJoin=false
					}
				})
			},
			
			getList(){
				let data={
					size:10,
					current:this.currentCircle
				}
                let url=!uni.getStorageSync('token')?'/goods/circle/list':'/goods/circle/recommendCircle'
				this.$http({url,data}).then(res=>{
					this.circleList=this.circleList.concat(res.data.records)
					if(res.data.records.length>=10 ){
						this.isContinueCircle=true
					}else{
						this.isContinueCircle=false
					}
				})
			},
			selectCircleItem(item,index){
				this.selectIndex=index
				uni.navigateTo({
					url:'../Detail/Detail?id='+(item.circleId || item.id)
				})
			},
			search(){
				if(!this.keyWord){
					uni.showToast({
						title:'请输入搜索关键词',
						icon:'none'
					})
					return
				}else{
					uni.navigateTo({
						url:'../SearchResult/SearchResult?keyWord='+ this.keyWord +'&pageType=circle'
					})
				}
			},
			create(){
				uni.navigateTo({
					url:'/pages/EditDetail/EditDetail?type='+'add'
				})
			},
			scrolltolower(){
				if(this.isContinue){
					this.current++
					this.getMyCircle()
				}
			},
			scrolltolowerJoin(){
				if(this.isContinueJoin){
					this.currentJoin++
					this.getMyJoin()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-wrap{
	position: relative;
	padding: 30upx;
	.page-top{
		background-color: #fff;
		width: 100%;
		position: relative;
		overflow: hidden;
		border-radius:10upx;
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
	}
	.circle-info{	
		.my-circle-top{
			font-size: 28upx;
			font-weight: bold;
		}
		.circle-wrap{
			margin-top: 20upx;
			border-radius: 24upx;
		}
		.xflex-list{
			background-color: #f2f2f2;
			.xflex-list-item{
				width: 223upx;
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
					width: 110upx;
					height: 110upx;
					border-radius: 26upx;
					margin: auto;
				}
				.circle-name{
					color: #412815;
				}
			}
		}
		.list{
			padding: 30upx 0;
			border-bottom: 1px solid #f1f1f1;
			&:last-child{
				border: none;
			}
			.img{
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
				margin-right: 20upx;
			}
			.info{
				.name{
					.n{
						color: #363636;
						font-size: 32upx;
						font-weight: bold;
					}
					.bg-default{
						padding: 4upx 16upx;
						font-size: 24upx;
					}
					.type{
						margin: 0 10upx;
					}
				}
				.desc{
					color: #666;
					font-size: 24upx;
				}
			}
		}
		
	}
	.my-creat{
		background-image: url('http://120.24.56.30:9000/system/qz-bg2.png');
		background-size: 100% 100%;
		.my-circle-top{
			color:#412815;
		}
	}
	.my-join{
		background-image: url('http://120.24.56.30:9000/system/qz-bg1.png');
		background-size: 100% 100%;
		.my-circle-top{
			color:#396D00;
		}
		.circle-name{
			color: #396D00 !important;
		}
	}
	.creat-title{
		background: linear-gradient(359deg, #DFAD76 0%, #FFECD8 100%);
		width: 100%;
		height: 90upx;
		line-height: 90upx;
		text-align: center;
		font-size: 32upx;
		color: #412815;
		font-weight: 600;
		border-radius: 16upx;
	}
	.fixed{
		position: fixed;
		width: 100%;
		top: 0;
		background-color: #fff;
		z-index: 999;
		border-bottom: 1px solid #e2e2e2;
		.circle-info{
			padding:20upx ;
		}
	}
	
}
</style>
