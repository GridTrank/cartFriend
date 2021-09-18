<template>
	<view class="page-wrap">
		<view class="info">
			<view class="edit" @click="toEdit">编辑资料</view>
		</view>
		<view class="circle-info ">
			<view class="model-wrap">
				<image class="img" src="../../static/image/icon.png" mode="widthFix"></image>
				<view class="add">加入</view>
				<view class="circle-detail">
					<view class="c-name f32-c333 fwb">圈子名称 <text class="is-money bgStyle1">收费</text> </view>
					<view class="c-desc f28-c666 oneHidden mt20">
						圈子简介圈子简介圈子简介圈子简介圈子简介圈子简介
					</view>
				</view>
				<view class=" xflex-list mt20">
					<view class="xflex-list-item item" v-for="(item,index) in toolList" :key="index">
						<text class="num f32-c333 fwb">{{item.value}}</text>
						<text class="tit f28-c666">{{item.label}}</text>
					</view>
				</view>
			</view>
			
			<view class="type-list mt30">
				<view class="type-item" 
				@click="selectType(item,index)"
				:class="active==index && 'type-select'" 
				v-for="(item,index) in typeList" :key="index">
					{{item.label}}
				</view>
			</view>
		</view>
		<invitation-list :item="item"></invitation-list>
		<release></release>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				toolList:[
					{label:'今日发帖',value:20},
					{label:'帖子总数',value:100},
					{label:'成员数',value:30},
				],
				active:0,
				typeList:[
					{label:'推荐',value:1},
					{label:'优质',value:2},
					{label:'悬赏',value:3},
				],
				item:[
					{
						image:'https://cdn.uviewui.com/uview/swiper/1.jpg',
					},
					{
						image:'https://cdn.uviewui.com/uview/swiper/2.jpg'
					},
					{
						image:'https://cdn.uviewui.com/uview/swiper/3.jpg'
					}
				]
			};
		},
		methods:{
			selectType(item,index){
				this.active=index
			},
			toEdit(){
				uni.navigateTo({
					url:'/pages/EditDetail/EditDetail?type='+'edit'
				})
			}
		}
	}
</script>
 
<style lang="scss" scoped>
.page-wrap{
	.info{
		width: 100%;
		height: 300upx;
		background-color: $default-color;
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
		margin-top: -25%;
		padding: 40upx;
		position: relative;
		.img{
			width: 160upx;
			position: absolute;
			top: -60upx;
			left: 80upx;
		}
		.add{
			@include defBtn(#fff);
			width: 30%;
			text-align: center;
			float: right;
		}
		.circle-detail{
			clear: both;
			.is-money{
				font-size: 28upx;
				color: #fff;
				font-weight: 400;
				margin-left: 20upx;
				padding: 5upx 10upx;
			}
		}
		.xflex-list{
			justify-content: space-around;
		}
		.type-list{
			display: flex;
			align-items: center;
		}
		.type-item{
			margin-right: 40upx;
			font-size: 32upx;
			color: #666;
		}
		.type-select{
			color: #333;
			font-size: 36upx;
			font-weight: bold;
			position: relative;
			&::after{
				content: '';
				display: block;
				position: absolute;
				bottom: -8upx;
				width: 100%;
				height: 8upx;
				background-color: $default-color;
				border-radius: 16upx;
			}
		}
	}
}
</style>
