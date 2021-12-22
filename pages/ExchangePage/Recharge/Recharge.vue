<template>
	<view class="page-wrap">
		<page-header
		title="充值付费"
		:white='white'
		textColor="#000"
		></page-header>
        <view class="model-wrap info ">
            <view class="model m2 ">
                余额
            </view>
            <view class="model m3 mt20">
				<text class="txt">¥</text>{{amountDetail.balanceCount}}
            </view>
			<view class="row btns">
				<navigator class="btn row" url="./Cash" hover-class="none">
					<image src="http://120.24.56.30:9000/system/cz-icon2.png" mode="widthFix"></image>
					提现
				</navigator>
				<navigator class="btn row"  hover-class="none" url="./BuyList?pageType=charge" >
					<image src="http://120.24.56.30:9000/system/cz-icon3.png" mode="widthFix"></image>
					购买记录
				</navigator>
			</view>
			
        </view>
        <view class="xflex-list mt30 model-wrap list">
            <view 
             class="item"
             :class="selectItem===index && 'select-item'"
             @click="handleItem(item,index)"
             v-for="(item,index) in list" 
             :key="index">
                {{item.label}}<text>元</text>
            </view>
        </view>
		<view class="custom-pay mt30 model-wrap">
			<u-input v-model="customMoney" placeholder="自定义金额" placeholder-style="color:#666;font-size:14px"></u-input>
			<view class="mt20 txt">账户余额无法用于购买连续包月会员以及相应的自动续费服务</view>
		</view>
		
        <view class="pay-list mt40">
            <view class="xflex-list ">
                <view class="xflex-list-item-row" @click="handlePay(item,index)" v-for="(item,index) in payList" :key="index">
                    <image class="avatar" :src="item.url" mode="widthFix"></image>
                    <view class="label">{{item.label}}</view>
                    <image class="is-select" src="http://120.24.56.30:9000/system/check.png" mode="widthFix"></image>
                </view>
            </view>
        </view>
        <view class="base-btn mt40" @click="toPay">
            去支付
        </view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				pageType:'charge',
				userInfo:{},
                selectItem:'',
                selectPay:0,
				detail:{},
				list:[
                    {label:'10',value:1,money:10},
                    {label:'50',value:2,money:50},
                    {label:'100',value:3,money:100},
                    {label:'200',value:4,money:200},
                    {label:'300',value:5,money:300},
                    {label:'500',value:6,money:500},
                ],
				money:'',
                payList:[
                     {label:'微信',value:'1',url:'http://120.24.56.30:9000/system/wx.png'},
                    // {label:'支付宝',value:'2',url: require('')},
                    // {label:'银联',value:'3',url:require('')},
                ],
				ip:'',
				customMoney:'',
			};
		},
		computed:{
			...mapState(['amountDetail'])
		},
		onLoad() {
			this.userInfo=uni.getStorageSync('userInfo')
			uni.request({
				url:'http://ip-api.com/json',
				success: (e) => {
					this.ip=e.data.query
				}
			})
			this.money=this.list[0].money
		},
		onShow() {
			this.$store.dispatch('amountDetail')
		},
        methods:{
            handleItem(item,index){
				this.money=item.money
                this.selectItem=index
            },
            handlePay(item,index){
                this.selectPay=index
            },
			toPay(){
				
				if(!this.customMoney && !this.money){
					return
				}
				let data={
					totalAmount:Number(this.customMoney)  || Number(this.money),
					orderType:'4'
				}
				uni.showLoading({
					title:'加载中'
				})
				this.$http({url:'/order/create',data,method:'POST'}).then(res=>{
					this.prePay(res.data)
				})
			},
			prePay(orderNo){
				let data={
					orderNo:orderNo,
					paymentType:'2',
					ip:this.ip,
					wechatType:1
				}
				this.$http({url:'/order/prePay',data,method:'POST'}).then(res=>{
					uni.hideLoading()
					if(res.code==200){
						this.pay(res.data)
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					}
				})
			},
			pay(paymentData){
				uni.requestPayment({
					...paymentData,
					success:(e)=> {
						this.$getUserInfo().then(res=>{
							this.userInfo=res
						})
						this.$store.dispatch('amountDetail')
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
			
        }
	}
</script>

<style lang="scss" scoped>
.page-wrap{
    padding:30upx;
    background-image: url('http://120.24.56.30:9000/system/ch-bg.png');
    background-repeat: no-repeat;
	background-size: 100% 100%;
    background-color: linear-gradient(180deg, #FFE5C2 0%, #F3F3FE 100%);
	/deep/ .u-input__input{
	    color: #333;
	    font-size: 40upx;
	    margin-left: 20upx;
	}
    .info{
		background-image: url('http://120.24.56.30:9000/system/cz-bg1.png');
		background-size: 100% 100%;
        .model{
            color: #fff;
        }
        .m2{
            font-size: 40upx;
        }
        .m3{
            font-size: 60upx;
			font-weight: bold;
			.txt{
				font-size: 40upx;
				font-weight: normal;
			}
        }
		.btns{
			.btn{
				background-color: #4E5054;
				border-radius: 12upx;
				padding:10upx 25upx;
				color: #fff;
				font-size: 30upx;
				margin-right: 20upx;
				image{
					width: 32upx;
					margin-right: 10upx;
				}
			}
		}
    }
    .list{
       .item{
           color: #825615;
           width: 180upx;
           height: 198upx;
           line-height: 198upx;
           text-align: center;
           border-radius: 16upx;
           margin-right: 40upx;
           font-size: 44upx;
           font-weight: bold;
		   background-color: #FFF5E6;
           margin-bottom: 30upx;
		   border: 1px solid #FFE2B7;
           &:nth-child(3n){
               margin-right: 0;
           }
		   text{
			   font-size: 28upx;
		   }
       } 
       .select-item{
			background-color: #fff;
			border-color: $base-color;
			color: $base-color;
       }
    }
	.custom-pay{
		.txt{
			color: #FA6400;
			font-size: 28upx;
		}
	}
    .pay-list{
        .xflex-list{
            flex-direction: column;
			padding: 20upx;
			background-color: #fff;
			border-radius: 12upx;
            .xflex-list-item-row{
                width: 100%;
                justify-content: flex-start;
                padding:20upx;
                position: relative;
				background-color: rgba(40, 196, 69, 0.09);
				border-radius: 12upx;
				.avatar{
					width: 50upx;
				}
                .label{
                    font-size: 28upx;
                    margin-left: 30upx;
                    color:$base-color;
                }
                .is-select{
                    width: 40upx;
                    height: 40upx;
                    border-radius: 50%;
                    position: absolute;
                    right: 40upx;
                }
            }
        }
        .iconfont{
            font-size: 80upx;
        }
    }
}
</style>
