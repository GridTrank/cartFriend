<template>
	<view class="list-wrap" >
		<view  class="info model-wrap" v-for="(item,index) in item" :key="index" @click="toDetail(item)">
			<view class="info-top row jc-sb" v-if="pageType!=='PersonalHome'">
				<view @click.stop="toCenter(item)" class="info-user row">
					<view class="avatar-wrap">
						<image class="user-avatar" :src="item.memberPhoto"></image>
						<!-- <image  class="vip-img-avatar" src="http://120.24.56.30:9000/system/vip.png" ></image> -->
					</view>
					
					<view class="right column" >
						<view class="nick-name">{{item.nickName ||item.memberNickName }}</view>
						<view class="bg-b" v-if="item.userId!==user_id">关注</view>
					</view>
				</view>
				
				<view class="row">
					<view class="reward xs" v-if="item.amount>0 && !item.isClose">
						<text class="left">悬赏</text>
						<text>￥{{item.amount}}</text>
					</view>
					<image 
					v-if="item.amount>0 && item.isClose" 
					class="end" 
					src="http://120.24.56.30:9000/system/iscose.png" mode="widthFix">
					</image>
					
					<view class="c-name">
						{{item.circleName}}
					</view>
				</view>
			</view>
			<view class="shunlujia" v-if="item.type==4">
				<view class="top row jc-sb">
					<text class="left">找顺路司机</text>
					<text class="right">2021-12-22 12:23</text>
				</view>
				<view class="address row">
					<text>湖南长沙</text>
					<image src="http://120.24.56.30:9000/system/slj-icon1.png" ></image>
					<text>广州</text>
				</view>
			</view>
			<view class="info-center">
				<view class="info-title twoHidden" >
					<!-- <text class="type t2" v-if="item.type==2">文章</text> -->
					<text class="type t3" v-if="item.type==3">视频</text>
					{{item.title }}
				</view>
				<view class="note-info flex-c" >
					<view class="note threeHidden">
						<text class="type t1" v-if="item.type==1">提问</text>
						<text class="type t4" v-else-if="item.type==4">顺路驾</text>
						{{item.content }}
					</view>
					<template v-if="(item.type==1 || item.type==2) && item.photos">
						<scroll-view scroll-x="true" class="img-wrap mt20">
							<image 
							v-for="(img,i) in item.photos.split(',')"
							class="note-img"  
							:key="i"
							mode="aspectFill"
							:src="img" >
							</image>
						</scroll-view >
					</template>
					<template v-else-if="item.type==3">
						<video 
						ref='video'
						class="video mt20"
						:show-center-play-btn="false"
						:controls='false'
						objectFit="cover"
						:src="item.photos" ></video>
					</template>
				</view>
			</view>
			
			<view class="info-bottom">
				<template v-if="pageType!=='PersonalHome'">
					<text>{{item.viewCount}} 浏览量</text>
					<text v-if='item.type==1' @click.stop="agree(item)">{{item.agreeCount}} {{item.hasAgree ?'已赞同':'赞同'}}</text>
					<text v-else @click.stop="agree(item)">{{item.agreeCount}}{{item.hasAgree ?'已点赞':'点赞'}}</text>
					<text>{{item.type==1?item.replyCount:item.commentCount}} {{item.type==1?'回答':'评论'}}</text>
				</template>
				<template v-else> 
					<text>{{item.shareCount}}转发</text>
					<text>{{(item.type==1 || !item.type)?item.replyCount:item.commentCount}} {{(item.type==1 || !item.type)?'回答':'评论'}}</text>
					<text >{{item.opposeCount}}反对</text>
				</template>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Array,
				default:[]
			},
			pageType:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				type:'',
				user_id:uni.getStorageSync('user_id'),
			};
		},
		created() {
			this.user_id=uni.getStorageSync('user_id')
		},
		methods:{
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
				this.$http({url:'/goods/product/evaluate',data,method:'POST'}).then(res=>{
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
.list-wrap{
	background-color: #f2f2f2;
	padding-bottom: 30upx;
	// height: 100%;
	.info{
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
				}
				.right{
					align-items: baseline;
					.nick-name{
						color: #040404;
						font-size: 28upx;
						margin-bottom: 10upx;
					}
				}
			}
			.bg-b,.c-name{
				background: linear-gradient(225deg, #EDD084 0%, #F0B961 100%);
				color: #fff;
				font-size: 24upx;
				padding: 4upx 14upx;
				border-radius: 4upx;
			}
			.reward{
				background-image: url('http://120.24.56.30:9000/system/xuanshan.png');
				background-repeat: no-repeat;
				background-size: 100% 100%;
				width: 150upx;
				height: 46upx;
				line-height: 46upx;
				margin-right: 20upx;
				font-size: 24upx;
				color: #7C5E16;
				.left{
					margin: 0 10upx;
				}
			}
			.end{
				width: 80upx;
				margin-right: 20upx;
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
					color: #333;
					font-size: 30upx;
					line-height: 46upx;
					margin-right: 20upx;
					
				}
				.img-wrap{
					display: flex;
					flex-wrap: nowrap;
					white-space: nowrap;
				}
				.note-img{
					flex-shrink: 0;
					width: 200upx;
					height: 200upx;
					border-radius: 18upx;
					margin-right: 30upx;
				}
			}
			.flex-c{
				flex-direction: column;
				align-items: baseline;
			}
			.type{
				border-radius: 4upx;
				font-size: 24upx;
				padding: 4upx 14upx;
				margin-right: 8upx;
			}
			.t1{
				background-color: #fff7e3;
				color: #DB9900;
			}
			.t2{
				background-color: #e5f4fe;
				color: #0092FF;
			}
			.t3{
				background-color: #ecf2e5;
				color: #417F00;
			}
			.t4{
				background-color: #F0EAFF;
				color: #6A2AFF;
			}
		}
		.shunlujia{
			background-image: url('http://120.24.56.30:9000/system/slj-bg1.png');
			background-size: cover;
			height: 170upx;
			width: 100%;
			padding: 30upx;
			.top{
				.left{
					background-color: #FF7D41;
					padding: 4upx 12upx;
					border-radius: 20upx;
					font-size: 24upx;
					color: #fff;
				}
				.right{
					color: #4B2F12;
					font-size: 28upx;
				}
			}
			.address{
				// justify-content: center;
				color: #0D1722;
				font-size: 40upx;
				margin-top: 20upx;
				image{
					margin: 0 30upx;
					width:60upx ;
					height: 60upx;
				}
			}
		}
		.info-bottom{
			@include XflexBox(flex-start);
			text{
				font-size: 28upx;
				color: #676D82;
				margin-right: 20upx;
				padding-right: 20upx;
			}
		}
		.video{
			width: 100%;
			margin-bottom: 30upx ;
		}
	}
}
</style>
