<template>
    <view class="page-wrap  ">
        <view class="eva-item xflex-list">
			<view class="eva-list xflex-list-item-row">
				<image class="eva-img" :src="detail.memberPhoto" ></image>
				<view class="eva-info">
				    <view class="eva-model">
				        <view class="name f32-c333 fwb">{{detail.memberNickName}} </view>
				        <!-- <view class="best bgStyle1">最佳答案</view> -->
				    </view>
				    <view class="eva-content mt20 f28-c666">{{detail.content}} </view>
				    <view class="eva-model mt30">
				        <view class="time">
				            {{detail.createTime}}
				        </view>
				        <view class="num-wrap xflex-list">
				            <view class="num-s">
				                <text class="num-t1" @click="remark(detail,'agree')">赞同</text>
				                <text class="num-t2">{{detail.agreeCount}}</text>
				            </view>
				            <view class="num-s">
				                <text class="num-t1"  @click="remark(detail,'opposition')">反对</text>
				                <text class="num-t2">{{detail.opposeCount}}</text>
				            </view>
				            <view class="num-s">
				                <text class="num-t1" @click="showEvaInput=true">评论</text>
				                <text class="num-t2">{{detail.commentCount}}</text>
				            </view>
				        </view>
				    </view>
				</view>
			</view>
            <view class="eva-list xflex-list-item-row" :class="index===0 && 'mt30'" v-for="(item,index) in commentList" :key="index">
                <image class="eva-img" :src="item.memberPhoto"></image>
                <view class="eva-info">
                    <view class="eva-model">
                        <view class="name f32-c333 fwb">{{item.memberNickName}} </view>
                    </view>
                    <view class="eva-content mt20 f28-c666">{{item.content}} </view>
                    <view class="eva-model mt30">
                        <view class="time">
                            {{item.createTime}}
                        </view>
                        <view class="num-wrap xflex-list">
                            <view class="num-s">
                                <text class="num-t1"  @click="remark(item,'agree')">赞同</text>
                                <text class="num-t2">{{item.agreeCount}}</text>
                            </view>
                            <view class="num-s">
                                <text class="num-t1"  @click="remark(item,'opposition')">反对</text>
                                <text class="num-t2">{{item.opposeCount}}</text>
                            </view>
                            <view class="num-s">
                                <text class="num-t1" @click="showEvaInput=true">评论</text>
                                <text class="num-t2">{{item.commentCount}}</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
		<view class="tips mt30" :class="showNoData && 'no-da'" >
			{{isContinue?'上拉加载更多~':'暂无更多数据~'}}
		</view>
		
		<!-- 评论输入框 -->
		<view class="fixed-wrap-bg" v-if="showEvaInput" @click.stop ="showEvaInput=false">
		    <view class="eva-input" :class="focus && 'is-focus'" @click.stop="showEvaInput=true">
		        <input type="text" :focus="focus" @blur="focus=false" @focus="focus=true" v-model="comment" />
		        <view class="send-eva" @click="sendComment"> 发送 </view>
		    </view> 
		</view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
				detail:{},
				showNoData:true,
				showEvaInput:false,
				focus:false,
				isContinue:true,
				commentId:'',
				size:10,
				current:1,
				commentList:[],
				comment:'',
				selectId:'',
				commentType:''
            };
        },
		watch:{
		    "showEvaInput":function(val){
		        this.focus=val
		    },
		    "focus":function(val){
		        
		    }
		},
		onLoad(e) {
			let data=JSON.parse(e.data)
			this.commentId=data.id
			this.detail=data
			this.getList()
		},
		methods:{
			// 发送以及评论
			sendComment(){
				let url='',data={}
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
				this.$http({url,data,method:'POST'}).then(res=>{
					uni.showToast({
						title:res.msg
					})
					this.comment=''
					this.showEvaInput=false
					this.size=10*this.current
					this.current=1
					setTimeout(()=>{
						this.getList('one')
					},1500)
				})
			},
			// 获取评论列表
			getList(type){
				uni.showLoading({
					title:'加载中'
				})
				let data={
					id:this.detail.id,
					size:this.size,
					current: this.current
				}
				this.$http({url:'/goods/comment/secondLevel/',data}).then(res=>{
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
			// 赞同或者反对
			remark(item,val){
				let data={
					type:val=='agree'?1:2,
					isEvaluate:1,
					commentId:item.id
				}
				this.$http({url:'/goods/comment/evaluate',data,method:'POST'}).then(res=>{
					uni.showToast({
						title:res.msg
					})
					setTimeout(()=>{
						this.getList('one')
					},1500)
				})
			},
			// 选中评论
			selectComment(item){
				this.showEvaInput=true
				this.selectId=item.id
				this.commentType='second'
			},
		},
		// 上拉加载
		onReachBottom(){
			if(this.isContinue){
				this.current=this.size/10
				this.size=10
				this.current++
				this.getList('continue')
			}
		},
    }
</script>
<style lang="scss">
    .eva-item {
        .eva-list {
            align-items: flex-start;
            padding: 40upx;
            border-radius: 0;
            .eva-img {
                width: 80upx;
				height:80upx ;
				border-radius: 50%;
                margin-right: 20upx;
            }
            .eva-info {
                width: 550upx;
                .eva-model {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .time {
                        font-size: 24upx;
                        color: #666;
                    }
                    .num-s {
                        margin-right: 10upx;
                        display: flex;
                        align-items: center;
                        .num-t1 {
                            background-color: $default-color;
                            padding: 4upx 8upx;
                            border-radius: 8upx;
                            margin-right: 8upx;
                            color: #fff;
                            font-size: 28upx;
                        }
                        .num-t2 {
                            font-size: 28upx;
                        }
                    }
                }
                .detail-list {
                    padding: 30upx;
                    background-color: rgba(0, 0, 0, 0.1);
                    border-radius: 42upx;
                    .detail-item {
                        .t1 {
                            font-size: 30upx;
                        }
                    }
                }
            }
        }
        .show-more {
            color: $default-color;
            font-size: 32upx;
        }
    }
    /deep/ .u-input {
        background-color: #fff;
        width: 150upx;
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
		    .send-eva{
		        background-color: $default-color;
		        color: #fff;
		        padding: 6upx 20upx;
		        border-radius: 10upx;
		    }
		}
</style>
