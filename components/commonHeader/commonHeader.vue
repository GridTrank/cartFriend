<template>
	<view class="head xflex-list" :style="'height:'+height+'px'"> 
        <view class="iconfont" >&#xe60e;</view>
        <view class="title">
            标题
        </view>
        <view class="">
            列表
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height:''
			};
		},
        created(){
            uni.getSystemInfo({
                success:(e)=>{
                    this.height=e.statusBarHeight+50
                    console.log(this.height)
                }
            })
        }
	}
</script>

<style lang="scss">
.head{
    padding: 0 40upx;
    
    .title{
        width: 80%;
    }
}
</style>
