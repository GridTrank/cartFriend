<template>
	<view class="page-wrap" >
		<view class="swiper-wrap" v-if="productInfo.type!==4">
			<view v-if="imageList.length>0">
				<template v-if="productInfo.type!==3 ">
					<!-- <u-swiper
						:list="imageList" 
						height="500"
						imgMode='aspectFill'
						@click="prewImage"
					></u-swiper> -->
				</template>
				<template v-else-if="productInfo.type==3">
					<video
					id="myVideo"
					class="video"
					:autoplay="true"
					objectFit="cover"
					:src="productInfo.photos" >
					</video>
				</template>
			</view>
		</view>
		
		<view class="shunlujia mt20" v-else>
			<image class="sm-img" src="http://120.24.56.30:9000/system/slj-icon4.png" ></image>
			<view class="info mt20">
				<view class="type">
					找顺路司机
				</view>
				<view class="address row">
					<view class="left ad">
						<view class="t1">出发地</view>
						<view class="t2">{{productInfo.origin}}</view>
					</view>
					<image class="jh" src="http://120.24.56.30:9000/system/jiaohuan.png" ></image>
					<view class="right ad">
						<view class="t1">目的地</view>
						<view class="t2">{{productInfo.destination}}</view>
					</view>
				</view>
			</view>
			<view class="phone model-wrap mt20" >
				<view class="row jc-sb">
					<text class="p-num">手机号码</text>
					<view class="p-sw row" v-if="!userInfo.isEffect">联系号码/VIP可见 
                    <image src="http://120.24.56.30:9000/system/slj-icon3.png" ></image> 
                    </view>
				</view>
				<view class="row jc-sb mt20">
					<text class="p-val" @click="callPhone(productInfo.mobilePhone)">{{productInfo.mobilePhone}}</text>
					<image @click="toOpen" v-if="!userInfo.isEffect" class="vip" src="http://120.24.56.30:9000/system/slj-icon2.png" ></image>
				</view>
			</view>
			<view class="time model-wrap mt20">
				<view class="title">
					出发时间
				</view>
				<view class="val mt10">{{productInfo.dateTime}}</view>
			</view>
			<view class="imgs model-wrap mt20" v-if="imageList.length>0">
				<view class="title">
					照片
				</view>
				<scroll-view scroll-x="true" class="img-wrap mt20">
					<image
					class="img"
					v-for="(item,index) in imageList"
					:key="index"
					:src="item" 
					@click="prewImage"
					>
					</image>
				</scroll-view >
			</view>
		</view>
		
		<view class="content-wrap">
			<view class="content model-wrap" >
				<view class="user-info xflex-list jc-sb">
					<view class="user xflex-list" @click="toPerson">
						<image class="user-img" :src="productInfo.memberPhoto " ></image>
						<text class="user-name f28-c333">{{productInfo.memberNickName}}</text>
					</view>
					<view class="zan xflex-list">
						<text class="more bg-default1" @click="showMoreList=true">更多</text>
						<text class="z-left bg-default1">点赞{{productInfo.agreeCount}}</text>
					</view>
				</view>
				<view class="detail mt20">
					<view class="f32-c333 fwb twoHidden" v-if="productInfo.title">
						{{productInfo.title}}
					</view>
					<view class="mt20 txt">
                        <!-- <u-parse :html="productInfo.content"></u-parse> -->
						{{productInfo.content}}
					</view>
                    
                    <view v-if="productInfo.type!==3 && imageList.length>0" class="img-wrap mt20">
                       <image 
                       v-for="(item,index) in  imageList"
                       :key="index"
                       :src="item" 
                       mode="widthFix">
                       </image> 
                    </view>
				</view>
				<view class="jiesuan mt20" v-if="productInfo.type==1 && productInfo.amount>0">
					<text class="close"  v-if="productInfo.isClose">已结算</text>
					<text class="ing" v-else>悬赏金额￥{{ productInfo.amount}}</text>
				</view>
			</view>
			<!-- 评论 -->
			<view class="evaluate mt20 model-wrap">
				<view class="top xflex-list">
					<text class="all">全部{{productInfo.type==1?'回答':'评论'}}</text>
					<view class="sort-type">
						<u-select ></u-select>
						<u-input v-if="productInfo.type!==1" v-model="sortType" style="width: 20%;" @click="showSortType=true" type="select" border />
					</view>
				</view>
			    <view class="eva-item xflex-list" >
			        <view class="eva-list mt40 xflex-list-item-row" v-for="(item,index) in commentList " :key="index">
			            <image class="eva-img" :src="item.memberPhoto" ></image>
			            <view class="eva-info">
			                <view class="eva-model">
			                    <view class="name f32-c333 fwb">{{item.memberNickName}} </view>
			                    <view class="best bg-default1" v-if="item.isBest">最佳答案</view>
			                </view>
			                <view class="eva-content mt20 f28-c666">{{item.content || item.answer}} </view>
			                <view class="eva-model mt30">
			                    <view class=" xflex-list">
			                        <view class="num-s">
			                            <text class="num-t1" @click="remark(2,item,'agree')">{{item.hasAgree?'已赞同':'赞同'}}</text>
			                            <text class="num-t2">{{item.agreeCount}}</text>
			                        </view>
			                        <view class="num-s">
			                            <text class="num-t1" @click="remark(2,item,'opposition')">{{item.hasOppose?'已反对':'反对'}}</text>
			                            <text class="num-t2">{{item.opposeCount}}</text>
			                        </view>
			                        <view class="num-s" v-if="productInfo.type!==1">
			                            <text class="num-t1" @click="selectComment(item)" >{{productInfo.type==1?'回答':'评论'}}</text>
			                            <text class="num-t2">{{item.commentCount}}</text>
			                        </view>
									<!-- 有赏任务结算区域 -->
									<view class="num-s"  v-if="productInfo.type==1">
										<!-- 查看本人帖子 -->
									    <text class="num-t1 jiesuan-btn bg-default1"  v-if="user_id==productInfo.userId && !productInfo.isClose " @click="toSettle(item,index)" >去结算</text>
									</view>
			                    </view>
								
								<view class="time">
								    {{item.createTime}}
								</view>
			                </view>
			                <view class="detail-list mt30" v-if="item.commentList.length>0">
			                    <view class="detail-item threeHidden" v-for="(vv,vi) in item.commentList" :key="vi">
			                        <text class="f32-c333 t1 fwb">{{vv.memberNickName}}：</text>
			                        <text class="f28-c666 t2 ">{{vv.content || vv.reply}}</text>
			                    </view>
								
			                    <view v-if="item.commentCount>3" class="show-more mt20" @click="showMoreComment(item)">
			                        查看全部{{item.commentCount}}条{{productInfo.type==1?'回答':'评论'}}
			                    </view>
			                </view>
			            </view>
			        </view>
			    </view>
				
				<view class="tips column mt30" v-if="commentList.length<=0" >
					<image  src="http://120.24.56.30:9000/system/no-data.png" mode="widthFix"></image>
					<text class="f28-c666 mt20">暂无更多数据</text>
				</view>
			</view>
			
		</view>

		<!-- 底部选项 -->
		<view class="foot-tool">
			<view class="xflex-list foot-list">
				<u-button 
				:custom-style="customStyle"
				class="xflex-list-item-row foot-item"  
				@click="toolHandle(item,index)" 
				v-for="(item,index) in toolList" 
				:open-type="index===0?'share':''"
				:key="index">
					<view class="tool-item column">
						<image class="tool-img" :src="item.img" mode="widthFix"></image>
						<view class="row">
							<text class="t1">{{item.label}}</text>
							<text class="t2">({{item.num}})</text>
						</view>
					</view>
					
				</u-button>
			</view>
		</view>
        
		<!-- 评论输入框 -->
        <view class="fixed-wrap-bg" v-if="showEvaInput" @click.stop ="showEvaInput=false">
            <view class="eva-input row" :class="focus && 'is-focus'" @click.stop="showEvaInput=true">
                <input type="text" maxlength="1000" :focus="focus" @blur="focus=false" @focus="focus=true" v-model="comment" />
                <view :class="['bg-default1', focus && 'foc']"  @click="sendComment"> 发送 </view>
            </view> 
        </view>
		
		<!-- 更多选择 -->
		<u-popup v-model="showMoreList" mode="bottom">
			<view class="foot-tool foot-tool-more">
				<view class="xflex-list foot-list">
					<u-button 
					:custom-style="customStyle"
					class="xflex-list-item-row foot-item"  
					@click.stop="selectMore(item,index)" 
					v-for="(item,index) in moreList" 
					:open-type="item.value==3?'share':''"
					:key="index">
						<view class="tool-item column">
							<image class="tool-img" :src="item.img" mode="widthFix"></image>
							<view class="row">
								<template v-if="index===0">
									{{productInfo.isCollect===1?'已收藏':'收藏'}}
								</template>
								<template v-else>
									{{ item.label}}
								</template>
							</view>
						</view>
						
					</u-button>
				</view>
			</view>
		</u-popup>
		
		<!-- 邀请好友 -->
		<u-popup v-model="invitationPop" mode="bottom">
			<view class="friend-wrap">
				<scroll-view class="friend-list " scroll-x="true" @scrolltolower="scrolltolower">
					<view class="item row" v-for="(item,index) in visitorList" :key="index">
						<image class="avatar" :src="item.photo" ></image>
						<view class="name">{{item.nickName}}</view>
						<view class="btn" @click="invitationFriend(item,index)">{{item.isInvite?'已邀请':'邀请'}}</view>
					</view>
				</scroll-view>
			</view>
		</u-popup>
		<u-select v-model="showSortType" :list="sortTypeList" @confirm="confirm"></u-select>
	</view>
