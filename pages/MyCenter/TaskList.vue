<template>
	<view class="page-wrap">
		<u-tabs ref="tabs"
		:is-scroll="false" 
		:current="active" 
		:list="typeList" 
		@change="handleType" 
		active-color="#5FB800">
		</u-tabs>
		<view class="list-wrap mt30" v-if="dataList.length>0">
			<view class="con model-wrap">
				<view class="data-list  " v-for="(item,index) in dataList" :key="index" @click="toDetail(item)">
					<view class="detail  ">
						<view class="mt30 threeHidden c">
							{{item.content || item.productContent}}
						</view>
						<template v-if="item.type==1 || item.type==2">
							<scroll-view scroll-x="true" class="img-wrap mt20" v-if="item.photos">
								<image 
								class="img" 
								v-for="(item,index) in item.photos.split(',')" 
								:key="index"
								:src="item" >
								</image>
							</scroll-view>
						</template>
						
						<view class="user-handle xflex-list mt20">
							<view class="handle-type">
								<text class="h-t-t1">赞同</text>
								<text class="h-t-t2">{{ !active? item.agreeCount : item.productAgreeCount}}</text>
							</view>
							<view class="handle-type">
								<text class="h-t-t1">反对</text>
								<text class="h-t-t2">{{!active? item.opposeCount : 0}}</text>
							</view>
							<view class="handle-type">
								<text class="h-t-t1">回答</text>
								<text class="h-t-t2">{{!active? item.replyCount : item.productReplyCount}}</text>
							</view>
							<view class="set">
								{{  (item.isClose || item.productIsClose)? '已结算':'待结算'}}
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		
        <view v-else>
            <no-data></no-data>
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
					{name:'已发任务'},
					{name:'已接任务'}
				],
				active:0
			}
		},
		onLoad() {
			this.url='/goods/product/releaseTask'
			uni.setNavigationBarTitle({
			　　title:'已发任务'
			})
		},
		methods:{
			handleType(e){
				this.active=e
				uni.setNavigationBarTitle({
				　　title:e===0?'已发任务':'已接任务'
				})
				this.dataList=[]
				if(this.active){
					this.url='/goods/reply/myTask'
				}else{
					this.url='/goods/product/releaseTask'
				}
				this.getData()
			},
			toDetail(item){
				uni.navigateTo({
					url:'/pages/InvitationDetail/InvitationDetail?productId='+(item.productId || item.id)
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.list-wrap{
		padding:0 30upx;
	}
	.data-list{
		padding-bottom: 30upx;
		border-bottom: 2upx solid #f1f1f1;
		&:last-child{
			border: none;
		}
		.detail{
			.c{
				color: #0D1722;
				font-size: 32upx;
			}
		}
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
			font-size: 28upx;
			font-weight: 400;
			color: #676D82;
			border-radius: 16upx;
			margin-right: 20upx;
		}
		.video{
			width: 100%;
			margin-bottom: 30upx ;
		}
		.user-handle{
			position:relative;
			.handle-type{
				margin-right: 20upx;
				color: #676D82;
				font-size: 28upx;
			}
			.set{
				position: absolute;
				right: 0;
			}
			
		}
	}
</style>
