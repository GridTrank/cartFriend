<template>
	<view class="page-wrap">
		<view class="page-top" :class="fixed && 'fixed'"> 
			<navigator hover-class="none" url="../Search/Search?pageType=invitation" class="search-wrap row jc-sb">
				<view class="left row">
					<image src="http://120.24.56.30:9000/system/search.png" mode="widthFix"></image>
					<text  class="s-txt">请输入关键词搜索</text>
				</view>
				<view  class="right" @click.stop="toMessage">
					<image src="http://120.24.56.30:9000/system/message.png" mode="widthFix"></image>
					<text  v-if="total>0">{{total}}</text>
				</view>
			</navigator>
		</view>
		<u-swiper
			:list="imageList" 
			height="300"
			imgMode='widthFix'
		></u-swiper>
		
		<view class="my-circle model-wrap mt30" v-if="myCircleList.length>0">
			<view class="my-circle-top">
				<view class="circle-t">推荐圈子</view>
				<navigator hover-class="none" open-type="switchTab" url="../Circle/Circle" class="circle-m">
					更多推荐<u-icon name="arrow-right"  size="28"></u-icon>
				</navigator>
			</view>
			<scroll-view class="cirlce-list" scroll-x="true" >
				<view class="circle-item" 
					v-for="(item,index) in myCircleList" 
                    :key="index"
					@click="selectCircleItem(item,index)"
				>
					<image class="circle-img" :src="item.circlePhoto || item.photo"></image>
					<view class="circle-name oneHidden">
						{{item.circleName || item.name}}
					</view>
				</view>
			</scroll-view>
		</view>

		
		<invitation-list 
        @attentionHandle="attentionHandle" 
        ref='list' 
        pageType="Index"
        :item="item">
        </invitation-list>

		<view class="tips" :class="showNoData && 'no-da'" >       
			{{isContinue?'正在加载中~':'暂无更多数据~'}}
		</view>
		
		<release :circleId="selectCircleId"></release>
		<authorization></authorization>
	</view>
</template>
<script>
	import { mapState } from 'vuex'
	const videoBoxHeight = 400 //视频盒子高度
	export default {
		data() {
			return {
				selectIndex:0,
				fixed:false,
				imageList:[
					{
						image:'http://120.24.56.30:9000/system/gg1.jpg',
						id:'',
					},
					{
						image:'http://120.24.56.30:9000/system/gg2.jpg',
						id:'',
					}
				],
				selectCircleId:'',
				myCircleList:[],
				item:[],
				size:10,
				isMine:true,
				current:1,
				showNoData:true,
				isContinue:true,
				selectCircleHasList:false,
				index:0, //当前视频展示索引
				playIndex:-1,
				total:'',
				playTop:500, //播放高度
			};
		},
		onPageScroll(res) {
			if(res.scrollTop>=100){
				this.fixed=true
			}else{
				this.fixed=false
			}
			
		},
		onLoad() {
            this.searchList()
		},
		onShow() {
            // this.item=[]
			// this.searchList()
			if(uni.getStorageSync('token')){
				this.getAllList()
				this.getMessageNum()
			}
		},
		// 下拉刷新
		onPullDownRefresh(){
			this.current=1
			this.item=[]
			this.searchList()
		},
		// 上拉加载
		onReachBottom(){
			if(this.isContinue){
				this.current++
				this.searchList()
			}
		},
		onPageScroll(e){
			this.index = (e.scrollTop-44)/videoBoxHeight
			this.debounce(()=>{
				this.playIndex =Math.floor((e.scrollTop - 44 + this.playTop)/videoBoxHeight)
			},300)()
		},
		watch:{
			playIndex(newVal){
				for (let item of this.item) {
					item.flag = false
				}
				if(this.item[newVal].type==3){
					this.item[newVal].flag = true
				}
			}
		},
		methods:{
			getAllList(){
				this.$http({url:'/goods/circle/recommendCircle'}).then(res=>{
					this.myCircleList=res.data.records.splice(0,5)
				})
			},
			pauseVideo(val,item){item.initialTime = val},
			getInviList(){
				uni.showLoading({
					title:'加载中'
				})
				let data={
					size:10,
					current:this.current,
					id:this.selectCircleId,
					flag:1
				}
				this.$http({url:'/goods/circle/product',data}).then(res=>{
					uni.hideLoading()
					if(res.data.records.length>0){
						// 选择的圈子里面有帖子
						this.selectCircleHasList=false
						this.item=this.item.concat(res.data.records)
						this.showNoData=false
						if(res.data.records.length>=10 ){
							this.isContinue=true
						}else{
							this.isContinue=false
						}
						uni.stopPullDownRefresh();
					}else{
						this.selectCircleHasList= this.item.length<=0 && true
						// 圈子里面没有帖子
						this.searchList()
					}
					
				}).catch((err)=>{
					uni.hideLoading()
				})
			},
			searchList(){
				let data={
					keyword:'',
					size:this.size,
					current:this.current
				}
				let url=uni.getStorageSync('userInfo')?'/goods/product/getList2':'/goods/product/getList'
				this.$http({url,data}).then(res=>{
					res.data.records.forEach((item)=>{
						if(item.type==3){
							item.flag=false
						}
                        // item.imageData=[]
                        // let href=item.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
                        //     item.imageData.push(capture)
                        // });
					})
					this.item=this.item.concat(res.data.records)
					if(res.data.records.length>=1){
						this.showNoData=false
					}
					if(res.data.records.length>=10 ){
						this.isContinue=true
					}else{
						this.isContinue=false
					}
					
					uni.stopPullDownRefresh();
				})
			},
			selectCircleItem(item,index){
				uni.navigateTo({
					url:'../Detail/Detail?id='+item.id
				})
			},
			debounce(func, delay){
			    return ()=>{
					if(this.timer) clearTimeout(this.timer);
					this.timer = setTimeout(()=>{
				 		func()
				    }, delay)
				}
			},
			toDetail(item){
				if(!uni.getStorageSync('token') ){
					uni.showToast({
						title:'请先登录',
						icon:'none'
					})
					setTimeout(()=>{
						uni.navigateTo({
							url:'/pages/Login/Login'
						})
					},1000)
					return
				}
				uni.navigateTo({
					url:'/pages/InvitationDetail/InvitationDetail?productId='+item.id
				})
			},
            attentionHandle(item){
                let data={
                	memberId: item.userId,
                	isAttention:item.isAttention==1?0:1
                }
                this.$http({url:'/member/attention',data,method:'POST'}).then(res=>{
                	uni.showToast({
                		title:res.msg,
                		icon:'none'
                	})
                	setTimeout(()=>{
                		if(res.code==200 ){
                            this.item.forEach(el=>{
                                if(el.userId==item.userId){
                                    el.isAttention=el.isAttention===0?1:0
                                }
                            })
                		}
                	},1500)
                })
            },
			toMessage(){
				uni.navigateTo({
					url:'/pages/MyCenter/Message'
				})
			},
			getMessageNum(){
				this.$http({url:'/member/letterList'}).then(res=>{
					this.getMessageNum1(res.data.total)
				})
			},
			getMessageNum1(total){
				this.$http({url:'/goods/message/myMessage'}).then(res=>{
					this.total=res.data.total+total
				})
			},
			toCenter(item){
				if(!uni.getStorageSync('token') ){
					uni.showToast({
						title:'请先登录',
						icon:'none'
					})
					setTimeout(()=>{
						uni.navigateTo({
							url:'/pages/Login/Login'
						})
					},1000)
					return
				}
				uni.navigateTo({
					url:'/pages/MyCenter/PersonalHome?id='+item.userId
				})
			},
			agree(item){
				if(!uni.getStorageSync('token') ){
					uni.showToast({
						title:'请先登录',
						icon:'none'
					})
					setTimeout(()=>{
						uni.navigateTo({
							url:'/pages/Login/Login'
						})
					},1000)
					return
				}
				let data={
					productId:item.id,
					type:1,
					isEvaluate:(item.hasAgree || item.hasOppose)?0:1,
				}
				this.$http({url:'/reply/product/evaluate',data,method:'POST'}).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					if(res.code==200){
						if(item.hasAgree){
							item.hasAgree=0
							item.agreeCount>0?item.agreeCount-=1:item.agreeCount=0
						}else{
							item.hasAgree=1
							item.agreeCount+=1
						}
					}
					this.$forceUpdate()
				})
			},
			
		}
	}