</template>
<script>
	import {previewImage} from '@/utils/util.js'
	export default {
		components:{},
		data() {
			return {
				showSortType:false,
				showMoreList:false,
                showEvaInput:false,
				invitationPop:false,
                focus:false,
				sortType:'最新',
				sortTypeList:[
					{label:'最新',value:1},
					{label:'最热',value:2},
				],
				imageList:[],
				moreList:[
					{label:'收藏',value:1,img:'http://120.24.56.30:9000/system/xq-icon1.png'},
					{label:'删除',value:2,img:'http://120.24.56.30:9000/system/delete.png'},
					// {label:'分享',value:3,img:'http://120.24.56.30:9000/system/xq-icon5.png'},
					{label:'邀请好友',value:4,img:'http://120.24.56.30:9000/system/xq-icon2.png'},
				],
				toolList:[
					{label:'转发',num:0,value:1,img:'http://120.24.56.30:9000/system/xq-icon5.png'},
					{label:'评论',num:0,value:2,img:'http://120.24.56.30:9000/system/xq-icon4.png'},
					{label:'反对',num:0,value:3,img:'http://120.24.56.30:9000/system/xq-icon6.png'},
					{label:'赞同',num:0,value:4,img:'http://120.24.56.30:9000/system/xq-icon3.png'}
				],
                comment:'',
				commentList:[],
				productId:'',
				productInfo:{},
                productType:'',
				videoContext:{},
				visitorList:[],
				current:1,
				currentFriend:1,
				size:10,
				sort:1,
				showNoData:true,
				isContinue:true,
				isContinueFriend:true,
				selectId:'',
				commentType:'',
				user_id:'',
				customStyle:{
					border:'none'
				},
				userInfo:uni.getStorageSync('userInfo'),
			};
		},
		watch:{
            "showEvaInput":function(val){
                this.focus=val
            },
            "focus":function(val){
                
            }
        },
		onLoad(e){
			this.productId=e.productId || '1442325109636038658'
			this.user_id=uni.getStorageSync('user_id') || ''
			this.userInfo=uni.getStorageSync('userInfo') || {}
		},
        onShow() {
            this.getDetail()
            if(uni.getStorageSync('token')){
                this.$getUserInfo().then(res=>{
                	this.userInfo=res
                })
            }
        },
        methods:{
			getDetail(){
                let url=uni.getStorageSync('token')?'/goods/product/detail2/':'/goods/product/detail/'
				this.$http({url:url+this.productId,noVerify:true}).then(res=>{
					if(res.data.type!==1){
						this.toolList=[
							{label:'转发',num:0,value:1,img:'http://120.24.56.30:9000/system/xq-icon5.png'},
							{label:'评论',num:0,value:2,img:'http://120.24.56.30:9000/system/xq-icon4.png'},
							{label:'赞同',num:0,value:4,img:'http://120.24.56.30:9000/system/xq-icon3.png'}
						]
                        this.toolList[2].label=res.data.hasAgree?'已赞同':'赞同'
                        this.toolList[2].num=res.data.agreeCount
					}else{
                        this.toolList=[
                            {label:'转发',num:0,value:1,img:'http://120.24.56.30:9000/system/xq-icon5.png'},
                            {label:'评论',num:0,value:2,img:'http://120.24.56.30:9000/system/xq-icon4.png'},
                            {label:'反对',num:0,value:3,img:'http://120.24.56.30:9000/system/xq-icon6.png'},
                            {label:'赞同',num:0,value:4,img:'http://120.24.56.30:9000/system/xq-icon3.png'}
                        ]
                        this.toolList[2].num=res.data.opposeCount
                        this.toolList[2].label=res.data.hasOppose?'已反对':'反对'
                        this.toolList[3].label=res.data.hasAgree?'已赞同':'赞同'
                        this.toolList[3].num=res.data.agreeCount
                        this.toolList[1].label='回答'
                    }
                    if(!this.userInfo.isEffect && res.data.type==4){
                        res.data.mobilePhone=res.data.mobilePhone.substr(0,3)+"****"+res.data.mobilePhone.substr(7)
                    }
                    this.productInfo=res.data
                    this.productType=res.data.type
                    this.imageList=res.data.photos?res.data.photos.split(','):[]
                    this.toolList[0].num=res.data.shareCount
                    this.toolList[1].num= res.data.type==1?res.data.replyCount: res.data.commentCount
					if(res.data.userId!==uni.getStorageSync('user_id') && this.moreList[1].label=='删除'){
						this.moreList.splice(1,1)
					}
					if(uni.getStorageSync('token')){
                        this.getMemList()
                        this.getCommentList('one')
                    }
					
				})
			},
            // 预览图片
			prewImage(e){
				previewImage(this.imageList)
			},
			// 获取评论
			getCommentList(type){
				uni.showLoading({
					title:'加载中'
				})
				let data={},url=''
				if(this.productInfo.type!=1){
					data={
						productId:this.productId,
						sort:this.sort,
						size:this.size,
						current: this.current
					}
					url='/goods/comment/firstLevel/'
				}else{
					data={
						productId:this.productId,
						size:this.size,
						current: this.current
					}
					url='/goods/reply/replyList'
				}
			
				this.$http({url,data}).then(res=>{
					uni.hideLoading()
					if(res.data.records.length>=1){
						this.showNoData=false
					}
					if(res.data.records.length>=this.size ){
						this.isContinue=true
					}else{
						this.isContinue=false
					}
					res.data.records.forEach(item=>{
						if(item){
							item.createTime=item.createTime.slice(5).substring(0,11)
						}
					})
					if(type=='one'){
						this.commentList=res.data.records
					}else{
						this.commentList=this.commentList.concat(res.data.records)
					}
				})
			},
			// 选中评论
			selectComment(item){
				this.showEvaInput=true
				this.selectId=item.id
				this.commentType='second'
			},
			// 发送以及评论
			sendComment(){
				let url='',data={}
				if(this.productInfo.type==1){
					url='/goods/message/add'
					data={
						productId:this.productId,
						action:2,
						memberId:uni.getStorageSync('user_id'),
						answer:this.comment
					}
				}else{
					if(this.commentType=='first'){
						url='/goods/comment/comment1'
						data={
							productId:this.productId,
							content:this.comment
						}
					}else{
						url='/goods/comment/comment2'
						data={
							id:this.selectId,
							content:this.comment,
						}
					}
				}
				
				this.$http({url,data,method:'POST'}).then(res=>{
					uni.showToast({
						title:res.msg
					})
					this.comment=''
					this.showEvaInput=false
					this.size=10*this.current
					this.current=1
					setTimeout(()=>{
						this.getCommentList('one')
                        this.toolList[1].num++
					},1500)
				})
			},
			// 赞同或者反对
			remark(a,item,val){
				let url=''
				let data={
					type:val=='agree'?1:2,
					isEvaluate:(item.hasAgree || item.hasOppose)?0:1,
				}
				
				if(this.productInfo.type===1){
					if(a==1){
						url='/goods/product/evaluate'
						data.productId=this.productId
					}else{
						url='/reply/message/evaluate'
						data.messageId=item.id
					}
				}else{
					if(a==1){
						url='/goods/product/evaluate'
						data.productId=this.productId
					}else{
						url='/goods/comment/evaluate'
						data.commentId=item.id
					}
				}
				this.$http({url,data,method:'POST'}).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					setTimeout(()=>{
						this.getDetail('one')
					},1500)
				})
			},
			// 邀请好友列表
			getMemList(){
				let data={
					size:10,
					current:this.currentFriend,
					productId:this.productId
				}
				this.$http({url:'/member/list/',data}).then(res=>{
					if(res.data.records.length>=10 ){
						this.isContinueFriend=true
					}else{
						this.isContinueFriend=false
					}
					this.visitorList=this.visitorList.concat(res.data.records)
				})
			},
            // 跳转开通vip
            toOpen(){
                uni.navigateTo({
                    url:'/pages/ExchangePage/Recharge/OpenVip?type=mounth'
                })
            },
            // 拨打电话
            callPhone(num){
                if(this.userInfo.isEffect){
                    uni.makePhoneCall({
                        phoneNumber:num
                    })
                }
                
            },
            // 选择排序
			confirm(e){
				this.sortType=e[0].label
				this.sort=e[0].value
				this.commentList=[]
				this.getCommentList('one')
			},
            // 查看更多评论
            showMoreComment(item){
                uni.navigateTo({
                    url:'/pages/CommentList/CommentList?data='+JSON.stringify(item)
                })
            },
            // 底部评论
            toolHandle(item,index){
                if(index==1){
                    this.showEvaInput=true
                    this.commentType='first'
                }else{
                    if(this.productType==1){
                        if(index==2){
                        	this.remark(1,{id:this.productId,hasAgree:this.productInfo.hasAgree || '', hasOppose:this.productInfo.hasOppose || ''},'opposition')
                        }else if(index==3){
                        	this.remark(1,{id:this.productId,hasAgree:this.productInfo.hasAgree || '', hasOppose:this.productInfo.hasOppose || ''},'agree')
                        }
                    }else{
                        if(index==2){
                        	this.remark(1,{id:this.productId,hasAgree:this.productInfo.hasAgree || '', hasOppose:this.productInfo.hasOppose || ''},'agree')
                        }
                    }
                }
            },
            // 更多
			selectMore(item){
				switch(item.value){
					case 1:  //收藏
						this.collect()
						break;
					case 2:  //删除
						this.del(item)
						break;
					case 3:  //分享
                        this.showMoreList=false
						break;
					case 4:  //邀请好友
                        if(!uni.getStorageSync('token')){
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
						this.invitationPop=true
						this.showMoreList=false
						break;
				}
			},
			// 收藏
			collect(){
				let data={
					productId:this.productId,
					isCollect:this.productInfo.isCollect==1?0:1
				}
				this.$http({url:'/goods/product/collect',data,method:'POST'}).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					this.showMoreList=false
					setTimeout(()=>{
						this.getDetail()
					},1500)
				})
			},
			// 删除帖子
			del(){
				uni.showModal({
					title: '提示',
					content: '确定删除此帖子吗？',
					success: res => {
						if(res.confirm){
							this.$http({url:'/goods/product/delete/'+this.productId}).then(res=>{
								uni.showToast({
									title:res.msg,
									icon:'none'
								})
								if(res.code==200){
									setTimeout(()=>{
										uni.navigateBack()
									},1500)
								}
							})
						}
					},
					fail: () => {
						
					},
				});
				
			},
			// 邀请好友
			invitationFriend(item,index){
				if(item.isInvite)return
				let url='/goods/message/add'
				let data={
					productId:this.productId,
					memberId:item.id,
					action:1,
				}
				this.$http({url,data,method:'post'}).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					if(res.code==200){
						setTimeout(()=>{
							this.visitorList[index].isInvite=1
						},1500)
					}
				})
			},
			// 有赏任务结算
			toSettle(item,index){
				if(item.isClose)return
				uni.showModal({
					title: '提示',
					content: '结算后赏金会转入此用户账户',
					success: res => {
						if(res.confirm){
							this.$http({url:"/reply/message/bestReply",data:{
								productId :this.productId,
								memberId:item.userId,
							},method:'POST'}).then(res=>{
								if(res.code==200){
									uni.showToast({
										title:'结算成功',
										icon:'none'
									})
									this.getDetail()
								}
								
							})
						}
					},
					fail: () => {
						
					},
				});
				
			},
			// 邀请好友加载更多
			scrolltolower(){
				if(this.isContinueFriend){
					this.currentFriend++
					this.getMemList()
				}
			},
			// 跳转个人中心
			toPerson(){
				uni.navigateTo({
					url:'/pages/MyCenter/PersonalHome?id='+this.productInfo.userId
				})
			}
		},
		// 上拉加载
		onReachBottom(){
			if(this.isContinue && uni.getStorageSync('token')){
				if(this.size!==10){
					this.current=this.size/10
					this.current++
				}else{
					this.current++
				}
				this.size=10
				this.getCommentList('continue')
			}
		},
		onShareAppMessage(res){
			let data={
				productId:this.productId,
				destination:1
			}
            if(uni.getStorageSync('token')){
                this.$http({url:'/goods/product/share',data,method:'POST'}).then(res=>{})
            }
			return{
				title:this.productInfo.title || '懂司圈司机经验技术路况交流',
				// imageUrl:this.productInfo.type!==3?this.imageList[0]: '',
				path:'/pages/InvitationDetail/InvitationDetail?productId='+this.productId,
				success:function(r){
					
				},
				fail(err){
					uni.showToast({
						title:'分享失败'
					})
					console.log(err)
				},
				complete(rr){
					
					console.log(rr)
				},
			}
		}
	}
