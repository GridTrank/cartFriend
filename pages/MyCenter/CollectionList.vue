<template>
	<view class="page-wrap">
		<view class="list-wrap model-wrap">
			<template v-if="pageType!=='recommend'">
				<view class="info " v-for="(item,index) in dataList" :key="index" @click="toDetail(item)">
					<!-- 收藏 浏览 我的提问-->
					<view class="info-top" v-if="pageType!=='question'">
						<view class="info-user">
							<image class="user-avatar" :src="item.memberPhoto"></image>
							<view class="nick-name">{{item.memberNickName}}</view>
						</view>
						<view @click.stop="handleReward(item,index)" class="reward" v-if="pageType=='collect' || pageType=='browse'">
							{{pageType=='collect'?'取消收藏':pageType=='browse'?'删除':''}}
						</view>
					</view>
					<view class="info-center">
						<view class="info-title twoHidden"  v-if="pageType!=='question'">
							{{item.productTitle}}
						</view>
						<view class="note-info">
							<view class="note threeHidden">
								{{ item.productContent || item.content}}
							</view>
						
							<template 
								v-if="(item.productType!==3 && item.productPhotos) || (pageType=='question' && item.photos)"
							>
								<scroll-view scroll-x="true" class="img-wrap mt20">
									<image 
									v-for="(img,i) in (item.productPhotos || item.photos).split(',') "
									:key="i"
									class="note-img"  
									:src="img" >
									</image>
								</scroll-view >
							</template>
							
							<template v-if="item.productType==3 && item.productPhotos">
								<video 
								class="video"
								:show-center-play-btn="false"
								:controls='false'
								objectFit="cover"
								:src="item.productPhotos" >
								</video>
							</template>
						</view>
					</view>
					<view class="info-bottom">
						<text>{{ pageType=='collect' ||  pageType=='browse'? item.productAgreeCount: item.agreeCount}}赞同</text>
						<text>{{ pageType=='collect' ||  pageType=='browse'? item.productViewCount : item.viewCount}}浏览量</text>
						<text>{{ pageType=='collect' ||  pageType=='browse'? item.productCommentCount : item.commentCount }}评论</text>
						<text @click.stop="delQuestion(item,index)" class="del" v-if="pageType=='question'">删除</text>
					</view >
				</view>
			</template>
			
			<!-- 推荐问题 -->
			<template v-else>
				<view class="info " v-for="(item,index) in dataList" :key="index" >
					<view class="info-top">
						<view class="info-user">
							<image class="user-avatar" :src="item.photos"></image>
							<view class="nick-name">{{item.memberNickName}}</view>
						</view>
						<view @click="toDetail(item)" class=" bg-default1">
							去回答
						</view>
					</view>
					<view class="info-center">
						<view class="info-title twoHidden" >{{item.title}}</view>
						<view class="note-info" >
							<view class="note threeHidden">
								{{ item.content}}
							</view>
							
							<scroll-view v-if="item.photos" scroll-x="true" class="img-wrap mt20">
								<image 
								v-for="(img,i) in item.photos.split(',') "
								class="note-img"  
								:src="img" >
								</image>
							</scroll-view >
						</view>
					</view>
				
					<view class="info-bottom">
						<text>{{item.agreeCount}}赞同</text>
						<text>{{ item.viewCount}}浏览量</text>
						<text>{{item.replyCount}}回答</text>
					</view>
				</view>
				
			</template>
		</view>
		<view class="tips" :class="showNoData && 'no-da'">
			{{isContinue?'上拉加载更多~':'暂无更多数据~'}}
		</view>
	</view>
    
</template>

