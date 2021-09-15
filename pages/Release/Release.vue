<template>
	<view class="page-wrap">
		<view class="select-cirlce">
			<text class="txt">当前圈子：</text>
			<text class="circle-txt" @click="showList=true">
				{{cirlceName}} 
				<u-icon name="arrow-down" style="margin-left: 5px;" size="28"></u-icon>
			</text>
			
		</view>
		<view class="type-list xflex-list mt30">
			<view class="type-item" 
				v-for="(item,index) in typeList" 
				:key="index"
				:class="activeType==index && 'select-item'"
				@click="selectType(item,index)"
			>
				{{item.name}}
			</view>
		</view>
        <view class="input-wrap mt30">
            <u-input class="title " type="" v-model="title" placeholder="请输入标题" />
        </view>
        
        <view class="input-wrap mt30">
            <u-input class="content " type="textarea" v-model="content" />
        </view>
		
		<u-select v-model="showList" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showList:false,
				
				cirlceName:'当前的圈子',
				list:[
					{label:'第一个圈子',value:1},
					{label:'第二个圈子',value:2},
				],
				activeType:0,
				typeList:[
					{name:'提问',value:'question'},
					{name:'文章',value:'article'},
					{name:'视频',value:'video'},
				],
				title:'',
				content:''
			};
		},
		methods:{
			confirm(res){
				console.log(res)
				this.cirlceName=res[0].label
			},
			selectType(item,index){
				this.activeType=index
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-wrap{
	min-height: 100vh;
	padding:40upx;
	
	.select-cirlce{
		.txt{
			font-size: 30upx;
			color: #333;
		}
		.circle-txt{
			display: inline-block;
			padding: 10upx 50upx;
			border-radius: 50upx;
			background-color: $default-color;
			color: #fff;
			font-size: 32upx;
		}
	}
	.type-list{
		
		.type-item{
			padding: 30upx 50upx;
			background-color: #fff;
			border-radius: 16upx;
			margin-right: 40upx;
		}
		.select-item{
			background-color: $default-color;
			color: #fff;
		}
	}
	
    .input-wrap {
        background-color: #fff;
        border-radius: 16upx;
        padding: 4upx 10upx 4upx 20upx;
    }
    .title{
		background-color: #fff;
		border-radius: 16upx;
	}
	.content{
		background-color: #fff;
		min-height: 400upx;
		border-radius: 16upx;
	}
}
</style>
