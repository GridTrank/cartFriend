<template>
	<view class="page-wrap">
		<page-header
		title="我的"
		:showLeft='false'
		:white='white'
		textColor="#000"
		>
		</page-header>
		<view class="user-info">
			<image class="top_bg" src="http://120.24.56.30:9000/system/wd_bg2.png" mode="widthFix"></image>
			<view class="info">
				<image class="avatar" :src="userInfo.photo || userInfo.avatarUrl" ></image>
				
				<view class="info-top row jc-sb">
					<view class="left">
						<view class="nick-name">{{userInfo.nickName}}</view>
						<view class="phone mt10 row" v-if="userInfo.phone">
							{{userInfo.phone || ''}}
							<image class="p-img" src="http://120.24.56.30:9000/system/wd_sj.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="right row">
						<navigator url="./SetInfo" hover-class="none"  class="change">
							<image src="http://120.24.56.30:9000/system/wd_bj.png" mode="widthFix"></image>
						</navigator>
						<navigator url="./Message" hover-class="none" class="mesage"> 
							<image src="http://120.24.56.30:9000/system/wd_icon4.png" mode="widthFix"></image>
						</navigator>
						
					</view>
				</view>
				
				<view class="autograph mt20">个性签名：{{userInfo.description || ''}}</view>
				<view class="xflex-list mt40 list" >
					<view :class="['item','column','bg'+(index+1)]" @click="toPage(item)" v-for="(item,index) in toolList" :key="index">
						<image class="i-img" :src="item.img" mode="widthFix"></image>
						<view class="text row">
							<view class="i-t2">{{item.value}}</view>
							<view class="i-t1">{{item.label}}</view>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		
		<view class="to-page model-wrap xflex-list mt30 ">
			<navigator hover-class="none" url="./PersonalHome" class="column">
				<image src="http://120.24.56.30:9000/system/wd_icon1.png" mode="widthFix"></image>
				<text>个人主页</text>
			</navigator>
			<navigator hover-class="none" url="../Release/Release" class="column">
				<image src="http://120.24.56.30:9000/system/wd_icon2.png" mode="widthFix"></image>
				<text>发布</text>
				
			</navigator>
			<navigator hover-class="none" url="./TaskList" class="column">
				<image src="http://120.24.56.30:9000/system/wd_icon3.png" mode="widthFix"></image>
				<text>我的任务</text>
			</navigator>
		</view>
		
		<!-- 推荐问题 -->
		<view class="region model-wrap  mt30" v-if="question.content">
			<view class="xflex-list tjwt">
				<text class="f32-c333 fwb" >推荐问题</text>
				<text class="f28-c666" @click="toPage({url:'/pages/MyCenter/CollectionList?pageType=recommend'})">更多问题</text>
			</view>
			<view class="question mt20">
				<view class="title f32-c333 fwb twoHidden">
					{{question.content}}
				</view>
				<view class="bottom xflex-list jc-sb mt40">
					<!-- <text class="f28-c666">{{question.replyCount}}已回答</text> -->
					<view class="btns xflex-list">
						<view class="btn left" @click="getQuestion">忽略</view>
						<view class="btn right" @click="showPop=true">去回答</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 访客列表 -->
		<view class="region  model-wrap mt30" v-if="dataList.length>0">
			<text class="title f32-c333 fwb">访客列表</text>
			<view class=" list">
				<view class="row item mt30 jc-sb" v-for="(item,index) in dataList" :key="index">
					<view class="child-list mt20 row">
						<image class="user-img avatar" :src="item.memberPhoto"></image>
                        <navigator hover-class="none" :url="'/pages/MyCenter/PersonalHome?id='+item.userId" class="user column">
                            <text class="name oneHidden">{{item.memberNickName}}</text>
							<text class="time">{{item.visitTime}}</text>
                        </navigator>
					</view>
					<view class="handle-btn row">
						<view class="btn msg" @click="userHandle(1,item)">留言</view>
						<view class="btn fol" @click="userHandle(2,item)">{{item.isAttention?'已关注':'关注'}}</view>
					</view>
				</view>
			</view>
		</view>
        <!-- 回答问题 -->
        <u-popup v-model="showPop" mode="bottom">
            <view class="pop-page">
                <view class="pop-top">
                    <view class="t1" @click="showPop=false">取消</view>
                    <view class="t2" @click="answer">发布</view>
                </view>
                <view class="pop-tit f32-c333 fwb twoHidden">
                    {{question.content}}
                </view>
                <view class="pop-input mt30">
                    <u-input 
                    type="textarea" 
                    placeholder-style="font-size:12px" 
                    placeholder="请填写你的回答" 
                    height="300"
                    v-model="answerValue" 
                    />
                </view> 
            </view>
        </u-popup>
	</view>
