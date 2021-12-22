<template>
	<view class="mix-page-header" >
		<view v-if="white" :style="{height: statusBarHeight + 'px'}" class="vv"></view>
		<view 
			class="content row" 
			:class="white && 'white'"
			:style="{
				top: statusBarHeight + 'px',
				height: statusBarHeight + 'px'
			}"
		>
			<view class="btn center" @click="back" v-if="showLeft">
				<image src="http://120.24.56.30:9000/system/back.png" mode="widthFix"></image>
			</view>
			<view 
				class="search-wrap"
				:style="{height: customHeight + 'px',color:textColor}" 
			>
				{{title}}
			</view>
			<!-- #ifndef MP -->
			<view class="btn center">
			</view>
			<!-- #endif -->
		</view>
		<!-- 占位栏 -->
		<view v-if="showFillView" :style="[{minHeight: navigationBarHeight+statusBarHeight+'px'}]"></view>
	</view>
</template>

<script>
	export default {
		name: 'HomePageHeader',
		data() {
			return {
				
			};
		},
		props: {
			//顶部是否占位
			showFillView: {
				type: Boolean,
				default: true
			},
			showLeft:{
				type:Boolean,
				default:true
			},
			title:{
				type:String,
				default:''
			},
			white:{
				type:Boolean,
				default:false
			},
			textColor:{
				type:String,
				default:'#fff'
			}
		},
		computed: {
			statusBarHeight(){
				return this.systemInfo.statusBarHeight
			},
			navigationBarHeight(){
				return this.systemInfo.navigationBarHeight;
			},
			customWidth(){
				return this.systemInfo.custom.width;
			},
			customHeight(){
				return this.systemInfo.custom.height;
			},
			//小程序右侧需要留出气泡空间
			headerPaddingRight(){
				// #ifndef MP
				return 0;
				// #endif
				// #ifdef MP
				return this.customWidth + 20;
				// #endif
			},
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			scanCode(){
				uni.scanCode({
					success: res=> {
						const result = res.result;
						if(typeof result === 'string'){
							uni.navigateTo({
								url: '/pages/public/web-view?url=' + result
							})
							return;
						}
						//这里处理自定义逻辑
						
						
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.vv{
		background-color: #fff;
		width: 100%;
		position: fixed;
		z-index: 999;
		top: 0;
		display: flex;
		left: 0;
	}
	.content{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 95;
		width: 100%;
		background-color: transparent;
		justify-content: center;
	}
	.btn{
		padding: 5px 12px;
		position: absolute;
		left: 0upx;
		image{
			width: 70upx;
		}
	}
	.search-wrap{
		font-size: 40upx;
		color: #fff;
		border-radius: 100px;
		display: flex;
		align-items: center;
	}
	.white{
		background-color: #fff;
		.search-wrap{
			color: #333 !important;
		}
	}
</style>