<script>
	import invitationList from '@/components/invitation-list/invitation-list'
	import {getData} from '@/common/mixin/getData.js'
	export default{
		components:{invitationList},
		mixins:[getData],
		data(){
			return{
				item:[],
				pageType:'',
				
			}
		},
		onLoad(e) {
			this.pageType=e.pageType
			uni.setNavigationBarTitle({
			　　title:e.pageType=='collect'?'我的收藏':
					e.pageType=='question'?'我的提问':
					e.pageType=='recommend'?'推荐问题':
					'我的浏览'
			})
			if(this.pageType=='collect'){
				this.url='/goods/product/myCollect'
			}else if(this.pageType=='question'){
				this.url='/goods/product/myQuestion'
			}else if(this.pageType=='recommend'){
				this.url='/goods/product/recommendMore'
			}else{
				this.url='/goods/product/myView'
			}
		},
		
		methods:{
			handleReward(item,index){
				let url="", data={},method=''
				if(this.pageType=='collect'){
					url='/goods/product/collect'
					data={
						productId:item.productId,
						isCollect:0
					}
					method='POST'
				}else if(this.pageType=='browse'){
					url='/goods/product/deleteView/'+item.id
					data={}
				}
				uni.showModal({
					title: '提示',
					content: this.pageType=='collect'?'确定取消该收藏吗？':this.pageType=='browse'?'确定删除该记录吗？':'',
					success: res => {
						if(res.confirm){
							this.$http({url,data,method}).then(res=>{
								uni.showToast({
									title:res.msg,
									icon:'none'
								})
								setTimeout(()=>{
									this.dataList.splice(index,1)
								},1500)
								
							})
						}
					},
					fail: () => {
						
					},
				});
			},
			// 删除我的提问
			delQuestion(item,index){
				uni.showModal({
					title: '提示',
					content:'确定删除该数据吗？',
					success: res => {
						if(res.confirm){
							this.$http({url:'/goods/product/delete/'+item.id}).then(res=>{
								uni.showToast({
									title:res.msg,
									icon:'none'
								})
								if(res.code==200){
									this.dataList.splice(index,1)
								}
							})
						}
					},
					fail: () => {
						
					},
				});
			},
			toDetail(item){
				// if(this.pageType!=='collect' ){
				// 	return
				// }
				uni.navigateTo({
					url:'/pages/InvitationDetail/InvitationDetail?productId='+ (item.productId || item.id)
				})
			},
		},
		
	}
</script>

<style scoped lang="scss">
	.page-wrap{
		min-height: 100vh;
		padding: 30upx;
	}
	.list-wrap{
		.info{
			background-color: #fff;
			padding: 30upx;
			border-bottom: 1px solid #f1f1f1;
			&:last-child{
				border: none;
			}
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
				
			}
			.info-center{
				.info-title{
					font-size: 30upx;
					font-weight: 600;
				}
				.note-info{
					margin: 20upx 0;
					.note{
						color: #666;
						font-size: 28upx;
						margin-right: 20upx;
					}
					.img-wrap{
						display: flex;
						flex-wrap: nowrap;
						white-space: nowrap;
						.note-img{
							flex-shrink: 0;
							width: 200upx;
							height: 300upx;
							border-radius: 18upx;
							margin-right: 30upx;
						}
					}
				}
			}
			.info-bottom{
				@include XflexBox(flex-start);
				position: relative;
				text{
					margin-right: 20upx;
					padding-right: 20upx;
					color: #676D82;
					font-size: 28upx;
				}
				.del{
					position: absolute;
					right: 0;
					padding: 6upx 34upx;
					border-radius: 24upx;
					background-color: #ddd;
					margin: 0;
				}
			}
			.video{
				width: 100%;
				margin-bottom: 30upx ;
			}
		}
	}
	.reward{
		padding: 12upx 24upx;
		border-radius: 8upx;
		color: $base-color;
		border: 1px solid $base-color;
		font-size: 24upx;
		display: flex;
		align-items: center;
	}
	.del{
		display: inline-block;
		float: right;
		margin-bottom: 20upx;
	}
	.tips{
		width: 100%;
		padding: 20upx 0;
		text-align: center;
		color: #666;
		font-size: 28upx;
	}
	.no-da{
		margin-top: 300upx;
	}
</style>
