<template>
	<view class="page-wrap">
		<page-header
		title="圈子详情"
		:white='white'
		></page-header>
		<view class="circle-info model-wrap">
			<view class="row jc-sb">
				<view class="circle-detail">
					<view class="c-name f32-c333 row">
						<text class="txt">{{circleInfo.name}} </text>
						<text class="is-money">{{circleInfo.type==1?'公开':circleInfo.type==2?'邀请制':'付费制'}}</text> 
						<text v-if="userId==circleInfo.createId"  class="edit bg-default1" @click="toEdit">编辑</text>
					</view>
					<view class="c-desc f24-c666 twoHidden mt20">
						{{circleInfo.description}}
					</view>
					
					<view  class="mt20 ffbz" v-if="circleInfo.type==3">
						付费标准￥{{circleInfo.amount}}元
					</view>
				</view>
				<view class="user column">
					<image class="img" :src="circleInfo.photo " ></image>
					<view class="add bg-default1 mt10" @click="joinCircle" :class="circleInfo.isMember===1 && 'is-add'">
						{{circleInfo.isMember===1?'已加入':'加入'}}
					</view>
				</view>
			</view>
			<view class="tool-list row mt30 jc-sb">
				<view :class="['item','bg'+(index+1)]" v-for="(item,index) in toolList" :key="index">
					<image class="tool-img" :src="item.img" mode="widthFix"></image>
					<view class="row mt10">
						<text class="num f32-c333 fwb">{{ item.count}}</text>
						<text class="tit f28-c666">{{item.label}}</text>
					</view>
					
				</view>
			</view>
		</view>
		<view class=" model-wrap mt30">
			<view class="type-list   row">
				<view class="type-item" 
				@click="selectType(item,index)"
				:class="active==index && 'type-select'" 
				v-for="(item,index) in typeList" :key="index">
					{{item.label}}
				</view>
			</view>
			<invitation-list v-if="item.length>0" :item="item"></invitation-list>
			<view class="tips column mt20" v-else>
				<image src="http://120.24.56.30:9000/system/no-data.png" mode="widthFix"></image>
				<text class="f28-c666 mt20">暂无更多数据</text>
			</view>
		</view>
		
		<release
		pageFrom='Detail'
		:isMmember="circleInfo.isMember"
		:circleId="circleId">
        </release>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				toolList:[
					{label:'今日发帖',value:'',img:'http://120.24.56.30:9000/system/fatie.png'},
					{label:'帖子总数',value:'',img:'http://120.24.56.30:9000/system/tiezizs.png'},
					{label:'成员数',value:'',img:'http://120.24.56.30:9000/system/fatie.png'},
				],
				active:0,
				typeList:[
					{label:'推荐',value:1},
					{label:'优质',value:2},
					{label:'悬赏',value:3},
				],
				circleInfo:{},
				item:[],
				circleId:'',
				size:10,
				current:1,
				isContinue:true,
				showNoData:true,
				userId:'',
				white:false,
			};
		},
		onLoad(e) {
			this.circleId=e.id || '1442091145730162689'
			this.userId=uni.getStorageSync('user_id')
		},
		onShow() {
			this.item=[]
			this.$store.dispatch('amountDetail')
			this.getDetail()
		},
		computed:{
			...mapState(['amountDetail'])
		},
		onPageScroll(e) {
			if(e.scrollTop>=100){
				this.white=true
			}else{
				this.white=false
			}
		},
		methods:{
			getDetail(){
				uni.showLoading({
					title:'加载中'
				})
				this.$http({url:'/goods/circle/detail/'+this.circleId}).then(res=>{
					this.circleInfo=res.data
					this.toolList[0].count=res.data.todayCount
					this.toolList[1].count=res.data.totalCount
					this.toolList[2].count=res.data.memberCount
                    this.item=[]
					this.getList()
				})
			},
			getList(){
				let data={
					size:this.size,
					current:this.current,
					id:this.circleId,
					flag:this.active+1
				}
				this.$http({url:'/goods/circle/product',data}).then(res=>{
					uni.hideLoading()
					if(res.data.records.length>=1){
						this.showNoData=false
					}else{
						this.showNoData=true
					}
					this.item=this.item.concat(res.data.records) 
					if(res.data.records.length>=10 ){
						this.isContinue=true
					}else{
						this.isContinue=false
					}
				})
			},
			joinCircle(){
				if(this.userId==this.circleInfo.createId){
					return
				}
				let data={
					isMember:0,  //1为加入  0为退出
					circleId:this.circleId,
				}
				if(this.circleInfo.isMember===1){
					uni.showModal({
						title: '提示',
						content: '确定退出当前圈子吗？',
						success: res => {
							if(res.confirm){
								data.isMember=0
								this.joinCircle_(data)
							}
						},
						fail: () => {
							
						},
					});
				}else{
					data.isMember=1
					if(this.circleInfo.type==3 && this.amountDetail.balanceCount< this.circleInfo.amount){
						uni.showModal({
							title: '提示',
							content: '当前余额不足，请充值',
							success: res => {
								if(res.confirm){
									uni.navigateTo({
										url:'/pages/ExchangePage/Recharge/Recharge'
									})
								}
							},
							fail: () => {},
						})
						return
					}
					this.joinCircle_(data)
				}		
			},
			joinCircle_(data){
				this.$http({url:'/goods/circle/join',data,method:'POST'}).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					if(data.isMember){
						this.getDetail()
					}else{
						setTimeout(()=>{
							uni.navigateBack()
						},1500)
					}
				})
			},
			selectType(item,index){
				this.active=index
				this.item=[]
				this.getList()
			},
			toEdit(){
				uni.navigateTo({
					url:'/pages/EditDetail/EditDetail?type='+'edit&id='+this.circleId
				})
			}
		},
		// 上拉加载
		onReachBottom(){
			if(this.isContinue){
				this.current++
				this.getList()
			}
		},
	}