</script>
<style lang="scss" scoped>
.page-wrap{
	position: relative;
	padding:0 30upx 30upx 30upx;
	/deep/ .u-swiper-image{
		border-radius: 8upx;
	}
	.page-top{
		width: 100%;
		position: relative;
		overflow: hidden;
		.search-wrap{
			display: flex;
			margin:24upx auto;
			display: flex;
			align-items: center;
			.left{
				width: 88%;
				background-color: #fff;
				border-radius: 12upx;
				padding: 25upx;
				margin-right: 20upx;
				image{
					width: 36upx;
					margin:0 20upx;
				}
			}
			.right{
				position: relative;
				background-color: #fff;
				padding: 14upx;
				border-radius: 12upx;
				image{
					width: 50upx;
				}
				text{
					position: absolute;
					top: 0upx;
					right: 0upx;
					font-size: 20upx;
					color: #fff;
					display: block;
					background-color: #EF0303;
					border-radius: 50%;
					text-align: center;
                    padding: 6upx 12upx ;
				}
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
		padding: 20upx;
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
	.model-wrap{
		margin-bottom: 30upx;
	}
	.list-wrap{
		background-color: #f2f2f2;
		padding-bottom: 30upx;
		height: 100%;
		.info{
			background-color: #fff;
			padding: 30upx;
			margin-bottom: 30upx;
			.info-top{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 20upx;
				.info-user{
					display: flex;
					align-items: center;
					.user-avatar{
						width: 80upx;
						height: 80upx;
						border-radius: 50%;
						margin-right: 20upx;
					}
				}
				.reward{
					color: #f59a23;
					display: flex;
					align-items: center;
				}
				.end{
					color: #666;
				}
			}
			.info-center{
				.info-title{
					font-size: 30upx;
					font-weight: 600;
				}
				.note-info{
					margin: 20upx 0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.note{
						color: #333;
						font-size: 30upx;
						line-height: 46upx;
						margin-right: 20upx;
						
					}
					.note-img{
						flex-shrink: 0;
						width: 140upx;
						height: 140upx;
						border-radius: 18upx;
					}
				}
				.flex-c{
					flex-direction: column;
					align-items: baseline;
				}
			}
			.info-bottom{
				@include XflexBox(flex-start);
				text{
					margin-right: 20upx;
					padding-right: 20upx;
					border-right:2upx solid #ddd;
					&:last-child{
						border:none;
					}
				}
			}
			.video{
				width: 100%;
				margin-bottom: 30upx ;
			}
		}
	}
}
</style>
