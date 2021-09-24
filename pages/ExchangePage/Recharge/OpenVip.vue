<template>
    <view class="page-wrap">
        <view class="model-wrap info ">
            <view class="model m1">
                当前{{pageType=='mounth'?'月卡':'年卡'}}剩余天数
            </view>
            
            <view class="model m3">
                100天
            </view>
            <navigator hover-class="none" url="./BuyList" class="mt20">
                购买记录
            </navigator>
        </view>
        <view class="xflex-list list">
            <view class="xflex-list-item item" 
            @click="selectType(item,index)"
            :class="(pageType==item.type) && 'select-type'"
            v-for="(item,index) in typeList" :key="index">
                <text class="open-item">{{item.label}}</text>
                <text class="open-item">{{item.value}}元</text>
            </view>
           
        </view>
        <view class="tip">
            <text>1.购买月卡/年卡后可免费加入付费圈子</text>
            <text>2.购买月卡后赠送100ml汽油，购买年卡赠送1000ml汽油，汽油可在兑换中心兑换月卡、年卡、实物商品以及京东购物卡等</text>
            <text>3.月卡/年卡充值成功后无法退款，不能提现</text>
        </view>
        <view class="pay-list mt40">
            <view class="xflex-list mt20">
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
    export default{
        data(){
            return{
                pageType:'mounth',
                selectPay:0,
                typeList:[
                    {label:'月卡',value:'9.9',type:'mounth'},
                    {label:'年卡',value:'99',type:'year'},
                ],
                payList:[
                    {label:'微信',icon:'icon-weixin;',value:'1'},
                    {label:'支付宝',icon:'icon-zhifubao',value:'2'},
                    {label:'银联',icon:'icon-yinlian',value:'3'},
                ]
            }
        },
        onLoad(e){
            this.pageType=e.type
            uni.setNavigationBarTitle({
            　　title:e.type=='mounth'?'开通月卡':'开通年卡'
            })
        },
       
        methods:{
            handlePay(item,index){
                this.selectPay=index
            },
            selectType(item,index){
                this.pageType=item.type
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
    .list{
        justify-content: space-between;
        margin: 40upx 0;
        .item{
            width: 45%;
            height: 200upx;
            flex-direction: column;
            .open-item{
                color: #333;
                font-size: 40upx;
            }
        }
        .select-type{
            background-color: $default-color;
            .open-item{
                color: #fff;
            }
        }
    }
    .tip{
       display: flex;
       flex-direction: column;
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