</template>
<script>
	import {getData} from '@/common/mixin/getData.js'
	export default {
		mixins:[getData],
		data() {
			return {
                showPop:false,
				toolList:[
					{label:'收藏',value:0,url:'/pages/MyCenter/CollectionList?pageType=collect',img:'http://120.24.56.30:9000/system/wd_icon7.png'},
					{label:'提问数',value:0,url:'/pages/MyCenter/CollectionList?pageType=question',img:'http://120.24.56.30:9000/system/wd_icon5.png'},
					{label:'最近浏览',value:0,url:'/pages/MyCenter/CollectionList?pageType=browse',img:'http://120.24.56.30:9000/system/wd_icon6.png'}
				],
				question:{},
                answerValue:'',
				userInfo:uni.getStorageSync('userInfo'),
				white:false,
				isContinue:true,
				question:{},
				total:'',
			}
		},
		onLoad() {
			this.url='/member/visitList/'
		},
		onShow() {
			
			this.getCount()
			this.getQuestion()
			this.$getUserInfo().then(res=>{
				this.userInfo=res
			})
			this.getMessageNum()
		},
		onPageScroll(res) {
			if(res.scrollTop>=100){
				this.white=true
			}else if(res.scrollTop<=30){
				this.white=false
			}
		},
		methods: {
			getCount(){
				uni.showLoading({
					title:'加载中'
				})
				this.$http({url:'/goods/product/collectAndView/'}).then(res=>{
					uni.hideLoading()
					this.toolList[0].value=res.data.collectCount
					this.toolList[1].value=res.data.questionCount
					this.toolList[2].value=res.data.viewCount
				})
			},
			// 私信--关注
			userHandle(val,item){
				if(val==1){
					let info={
						userId:item.userId,
						photo:item.memberPhoto,
						nickName:item.memberNickName
					}
					uni.navigateTo({
						url:'../Chat/Chat?user='+JSON.stringify(info)
					})
				}else{
					let data={
						memberId:item.userId,
						isAttention:item.isAttention?0:1
					}
					this.$http({url:'/member/attention',data,method:'POST'}).then(res=>{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
						if(res.code==200){
							// item.isAttention=item.isAttention==0?1:0
							this.dataList.forEach((el)=>{
								if(item.userId==el.userId){
									el.isAttention=el.isAttention==0?1:0
								}
							})
							
						}
						
					})
				}
			},
			getQuestion(){
				this.$http({url:'/goods/product/recommend/',data:{size:1,current:1}}).then(res=>{
					this.question=res.data.records[0]
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
			toPage(item){
				uni.navigateTo({
					url:item.url
				})
			},
			answer(){
				if(!this.answerValue)return
				let url='/goods/message/add/'
				let data={
					productId:this.question.id,
					memberId:this.question.userId,
					action:2,
					reply:this.answerValue
				}
				this.$http({url,data,method:'post'}).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					if(res.code==200){
						setTimeout(()=>{
							this.showPop=false
							this.getQuestion()
						},1500)
					}
				})
			}
		},

	}
</script>
<style lang="scss" scoped>
.page-wrap{
	padding:30upx;
	background-image: url('http://120.24.56.30:9000/system/wd_bg1.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position-y: -7rpx;
	.user-info{
		.top_bg{
			margin: auto;
			display: block;
		}
		.info{
			padding:60upx 40upx 40upx 40upx;
			position: relative;
			border-radius: 24upx;
			background-color: #fff;
			position: relative;
			.avatar{
				width: 140upx;
				height: 140upx;
				position: absolute;
				left: 50upx;
				top: -85upx;
				box-shadow: 0 0 10upx 2upx #ddd;
			}
			.info-top{
				.left{
					.nick-name{
						color: #000;
						font-size: 34upx;
					}
					.phone{
						.p-img{
							width: 32upx;
							margin-left: 30upx;
						}
					}
				}
				.right{
					image{
						width: 80upx;
						height: 80upx;
						margin-left: 20upx;
					}
				}
			}
			
			.list{
				justify-content: space-between;
				.item{
					width: 190upx;
					align-items: center;
					padding: 30upx 0;
					border-radius: 12upx;
					.i-img{
						width: 30upx;
					}
				}
				.bg1{
					background-color: rgba(0, 145, 255, 0.2);
				}
				.bg2{
					background-color: rgba(247, 181, 0, 0.2);
					.i-img{
						width: 44upx;
					}
				}
				.bg3{
					background-color: rgba(98, 54, 255, 0.2);
					.i-img{
						width: 44upx;
					}
				}
				.xflex-list-item{
					.i-t1{
						font-size: 24upx;
						color: #666;
					}
					.i-t2{
						font-size: 28upx;
						font-weight: 600;
						color: #000000;
						margin-right: 10upx;
					}
				}
			}
		}
	}
	.to-page {
		justify-content: space-around;
		padding: 30upx 20upx;
		.column{
			text-align: center;
			align-items: center;
			color: #000;
			font-size: 32upx;
			image{
				width: 60upx;
				margin-bottom: 20upx;
			}
		}
	}
	.region{
		.tjwt{
			padding-bottom: 20upx;
			border-bottom: 1px solid #f1f1f1;
		}
		.xflex-list{
			justify-content: space-between;
		}
		.question{
			.btns{
				width: 100%;
				.btn{
					width: 300upx;
					height: 80upx;
					border-radius: 8upx;
					line-height: 80upx;
					text-align: center;
					font-size: 28upx;
				}
				.left{
					border: 1px solid $base-color;
					color: $base-color;
				}
				.right{
					background-color: $base-color;
					color: #fff;
				}
			}
		}
        .list{
            .item{
                width: 100%;
                .child-list{
					.user-img{
					    width: 80upx;
					    margin-right: 20upx;
					}
                    .name{
                        font-size: 28upx;
						color: #000;
						
                    }
					.time{
						font-size: 24upx;
						color: #666;
					}
                }
				.handle-btn{
				    .btn{
				        width: 110upx;
						height: 48upx;
						line-height: 48upx;
						text-align: center;
						border-radius: 28upx;
				    }
					.msg{
						border: 1px solid $base-color;
						color: $base-color;
						margin-right: 10upx;
					}
					.fol{
						background-color: $base-color;
						color: #fff;
					}
				    
				}
                
            }
        }
	}
    .pop-page{
        min-height: 80vh;
        background-color: #f2f2f2;
        .pop-top{
            padding: 40upx;
            display: flex;
            justify-content: space-between;
            .t1{
                font-size: 36upx;
                color: #666;
            }
            .t2{
                font-size: 36upx;
                color: $default-color;
            }
        }
        .pop-tit{
            padding: 0 40upx;
        }
        .pop-input{
            height: 500upx;
            background-color: #fff;
            padding: 40upx;
        }
    }
}
</style>