</script>
<style lang="scss">
.page-wrap{
	padding-bottom: 200upx;
	.swiper-wrap{
		position: relative;
		// min-height: 60upx;
		background-color: #fff;
		.video{
			width: 100%;
		}
		.more{
			position: absolute;
			z-index: 9999;
			background-color: $default-color;
			padding:10upx 30upx;
			border-radius: 50upx;
			color: #fff;
			top:30upx;
			right: 64upx;
		}
	}
	.shunlujia{
		padding:0 30upx;
		.sm-img{
			width: 100%;
			height: 120upx;
		}
		.info{
			.type{
				width: 90%;
				background-color: #fff;
				border-top-left-radius: 12upx;
				border-top-right-radius: 12upx;
				text-align: center;
				color: #412815;
				font-size: 32upx;
				padding: 16upx 0;
				margin: auto;
			}
			.address{
				background: linear-gradient(359deg, #DFAD76 0%, #FFECD8 100%);
				border-radius: 20upx;
				padding: 30rpx;
				justify-content: center;
				color: #000;
				.ad{
					width: 40%;
					text-align: center;
				}
				.t1{
					font-size: 28upx;
				}
				.t2{
					font-size: 36upx;
				}
				.jh{
					width: 32upx;
					height: 32upx;
					margin: 0 30upx;
				}
			}
		}
		.phone{
			.p-num{
				font-size: 24upx;
				color: #000;
			}
			.p-sw{
				background-color: #F5F2FF;
				border-radius: 24upx;
				padding: 8upx 22upx;
				color: #0A2463;
				font-size: 24upx;
				image{
					width: 32upx;
					height: 32upx;
					margin-left: 10upx;
				}
			}
			.p-val{
				color: #000000;
				font-size: 40upx;
			}
			.vip{
				width: 260upx;
				height: 60upx;
			}
		}
		.time{
			.val{
				color: #000;
				font-size:40upx;
			}
		}
		.img-wrap{
			display: flex;
			flex-wrap: nowrap;
			white-space: nowrap;
			image{
				flex-shrink: 0;
				width: 200upx;
				height: 200upx;
				border-radius: 18upx;
				margin-right: 30upx;
			}
		}
		
	}
	.content-wrap{
		padding: 20upx 0;
        .img-wrap{
            image{
                width: 100%;
            }
        }
	}
	.content{
		background-color: #fff;
		padding: 40upx;
		.user-info{
			justify-content: space-between;
			.user{
				.user-img{
					width: 80upx;
					height: 80upx;
					border-radius: 50%;
					margin-right: 20upx;
				}
                .user-name{
                    width: 320upx;
                }
			}
			.zan{
				.z-left{
					margin-left: 10upx;
				}
			}
		}
		.txt{
			font-size: 30upx;
			color: #000;
			line-height: 50upx;
		}
		.jiesuan{
			.close{
				background-color: #F7D8B6;
				color: #8F5E29;
				font-size: 24upx;
				padding: 4upx 16upx ;
				border-radius: 12upx;
			}
			.ing{
				color: #8F5E29;
			}
		}
	}
	.evaluate{
		padding: 40upx;
		background-color: #fff;
		min-height: 54h;
		.top{
			justify-content: space-between;
			.all{
				color: $base-color;
				font-size: 28upx;
				position: relative;
				&::after{
					content: "";
					display: block;
					position: absolute;
					width: 100%;
					height: 4upx;
					background-color: $base-color;
					border-radius: 4upx;
					bottom: -20upx;
				}
			}
		}
        .eva-item{
            .eva-list{
                align-items: flex-start;
                .eva-img{
                    width: 80upx;
					height: 80upx;
					border-radius: 50%;
                    margin-right: 20upx;
                }
                .eva-info{
                    width: 520upx;
                    .eva-model{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .time{
                            font-size: 24upx;
                            color: #666;
                        }
                        .num-s{
                            margin-right: 20upx;
                            display: flex;
                            align-items: center;
							color: #676D82;
							font-size: 28upx;
                        }
                    }
                    .detail-list{
                        padding: 30upx;
                        background-color: rgba(0,0,0,0.1);
                        border-radius: 20upx;
                        .detail-item{
                            .t1{
                                font-size: 30upx;
                            }
                            
                        }
                    }
                }
            }
            .show-more{
                color: $default-color;
                font-size: 32upx;
            }
        }
		/deep/ .u-input{
			background-color: #fff;
			width: 150upx;
		}
	}
	
	.more-list{
		background-color: #fff;
		border-radius: 8upx;
		padding: 40upx 0;
		.list{
			flex-direction: column;
			padding: 40upx;
			.item{
				height:80upx;
				line-height: 80upx;
				border-radius: 50upx;
				margin-bottom: 20upx;
				width: 100%;
				background-color: $default-color;
				color: #fff;
				text-align: center;
				
			}
		}
	}
	.foot-tool{
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #fff;
		z-index: 999;
		.foot-list{
			justify-content: space-around;
			padding: 30upx 0;
			.foot-item{
				border: none;
				background-color: #f2f2f2;
				/deep/.u-btn{
					border: none;
					padding: 0 20upx;
				}
				/deep/ .u-size-default{
					height: auto;
				}
				/deep/ button::after{
					border:none
				}
				.tool-item{
					align-items: center;
					color: #676D82;
					font-size: 28upx;
					.tool-img{
						width: 50upx;
					}
				}
				.t1{
					// padding:6upx 18upx;
					// background-color: $default-color;
					border-radius: 12upx;
					// color: #fff;
					margin-right: 10upx;
				}
			}
			.custom-style{
				border: none;
			}
		}
	}
    .foot-tool-more{
        position: relative;
    }
    .eva-input{
        position: fixed;
        background-color: #f2f2f2;
        padding:40upx;
        bottom: 0;
        z-index: 999;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /deep/ input{
            background-color: #fff;
            width: 80%;
            height: 70rpx;
            border-radius: 8rpx;
            padding-left: 10upx;
        }
		.foc{
			margin-bottom: 36upx;
		}
    }
    .is-focus{
        /deep/ input,.send-eva{
            margin-bottom: 40upx;
        }
    }
	.friend-wrap{
		width:100%;
		height: 80vh;
		// background-image: url('http://120.24.56.30:9000/system/xq-bg1.png');
		// background-size: 100% 100%;
		padding: 30upx;
		border-top-left-radius: 12upx;
		border-top-right-radius: 12upx;
	}
	.friend-list{
		white-space: nowrap;
		background-color: #fff;
		border-radius: 12upx;
		.item{
			position: relative;
			padding: 30upx;
			border-bottom: 1px solid #f1f1f1;
			&:last-child{
				border: none;
			}
			.avatar {
				width: 80upx;
				height: 80upx;
				margin-right: 20upx;
			}
			.btn{
				width: 100upx;
				height: 40upx;
				line-height: 40upx;
				text-align: center;
				background-color: $base-color;
				color: #fff;
				font-size: 24upx;
				border-radius: 12upx;
				position: absolute;
				right: 30rpx;
				top: 50rpx;
			}
		}
	}
	.tips{
		width: 100%;
		padding: 20upx 0;
		text-align: center;
		color: #666;
		font-size: 28upx;
		align-items: center;
		margin-top: 120upx;
		image{
			width: 280upx;
			display: block;
		}
	}
}
</style>