</script>
<style lang="scss" scoped>
.page-wrap{
	background-image: url('http://120.24.56.30:9000/system/bg1.png');
	background-repeat: no-repeat;
	background-size: 100% 500upx;
	padding: 30upx;
	.info{
		width: 100%;
		height: 300upx;
		position: relative;
		.edit{
			position: absolute;
			top: 70upx;
			right: 40upx;
			padding: 10upx 30upx;
			border-radius: 42upx;
			background-color: #fff;
			color: #333;
		}
	}
	.circle-info{
		margin-top: 60upx;
		padding: 40upx;
		position: relative;
		.img{
			width: 120upx;
			height: 120upx;
			border-radius: 50%;
			box-shadow: 0 0 10upx 2upx #ddd;
		}
		.add{
			text-align: center;
		}
		.is-add{
			background-color: #ddd;
			color: #fff;
		}
		.circle-detail{
			.is-money{
				font-size: 28upx;
				margin:0 20upx;
				padding: 5upx 10upx;
				background-color: #F7D8B6;
				font-size: #8F5E29;
				border-radius: 10upx;
			}
			.edit{
				font-size: 28upx;
				border-radius: 10upx;
			}
			.edit-img{
				width: 100upx;
			}
			.ffbz{
				padding: 5upx 10upx;
				background-color: #F7D8B6;
				font-size: #8F5E29;
				width: 248upx;
				text-align: center;
				border-radius: 12upx;
			}
		}
		.xflex-list{
			justify-content: space-around;
		}
		
		.tool-list{
			.item{
				border-radius: 16upx;
				padding: 20upx 0upx;
				width: 187upx;
				display: flex;
				flex-direction: column;
				align-items: center;
				.tool-img{
					width: 36upx;
					margin: auto;
					display: block;
				}
				.num{
					margin-right: 8upx;
				}
			}
			.bg1{
				background: rgba(0, 145, 255, 0.2);
			}
			.bg2{
				background: rgba(109, 212, 0, 0.2);
			}
			.bg3{
				background: rgba(247, 181, 0, 0.2);
			}
		}
	}
	/deep/ .list-wrap{
		background-color: #fff;
		.info{
			border-bottom: 2upx solid #f1f1f1;
			border-radius: 0;
            padding: 30upx 0;
			&:last-child{
				border: none;
			}
		}
	}
	.type-list{
		display: flex;
		align-items: center;
		padding-bottom: 20upx;
		border-bottom: 2upx solid #f1f1f1;
		.type-item{
			margin-right: 40upx;
			font-size: 28upx;
			color:#8E9394;
		}
		/deep/ .list-wrap{
			.info{
				padding: 30upx 0;
			}
		}
		.type-select{
			color: $base-color;
			position: relative;
			&::after{
				content: '';
				display: block;
				position: absolute;
				bottom: -20upx;
				width: 100%;
				height: 4upx;
				background-color: $base-color;
				border-radius: 6upx;
			}
		}
	}
	.tips{
		width: 100%;
		padding-bottom:50upx;
		text-align: center;
		color: #666;
		font-size: 28upx;
		align-items: center;
		margin-top: 100upx;
		image{
			width: 280upx;
			display: block;
		}
	}
}
</style>



