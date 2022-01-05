<template>
    <view class="page-wrap">
		<page-header
		title="个人中心"
		:white='white'
		>
		</page-header>
        <view class="user-info model-wrap">
			<view class="user row jc-sb">
				<view class="left">
					<view class="name">用户昵称：{{userInfo.nickName}}</view>
					<view class="autograph mt20">个性签名：{{userInfo.description || ''}}</view>
				</view>
                <view class="right column">
                    <image class="avatar" :src="userInfo.photo "></image>
                    <!-- <image class="vip-avatar" src="http://120.24.56.30:9000/system/vip.png" ></image> -->
                </view>
			</view>
			<view class="fans row jc-sb" v-if="isNowUser">
				<navigator hover-class="none" url="./FansFollow?pageType=follow" class="fans-d f1">
					<image class="f-img" src="http://120.24.56.30:9000/system/wd_gz.png"></image>
					<view class="row">
						<text class="f-d-n">{{userInfo.attentionCount }}</text>
						<text class="f-d-t">关注</text>
					</view>
				</navigator>
				<navigator hover-class="none" url="./FansFollow?pageType=fan" class="fans-d f2">
					<image class="f-img" src="http://120.24.56.30:9000/system/wd_fx.png" mode=""></image>
					<view class="row">
						<text class="f-d-n">{{userInfo.fansCount}}</text>
						<text class="f-d-t">粉丝</text>
					</view>
				</navigator>
			</view>
			<view class="fans row jc-sb" v-else>
				<view @click="userHandle(1)" class="fans-d f1">
					<image class="f-img" src="http://120.24.56.30:9000/system/wd_fx.png" mode=""></image>
					<view class="row">
						<text class="f-d-t">私信</text>
					</view>
				</view>
				<view @click="userHandle(2)" class="fans-d f2">
					<image class="f-img" src="http://120.24.56.30:9000/system/wd_gz.png" mode=""></image>
					<view class="row">
						<text class="f-d-t">{{userInfo.isAttention?'已关注':'关注'}}</text>
					</view>
				</view>
			</view>
        </view>
		<view class="content model-wrap mt30">
			<view class="my-list">
				<view class="list-type">
					<u-tabs ref="tabs" 
					:is-scroll="false" 
					:current="active" 
					:list="typeList" 
					@change="handleType" 
					active-color="#5FB800">
					</u-tabs>
				</view>
                <template v-if="dataList.length>0">
                    <invitation-list
                    pageType='PersonalHome' 
                    ref='list' 
                    :item="dataList">
                    </invitation-list>
                </template>
                <template v-else>
                    <no-data></no-data>
                </template>
				
			</view>
		</view>
		<!-- <view class="tips mt30" :class="showNoData && 'no-da'" >
			{{isContinue?'上拉加载更多~':'暂无更多数据~'}}
		</view> -->
		
    </view>
</template>

