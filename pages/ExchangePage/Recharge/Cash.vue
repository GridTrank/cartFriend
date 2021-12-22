<template>
	<view class="page-wrap">
		
		<view class="model-wrap mt20">
			<view class="tx-item column">
				<image src="http://120.24.56.30:9000/system/tx-wx.png" mode="widthFix"></image>
				<text class="mt10">提现到微信</text>
			</view>
		</view>
		
		
        <view class="model-wrap mt30 info ">
            <view class="model m1 row jc-sb">
				<text class="titlt">可提现金额</text>
				<view class="all-wrap row">
					<text class="all left" @click="cashMoney=(amountDetail.balanceCount)">全部余额</text>
					<text class="all" @click="cashMoney=(amountDetail.bountyCount)">全部赏金</text>
				</view>
				
            </view>
			
            <view class="model m2 mt30">
                ¥<u-input v-model="cashMoney" placeholder-style="color:#666;font-size:14px" placeholder="请输入提现金额"></u-input>
            </view>
            <view class="model m3 row">
				<text class="now-m">当前余额：¥{{amountDetail.balanceCount}} </text>
				<text class="now-m">当前赏金：￥{{amountDetail.bountyCount}}</text>
            </view>
			
        </view>
		
       <!-- <view class="pay-list mt40">
            <text class="f32-c333">提现到</text>
            <view class="xflex-list mt20">
                <view class="xflex-list-item-row" :class="index==1 && 'disable'" @click="handlePay(item,index)" v-for="(item,index) in payList" :key="index">
                    <image class="avatar" :src="item.url"></image>
                    <view class="label">{{item.label}}</view>
                    <view class="is-select" :class="selectPay==index && 'select-pay' "></view>
                </view>
            </view>
        </view> -->
		<view class="card" v-if="selectPay==1">
			<u-input v-model="cardNo" placeholder-style="color:#666;font-size:14px" placeholder="请输入银行卡号"></u-input>
		</view>
		
		<view class="btns">
			<view class="btn left" @click="submit(1)">余额提现</view>
			<view class="btn  right" @click="submit(2)">赏金提现</view>
		</view>
        
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
                cashMoney:'',
                selectPay:0,
				cardNo:'',
                payList:[
                    // {label:'微信',value:1,url:require('@/static/image/wx.png')},
                    // {label:'支付宝',value:'2',url: require('@/static/image/zfb.png')},
                    // {label:'银联',value:2,url:require('@/static/image/yl.png')},
                ]
			};
		},
		computed:{
			...mapState(['amountDetail'])
		},
        methods:{
            handlePay(item,index){
				return
                this.selectPay=index
            },
			submit(type){
				if(type==1 && this.cashMoney>this.amountDetail.balanceCount){
					uni.showToast({
						title:'提现金额不能大于余额',
						icon:'none'
					})
					return
				}
				if(type==2 && this.cashMoney>this.amountDetail.bountyCount){
					uni.showToast({
						title:'提现金额不能大于赏金',
						icon:'none'
					})
					return
				}
				let url='/order/transfers/create'
				let data={
					totalAmount:Number(this.cashMoney) ,
					transfersType:type,
					paymentType:1
				}
				this.$http({url,data,method:'post'}).then(res=>{
					if(res.code==200){
						this.cash(res.data)
					}else{
						uni.showToast({
							title:'提现失败',
							icon:'none'
						})
					}
					
				})
			},
			cash(no){
				this.$http({url:'/order/transfers/pay ',data:{transfersNo:no},method:'post'}).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					if(res.code==200){
						setTimeout(()=>{
							this.$store.dispatch('amountDetail')
						},1500)
					}
				})
			}
        }
	}
</script>

<style lang="scss" scoped>
.page-wrap{
    padding: 30upx;
	/deep/ .u-input__input{
	    color: #333;
	    font-size: 40upx;
	    margin-left: 20upx;
	    border-bottom: 2upx solid #666;
	}
	.tx-item{
		background-color: #28C445;
		width: 100%;
		height: 160upx;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 24upx;
		image{
			width: 48upx;
		}
	}
    .info{
        .m1{
            font-size: 28upx;
            color: #000;
        }
        .m2{
            font-size: 50upx;
            display: flex;
            
        }
        .m3{
            font-size: 28upx;
            color: #666;
            margin-top: 40upx;
			.now-m{
				margin-right: 40upx;
			}
        }
		.all{
		    display: inline-block;
		    background-color: #fff;
		    color: #FA6400;
		    font-size: 28upx;
		}
		.all.left{
			margin-right: 20upx;
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
			.disable{
				background-color: #ddd;
				.is-select{
					border-color: #666;
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
        font-size: 40upx;
        text-align: center;
        height: 100upx;
        line-height: 100upx;
    }
	.btns{
		position: fixed;
		bottom: 100upx;
		left: 0;
		display: flex;
		width: 100%;
		justify-content: space-around;
		.btn{
			width: 44%;
			height: 100upx;
			line-height: 100upx;
			text-align: center;
			border-radius: 12upx;
			font-size: 40upx;
		}
		.left{
			border: 1px solid $base-color;
			color: $base-color;
		}
		.right{
			background-color: $base-color;
			color: #fff;
		}
	}
}
</style>
