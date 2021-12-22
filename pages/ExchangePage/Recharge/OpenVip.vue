<template>
    <view class="page-wrap">
		<page-header
		:title="title"
		:white='white'
		textColor="#000"
		></page-header>
		<view class="material mt60">
			<view class="material-user row">
				<view class="user-info">
					<view class="days mt10">
						<text class="m-i-t1">当前{{pageType=='mounth'?'月卡':pageType=='quarter'?'季卡':'年卡'}}剩余天数</text>
						
					</view>
					<navigator hover-class="none" url="./BuyList?pageType=card" class="mt10 row">
						<image class="vip-img" src="http://120.24.56.30:9000/system/vip-icon.png" mode=""></image>
					    购买记录
					</navigator>
				</view>
				<text class="m-i-t2">{{amountDetail.daysCount}} <text class="txt">天</text> </text>
			</view>
		</view>
		<view class="open ">
			<view class="open-vip">
				<view class="v-tit">开通会员专享4大会员权益</view>
				<view class="v-desc">会员可免费加入圈子</view>
			</view>
			<view class="open-list mt20">
				<view class="open-item model-wrap column"
				@click="selectType(item,index)"
				:class="(pageType==item.type) && 'select-type'"
				v-for="(item,index) in typeList" 
				:key="index">
					<image class="item-img" :src="pageType==item.type?'http://120.24.56.30:9000/system/hy2-a.png':'http://120.24.56.30:9000/system/hy2.png'" mode="widthFix"></image>
					<text class="item-bg ">{{item.typeTxt}}</text>
					<text class="item-t1 mt10">{{item.label}}</text>
					<text class="item-t2 ">{{item.value}}<text> /{{item.typeTxt}}</text></text>
				</view>
			</view>
		</view>
        <view class="tip model-wrap">
            <text>1.购买月卡/年卡后可免费加入付费圈子</text>
            <text>2.购买月卡后赠送100ml汽油，购买年卡赠送1000ml汽油，汽油可在兑换中心兑换月卡、年卡、实物商品以及京东购物卡等</text>
            <text>3.月卡/年卡充值成功后无法退款，不能提现</text>
        </view>
        <view class="pay-list mt40">
            <view class="xflex-list mt20">
                <view class="xflex-list-item-row" @click="handlePay(item,index)" v-for="(item,index) in payList" :key="index">
                    <image class="avatar" :src="item.url" mode="widthFix"></image>
                    <view class="label">{{item.label}}</view>
					<image class="is-select" src="http://120.24.56.30:9000/system/check.png" mode="widthFix"></image>
                </view>
            </view>
        </view>
		
        <view class="mt40 base-btn" @click="toPay">
            去支付
        </view>
    </view>
</template>

<script>
	import { mapState } from 'vuex'
    export default{
        data(){
            return{
                pageType:'mounth',
                selectPay:0,
                typeList:[
                    {label:'月卡',value:'9.9',type:'mounth',typeTxt:'月'},
                    {label:'季卡',value:'29',type:'quarter',typeTxt:'季'},
                    {label:'年卡',value:'99',type:'year',typeTxt:'年'},
                ],
				money:'',
                payList:[
                    {label:'微信',value:'1',url:'http://120.24.56.30:9000/system/wx.png'},
                    // {label:'支付宝',value:'2',url: require()},
                    // {label:'银联',value:'3',url:require()},
                ],
				ip:'',
				detail:{},
				title:'',
            }
        },
		computed:{
			...mapState(['amountDetail'])
		},
        onLoad(e){
            this.pageType=e.type
			this.title=e.type=='mounth'?'开通月卡':e.type=='quarter'?'开通季卡':'开通年卡'
			
			uni.request({
				url:'http://ip-api.com/json',
				success: (e) => {
					this.ip=e.data.query
				}
			})
			this.money=this.typeList.filter(item=>{
				return this.pageType==item.type
			})[0].value
			this.$store.dispatch('amountDetail')
        },
       
        methods:{
            handlePay(item,index){
                this.selectPay=index
            },
            selectType(item,index){
				this.money=item.value
                this.pageType=item.type
            },
			toPay(){
				let data={
					totalAmount:this.money,
					orderType:this.pageType=='mounth'?'1':this.type=='quarter'?'2':'3'
				}
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
			// 支付
			pay(paymentData){
				uni.requestPayment({
					...paymentData,
					success:(e)=> {
						console.log(1111,e)
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
	.material{
		width: 100%;
		height: 200upx;
		position: relative;
		margin-bottom: 40upx;
		background-image: url('http://120.24.56.30:9000/system/hy3.png');
		background-size: 100% 100%;
		padding: 30upx;
		.material-user{
			height: 140upx;
			background-image: url('http://120.24.56.30:9000/system/vip-bg1.png');
			background-size: 100% 100%;
			position: relative;
			.user-info{
				color: #FE4901;
				margin-left: 40upx;
				.vip-img{
					width: 30upx;
					height: 30upx;
					margin-right: 10upx;
				}
				.days{
					color: #FE4901;
					font-size: 28upx;
					padding: 4upx;
					border-radius: 8upx;
					background-color: #FFE2B7;
				}
				
			}
			.m-i-t2{
				color: #FE4901;
				position: absolute;
				right: 30upx;
				font-size: 78upx;
				.txt{
					font-size: 36upx;
				}
			}
			.to-recharge{
				position: absolute;
				right: 0upx;
				top: 0upx;
				width: 140upx;
				height: 140upx;
			}
		}
	}
	.open{
		margin-bottom: 40upx;
		width: 100%;
		height: 430upx;
		background-image: url('http://120.24.56.30:9000/system/hy9.png');
		position: relative;
		background-size: 100% 100%;
		padding: 30upx;
		.open-vip{
			color: #412815;
			.v-tit{
				font-size: 40upx;
				font-weight: 600;
			}
			.v-desc{
				font-size: 28upx;
			}
		}
		.open-list{
			display: flex;
			align-items: center;
			justify-content: space-between;
			.open-item{
				position: relative;
				border: 1px solid #AF9072;
				width: 200upx;
				height: 260upx;
				justify-content: center;
				align-items: center;
				.item-img{
					width: 100%;
					position: absolute;
					top: 0;
					left: 0;
				}
				.item-bg{
					background-image: url('http://120.24.56.30:9000/system/hy8.png');
					width: 50upx;
					height: 40upx;
					background-size: 100% 100%;
					text-align: center;
					margin-top: 70upx;
					color: #BB9576;
					font-size: 24upx;
				}
				.item-t1{
					color: #825615;
					font-size: 28upx;
				}
				.item-t2{
					color: #825615;
					font-size: 58upx;
					text{
						font-size: 28upx;
					}
				}
			}
			.select-type{
				background-color: #EBD8BA;
			}
		}
	}
    .tip{
       display: flex;
       flex-direction: column;
	   color: #A3A3A3;
	   font-size: 28upx;
	   text{
		   line-height: 50rpx;
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
