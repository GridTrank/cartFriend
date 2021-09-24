<template>
	<view class="page-wrap">
        <view class="model-wrap info ">
            <navigator url="./Cash" class="model m1">
                提现
            </navigator>
            <view class="model m2 mt30">
                余额
            </view>
            <view class="model m3 mt20">
                ¥100
            </view>
            <navigator hover-class="none" url="./BuyList" class="mt20">购买记录</navigator>
        </view>
        <view class="xflex-list mt40 list">
            <view 
             class="item"
             :class="selectItem==index && 'select-item'"
             @click="handleItem(item,index)"
             v-for="(item,index) in list" 
             :key="index">
                {{item.label}}
            </view>
        </view>
        <view class="">账户余额无法用于购买连续包月会员以及相应的自动续费服务</view>
        <view class="pay-list mt40">
            <view class="xflex-list ">
                <view class="xflex-list-item-row" @click="handlePay(item,index)" v-for="(item,index) in payList" :key="index">
                    <text class="iconfont" :class="item.icon"></text>
                    <view class="label">{{item.label}}</view>
                    <view class="is-select" :class="selectPay==index && 'select-pay' "></view>
                </view>
            </view>
        </view>
        <view class="to-pay mt40">
            去支付
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                selectItem:0,
                selectPay:0,
				list:[
                    {label:'30元',value:1},
                    {label:'50元',value:2},
                    {label:'100元',value:3},
                    {label:'200元',value:4},
                    {label:'300元',value:5},
                    {label:'500元',value:6},
                ],
                payList:[
                    {label:'微信',icon:'icon-weixin;',value:'1'},
                    {label:'支付宝',icon:'icon-zhifubao',value:'2'},
                    {label:'银联',icon:'icon-yinlian',value:'3'},
                ]
			};
		},
        methods:{
            handleItem(item,index){
                this.selectItem=index
            },
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
            color: #fff;
            font-weight: bold;
        }
        .m1{
            background-color: #fff;
            padding: 14upx 36upx;
            border-radius: 24upx;
            font-size: 30upx;
            font-weight: 400;
            color: #333;
            float: right;
        }
        .m2{
            font-size: 50upx;
        }
        .m3{
            font-size: 60upx;
        }
    }
    .list{
       .item{
           background-color: $default-color;
           color: #fff;
           width: 198upx;
           height: 198upx;
           line-height: 198upx;
           text-align: center;
           border-radius: 24upx;
           margin-right: 40upx;
           font-size: 44upx;
           font-weight: bold;
           margin-bottom: 30upx;
           &:nth-child(3n){
               margin-right: 0;
           }
       } 
       .select-item{
           transform: scale(1.1);
           font-size: 50upx;
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
