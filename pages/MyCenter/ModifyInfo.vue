<template>
	<view class="page-wrap">
		<view class="label" v-if="pageType=='avatar'">
			<image class="img" :src="userInfo.photo" mode="widthFix"></image>
			<view class="base-btn s-img" @click="selectImg">
				选择照片
			</view>
		</view>
		<view class="label " v-if="pageType=='nickName'">
			<view class="input">
				<u-input v-model="userInfo.nickName" placeholder="请输入昵称"></u-input>
			</view>
			<text>最多14个英文字符或7个汉字，30天内只能修改一次</text>
		</view>
		<view class="label " v-if="pageType=='desc'">
			<view class="input-area">
				<u-input type="textarea" v-model="userInfo.description" placeholder="写点什么吧"></u-input>
			</view>
		</view>
		<view class="base-btn" @click="submit">
			确认
		</view>
	</view>
</template>

<script>
	import {uploadFile} from '@/utils/util.js'
	export default{
		data(){
			return{
				pageType:'',
				userInfo:uni.getStorageSync('userInfo')
			}
		},
		onLoad(e) {
			this.pageType=e.pageType
			uni.setNavigationBarTitle({
			　　title:e.pageType=='avatar'?'头像设置':
					e.pageType=='nickName'?'昵称设置':
					'个人介绍设置'
			})
		},
		methods:{
			selectImg(){
				uploadFile('/member/upload','photo').then(res=>{
					this.userInfo.photo=res
				})
			},
			submit(){
				let data={
					nickName:this.userInfo.nickName,
					photo:this.userInfo.photo,
					description:this.userInfo.description
				}
				this.$http({url:'/member/update',data,method:'post'}).then(res=>{
					uni.showToast({
						title:'设置成功',
						icon:'none'
					})
					setTimeout(()=>{
						uni.navigateBack()
					},1500)
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	.page-wrap{
		min-height: 100vh;
		padding: 40upx;
		.label{
			.img{
				margin: 0 auto;
				display: block;
				max-height: 600upx;
				border-radius: 12upx;
			}
		}
		.input{
			background-color: #fff;
			border-radius: 2upx;
			padding: 10upx 30upx;
			margin-bottom: 30upx;
		}
		.input-area{
			height: 600upx;
			background-color: #fff;
			border-radius: 12upx;
			padding: 20upx;
		}
		.btn{
			width: 100%;
			height: 80upx;
			line-height: 80upx;
			background-color: $default-color;
			border-radius: 50upx;
			text-align: center;
			color: #fff;
			font-size: 36upx;
		}
		.base-btn{
			position: fixed;
			bottom: 70upx;
			width: 88%;
		}
		.s-img{
			background-color: #fff;
			border: 1px solid $base-color;
			color: $base-color;
			position: fixed;
			bottom: 200upx;
			width: 88%;
		}
	}
</style>
