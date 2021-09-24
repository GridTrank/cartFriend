<template>
	<view class="page-wrap">
        <view class="model-wrap info ">
            <view class="model m1">
                可提现金额
            </view>
            <view class="model m2 mt30">
                ¥<u-input v-model="cashMoney" placeholder-style="color:#666;font-size:14px" placeholder="请输入提现金额"></u-input>
            </view>
            <view class="model m3">
                当前余额200元 <text class="all">全部提现</text>
            </view>
        </view>
        <view class="pay-list mt40">
            <text class="f32-c333">提现到</text>
            <view class="xflex-list mt20">
                <view class="xflex-list-item-row" @click="handlePay(item,index)" v-for="(item,index) in payList" :key="index">
                    <text class="iconfont" :class="item.icon"></text>
                    <view class="label">{{item.label}}</view>
                    <view class="is-select" :class="selectPay==index && 'select-pay' "></view>
                </view>
            </view>
        </view>
        <view class="to-pay mt40">
            提现
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                cashMoney:'',
                selectPay:0,
                payList:[
                    {label:'微信',icon:'icon-weixin;',value:'1'},
                    {label:'支付宝',icon:'icon-zhifubao',value:'2'},
                    {label:'银联',icon:'icon-yinlian',value:'3'},
                ]
			};
		},
        methods:{
            handlePay(item,index){
                this.selectPay=index
            }
        }
	}
</script>

<style lang="scss" scoped>
.page-wrap{
    padding: 40upx;
    .info{
        background-color:$default-color;
        .model{
            color: #333;
        }
        .m1{
            font-size: 40upx;
            font-weight: 600;
            color: #333;
        }
        .m2{
            font-size: 50upx;
            display: flex;
            /deep/ .u-input__input{
                color: #333;
                font-size: 40upx;
                margin-left: 20upx;
                border-bottom: 2upx solid #666;
            }
        }
        .m3{
            font-size: 36upx;
            color: #fff;
            margin-top: 40upx;
            .all{
                display: inline-block;
                width: 200upx;
                height: 60upx;
                background-color: #fff;
                text-align: center;
                line-height: 60upx;
                border-radius: 24upx;
                color: #402424;
                font-size: 30upx;
                font-weight: bold;
                margin-left: 30upx;
            }
        }
    }
    .pay-list{
        .xflex-list{
            flex-direction: column;
            .xflex-list-item-row{
                margin-bottom: 30upx;
                width: 100%;
                justify-content: flex-start;
                padding:20upx;
                position: relative;
                .label{
                    font-size: 32upx;
                    margin-left: 40upx;
                }
                .is-select{
                    width: 40upx;
                    height: 40upx;
                    border-radius: 50%;
                    border: 8upx solid #333;
                    position: absolute;
                    right: 40upx;
                }
                .select-pay{
                    border-color: $default-color;
                    background-color: $default-color;
                }
            }
        }
        .iconfont{
            font-size: 80upx;
        }
    }
    .to-pay{
        width: 100%;
        border-radius: 50upx;
        background-color: $default-color;
        color: #fff;
        font-size: 48upx;
        font-weight: bold;
        text-align: center;
        height: 100upx;
        line-height: 100upx;
    }
}
</style>
