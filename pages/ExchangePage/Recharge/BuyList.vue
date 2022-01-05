<template>
    <view class="page-wrap">
        <view class="xflex-list model-wrap ">
            <view class="xflex-list-item" v-for="(item,index) in dataList" :key="index">
                <view class="name f32-c333 fwb">用户名：{{userInfo.nickName}}</view>
                <view class="time f28-c666 mt20">充值时间：{{item.paymentTime}}</view>
                <view class="money">
                    ¥{{item.actualAmount}}
                </view>
				<view class="status" :class="item.orderStatus==3?'success':item.orderStatus==2?'wait':'fail'">
				    {{item.orderStatus==3?'支付成功':item.orderStatus==2?'待支付':'支付失败'}}
				</view>
            </view>
        </view>
		<view class="tips mt30" :class="showNoData && 'no-da'" >
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
				userInfo:{},
				pageType:''
            }
        },
		onLoad(e) {
			this.userInfo=uni.getStorageSync('userInfo')
			this.pageType=e.pageType
			
			this.url=this.pageType=='charge'?'/order/chargeRecord':'/order/cardRecord'
            this.getData()
		},
		methods:{
		
		},
		
		
    }
</script>

<style lang="scss" scoped>
.page-wrap{
    padding: 30upx;
    .xflex-list{
        flex-direction: column;
        width: 100%;
        .xflex-list-item{
            width: 100%;
            background-color: #fff;
            border-bottom: 2upx solid #ddd;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 30upx;
            border-radius: 0;
            position: relative;
			&:last-child{
				border: none;
			}
            .money{
                font-size: 30upx;
                color: #333;
                font-weight: bold;
                position: absolute;
                right: 30upx;
            }
			.status{
				right: 30upx;
				position: absolute;
				bottom: 30upx;
			}
			.success{
				color: $base-color;
			}
			.fail{
				color: #fa3534;
			}
			.wait{
				color: #ff9900;
			}
        }
    }
}
</style>