<script>
	import {getData} from '@/common/mixin/getData.js'
	export default{
		mixins:[getData],
		data(){
			return{
				white:false,
				userInfo:uni.getStorageSync('userInfo'),
				typeList:[
					{name:'我的帖子'},
					{name:'我的回答'}
				],
				active:0,
				userId:'',
				isNowUser:true
			}
		},
		onPageScroll(res) {
			if(res.scrollTop>=100){
				this.white=true
			}else if(res.scrollTop<=30){
				this.white=false
			}
		},
		methods:{
			handleType(e){
				this.active=e
				this.dataList=[]
				if(this.active){
					delete this.queryData.userId
					this.url='/goods/product/replyList'
				}else{
					this.url='/goods/product/homePage'
					this.queryData.userId=this.userId
				}
				this.getData()
			},
			toDetail(item){
				uni.navigateTo({
					url:'/pages/InvitationDetail/InvitationDetail?productId='+item.id
				})
			},
			getDetail(){
				let data={
					memberId:this.userId 
				}
				this.$http({url:'/member/homePage',data}).then(res=>{
					this.userInfo=res.data
				})
			},
			toMessage(){
				let info={
					userId:userInfo.userId,
					photo:userInfo.memberPhoto,
					nickName:userInfo.nickName
				}
				uni.navigateTo({
					url:'../Chat/Chat?user='+JSON.stringify(info)
				})
			},
			visit(){
				this.$http({url:'/member/visit',data:{memberId:this.userId}}).then(res=>{
					console.log(res)
				})
			},
			// 私信--关注
			userHandle(val){
				if(val==1){
					this.userInfo.userId=this.userId
					uni.navigateTo({
						url:'../Chat/Chat?user='+JSON.stringify(this.userInfo)
					})
				}else{
					let data={
						memberId:this.userId,
						isAttention:this.userInfo.isAttention?0:1
					}
					this.$http({url:'/member/attention',data,method:'POST'}).then(res=>{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
						setTimeout(()=>{
							this.getDetail()
						},1500)
					})
				}
			}
			
		},
		onLoad(e) {
			this.userId=e.id || uni.getStorageSync('user_id')
			if(!e.id || e.id==uni.getStorageSync('user_id')){
				this.isNowUser=true
			}else{
				this.isNowUser=false
				this.typeList[0].name='他的帖子'
				this.typeList[1].name='他的回答'
				this.visit()
			}
			if(this.active){
				this.url='/goods/product/replyList'
			}else{
				this.url='/goods/product/homePage'
				this.queryData.userId=this.userId
			}
            this.getData()
		},
        onShow() {
            this.getDetail()
        }
	}
</script>

<style scoped lang="scss">
	.page-wrap{
		padding:30upx;
		background-image: url('http://120.24.56.30:9000/system/wd_bg3.png');
		background-repeat: no-repeat;
		background-size: 100% 500upx;
		.user-info{
			width: 100%;
			height:auto;
			.user{
				.left{
					width: 66%;
					.name{
						font-size: 44upx;
						color: #000;
					}
					.autograph{
						font-size: 24upx;
						color: #000;
					}
				}
                .right{
                    align-items: center;
                }
			}
			.avatar{
				width: 150upx;
				height: 150upx;
				border-radius: 50%;
			}
            .vip-avatar{
                width: 65upx;
                height: 30upx;
                margin-top: -10upx;
            }
			.fans{
				display: flex;
				margin-top: 35upx;
				
				.fans-d{
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 300upx;
					padding: 30upx 0;
					border-radius: 12upx;
					.f-img{
						width: 32upx;
						height: 32upx;
						display: block;
					}
					.f-d-n{
						color: #000;
						font-size: 36upx;
						font-weight: bold;
						margin-right: 10upx;
					}
					.f-d-t{
						font-size: 24upx;
						color: #666;
					}
				}
				.f1{
					background-color: rgba(0, 145, 255, 0.2);
				}
				.f2{
					background-color: rgba(247, 181, 0, 0.2);
				}
			}
		}
		.content{
			.content-top{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.top-btns{
					display: flex;
					align-items: center;
					.t-b-b{
						background-color: $default-color;
						color: #fff;
						border-radius: 16upx;
						padding: 8upx 20upx;
						font-size: 24upx;
					}
					.b1{
						margin-right: 10upx;
					}
				}
			}
			.my-list{
				/deep/ .list-wrap{
					background-color: #fff;
					.info{
						border-bottom: 2upx solid #f1f1f1;
						border-radius: 0;
						margin-bottom: 0;
						padding: 30upx 0;
						&:last-child{
							border: none;
						}
					}
				}
				.data-list{
					.img-wrap{
						display: flex;
						flex-wrap: nowrap;
						white-space: nowrap;
						.img{
							width: 200upx;
							margin-right: 30upx;
							display: inline-block;
						}
					}
					.data-type{
						padding: 6upx 10upx;
						background-color: $default-color;
						font-size: 28upx;
						font-weight: 400;
						color: #fff;
						border-radius: 16upx;
						margin-right: 10upx;
					}
					.video{
						width: 100%;
						margin-bottom: 30upx ;
					}
					.user-handle{
						.handle-type{
							margin-right: 20upx;
						}
						.h-t-t1{
							padding: 2upx 12upx;
							font-size: 28upx;
							border-radius: 16upx;
							background-color: $default-color;
							color: #fff;
							margin-right: 8upx;
						}
					}
				}
			}
		}
	}
</style>
