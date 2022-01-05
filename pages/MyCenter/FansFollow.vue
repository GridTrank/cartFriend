<template>
    <view class="page-wrap">
        <view class="list model-wrap" v-if="dataList.length>0">
        	<view class="item" v-for="(item,index) in dataList" :key="index">
        		<image @click="toCenter(item)" class="img avatar" :src="item.memberPhoto"></image>
				<view class="name column">
					<text class="f28-c333 mt10">{{item.memberNickName}}</text>
					<text class="f24-c666 mt10">{{pageType=='follow'?'已关注':'关注了你'}}</text>
				</view>
				<view class="is-fol" @click="attention(item)"> 
					<text v-if="pageType=='follow'">取消关注</text>
					<text v-else>{{item.isAttention==1 && item.beAttention==1 ?'互关':item.isAttention==1 && item.beAttention!==1?'已关注':'关注'}}</text>
				</view>
        	</view>
        </view>
        <view  v-else>
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
				pageType:'',
			}
		},
		onLoad(e) {
			this.pageType=e.pageType
			uni.setNavigationBarTitle({
			　　title:e.pageType=='fan'?'粉丝':'关注'
			})
			
			if(this.pageType=='fan'){
				this.url='/member/myFans'
			}else{
				this.url='/member/myAttention'
			}
            this.getData()
		},
		
		methods:{
			
			// 关注
			attention(item){
				if(this.pageType=='follow' || item.isAttention==1){
					uni.showModal({
						title: '提示',
						content: '确认取消关注该用户吗？',
						success: res => {
							if(res.confirm){
								this.cancelAttention(item,0)
							}
						},
						fail: () => {},
					})
				}else{
					if(this.pageType=='fan' && item.isAttention===0){
						this.cancelAttention(item,1)
					}
				}
			},
			// 关注
			cancelAttention(item,val){
				let data={
					memberId:item.memberId || item.userId,
					isAttention:val
				}
				this.$http({url:'/member/attention',data,method:'POST'}).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					setTimeout(()=>{
						if(res.code==200 ){
							if(this.pageType=='follow' ){
								this.dataList=[]
								this.getData()
							}else{
								item.isAttention=item.isAttention==0?1:0
							}
							
						}
					},1500)
				})
			},
			toCenter(item){
				uni.navigateTo({
					url:'/pages/MyCenter/PersonalHome?id='+(item.userId || item.memberId)
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.page-wrap{
		min-height: 100vh;
		padding: 20upx;
		.list{
			padding: 20upx;
			.item{
				display: flex;
				align-items: center;
				padding: 20upx;
				position: relative;
				border-bottom: 2upx solid #f2f2f2;
				&:last-child{
					border-bottom: none;
				}
				.img{
					
					margin-right: 20upx;
				}
				.is-fol{
					position: absolute;
					right: 20upx;
					padding: 6upx 28upx;
					border-radius: 24upx;
					border: 1px solid #5FB800;
					color: #5FB800;
				}
			}
		}
	}
	.tips{
		width: 100%;
		padding: 20upx 0;
		text-align: center;
		color: #666;
		font-size: 28upx;
	}
</style>
