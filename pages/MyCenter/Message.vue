<template>
    <view class="page-wrap">
        <u-tabs ref="tabs" 
        :is-scroll="false" 
        :current="active" 
        :list="typeList" 
        @change="handleType" 
		active-color="#5FB800">
		</u-tabs>
		
		<view class="content mt30 pd40-region">
			<view class="read-num xflex-list">
				<text class="n1">共{{total}}条</text>
				<text class="n2" @click="allRead">全部已读</text>
			</view>
			<view class="list mt20 model-wrap">
				<view class=" item " v-for="(item,index) in dataList" :key="index">
					<view class="item-info" @click="handle(1,item)" v-if="active===0">
						
						<view class="twoHidden" v-if="item.action==2">
							用户<text class="fc-def">{{item.memberNickName}}</text>在 <text >{{item.circleName}}</text>中回复了你
						</view>
						<view class="twoHidden" v-else="item.action==1">
							用户<text class="fc-def">{{item.memberNickName}}</text>邀请你一起加入圈子{{item.circleName}}
						</view>
						
						<view class="time f28-c666 mt20">{{item.createTime}}</view>
						<view class="close" @click.stop="delMessage(1,item,index)">
							<image class="del-img" src="http://120.24.56.30:9000/system/xx-sc.png" ></image>
						</view>
					</view>
					<view class="item-info xflex-list" v-else @click="handle(2,item)">
						<image :src=" item.memberPhoto"  class="avatar"></image>
						<view class="info">
							<view>{{item.memberNickName}}</view>
							<view class="oneHidden mt20">{{item.content}}</view>
							<view class="time f28-c666 mt20">
								{{item.createTime}}
							</view>
						</view>
						
						<view class="close" @click.stop="delMessage(2,item,index)">
							<image class="del-img" src="http://120.24.56.30:9000/system/xx-sc.png" ></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="tips" :class="showNoData && 'mt30'">
			{{isContinue?'上拉加载更多~':'暂无更多数据~'}}
		</view>
		
			
    </view>
</template>

<script>
	import {getData} from '@/common/mixin/getData.js'
	export default{
		mixins:[getData],
		data(){
			return{
				typeList:[
					{name:'消息'},
					{name:'留言'}
				],
				active:0,
				
			}
		},
		onLoad(){
			if(this.active){
				this.url='/member/letterList'
			}else{
				this.url='/goods/message/myMessage'
			}
		},
		onShow() {
			this.list=[]
		},
		methods:{
			handleType(e){
				this.active=e
				uni.setNavigationBarTitle({
				　　title:e===0?'消息':'留言'
				})
				this.dataList=[]
				if(this.active){
					this.url='/member/letterList'
				}else{
					this.url='/goods/message/myMessage'
				}
				this.getData()
			},
		
			handle(val,item){
				if(val==1){
					uni.navigateTo({
						url:'/pages/InvitationDetail/InvitationDetail?productId='+ item.id
					})
				}else{
					let info={
						userId:item.userId,
						photo:item.memberPhoto,
						nickName:item.memberNickName
					}
					uni.navigateTo({
						url:'../Chat/Chat?user='+JSON.stringify(info)
					})
					this.isRead(item)
				}
			},
			delMessage(val,item,index){
				uni.showModal({
					title: '提示',
					content: '确定删除此数据吗？',
					success: res => {
						if(res.confirm){
							let url=val==2?'/member/letter/delete/'+item.id:'/goods/message/delete/'+item.id
							this.$http({url}).then(res=>{
								this.dataList.splice(index,1)
								this.$forceUpdate()
							})
						}
					},
					
				});
			},
			allRead(){
				let url=this.active?'/goods/message/allRead':'/member/letter/allRead'
				this.$http({url}).then(res=>{
					console.log(res)
				})
			},
			isRead(item){
				let url=this.active?'/goods/message/read/':'/member/letter/read/'
				this.$http({url:url+item.id}).then(res=>{
					console.log(res)
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	.page-wrap{
		min-height: 100vh;
		.content{
			.read-num {
				justify-content: space-between;
			}
			.item{
				border-bottom: 2upx solid #f1f1f1;
				padding-bottom: 20upx;
				margin-bottom: 20upx;
				&:last-child{
					border: none;
					margin-bottom: 0;
					padding-bottom: 0;
				}
			}
			.item-info{
				position: relative;
				.close{
					position: absolute;
					top:34upx;
					right:0;
					.del-img{
						width: 36upx;
						height: 38upx;
					}
				}
				.fc-def{
					color: #5FB800;
				}
			}
			.item-info.xflex-list{
				align-items: center;
				flex-wrap: nowrap;
				.avatar{
					width: 80upx;
					border-radius: 50%;
					margin-right: 20upx;
					flex-shrink: 0;
				}
				.info{
					width: 70%;
				}
			}
		}
	}
</style>
