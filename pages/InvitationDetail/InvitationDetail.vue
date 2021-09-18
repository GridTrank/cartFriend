<template>
	<view class="page-wrap" >
		<view class="swiper-wrap">
			<u-swiper 
				:list="list" 
				height="500"
				@click="prewImage"
			></u-swiper>
			<view class="more" @click="showMoreList=true">更多</view>
			
			
			
		</view>
		<view class="content">
			<view class="user-info xflex-list">
				<view class="user xflex-list">
					<image class="user-img" src="@/static/image/icon.png" mode="widthFix"></image>
					<text class="user-name">用户昵称</text>
				</view>
				<view class="zan xflex-list">
					<text class="z-left">点赞</text>
					<text>10</text>
				</view>
			</view>
			
			<view class="detail mt30">
				<view class="f32-c333 fwb twoHidden">
					这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题
				</view>
				<view class="mt30">
					这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容
				</view>
			</view>
		</view>
		
		<view class="evaluate mt20">
			<view class="top xflex-list">
				<text>全部评论</text>
				<view class="sort-type">
					<u-select ></u-select>
					<u-input v-model="sortType" style="width: 20%;" @click="showSortType=true" type="select" border />
				</view>
			</view>
		</view>
		
		<u-select v-model="showSortType" :list="sortTypeList" @confirm="confirm"></u-select>
		<!-- 更多选择 -->
		<view class="more-list-wrap"  v-if="showMoreList" @click.stop ="showMoreList=false">
			<view class="more-list">
				<view class="xflex-list list">
					<view class="item" v-for="(item,index) in moreList" :key="index" @click.stop="selectMore(item)">{{item.label}}</view>
				</view>
			</view>
		</view>
		
		<!-- 底部选项 -->
		<view class="foot-tool">
			<view class="xflex-list foot-list">
				<view class="xflex-list-item-row foot-item" v-for="(item,index) in toolList" :key="index">
					<text class="t1">{{item.label}}</text>
					<text class="t2">{{item.num}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {previewImage} from '@/utils/util.js'
	export default {
		components:{},
		data() {
			return {
				showSortType:false,
				showMoreList:false,
				sortType:'最新',
				sortTypeList:[
					{label:'最新',value:1},
					{label:'最热',value:2},
				],
				list:[
					{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					}
				],
				moreList:[
					{label:'收藏',value:1},
					{label:'删除',value:2},
					{label:'分享',value:3},
					{label:'邀请好友',value:4},
				],
				toolList:[
					{label:'转发',num:50,value:1},
					{label:'评论',num:50,value:2},
					{label:'反对',num:50,value:3},
					{label:'赞同',num:50,value:4}
				]
			};
		},
		methods:{
			prewImage(e){
				previewImage(this.list)
			},
			confirm(e){
				console.log(e)
				this.sortType=e[0].label
			},
			dropDownChange(e){
				console.log(e)
			},
			selectMore(item){
				console.log(item)
			}
		}
	}
</script>

<style lang="scss">
.page-wrap{
	padding-bottom: 130upx;
	.swiper-wrap{
		position: relative;
		.more{
			position: absolute;
			z-index: 9999;
			background-color: $default-color;
			padding:10upx 30upx;
			border-radius: 50upx;
			color: #fff;
			top:30upx;
			right: 64upx;
		}
	}
	.content{
		background-color: #fff;
		padding: 40upx;
		.user-info{
			justify-content: space-between;
			.user{
				.user-img{
					width: 80upx;
					margin-right: 20upx;
				}
			}
			.zan{
				.z-left{
					padding: 6upx;
					background-color: #ddd;
					border-radius: 8upx;
				}
			}
		}
	}
	.evaluate{
		padding: 40upx;
		background-color: #fff;
		.top{
			justify-content: space-between;
		}
		/deep/ .u-input{
			background-color: #fff;
			width: 150upx;
		}
	}
	.more-list-wrap{
		position: fixed;
		background-color: rgba(0,0,0,0);
		width: 100%;
		height: 100%;
		top: 0;
		.more-list{
			position: absolute;
			z-index: 9999;
			top:100upx;
			right: 30upx;
			background-color: #fff;
			border-radius: 8upx;
			padding: 20upx;
			.list{
				flex-direction: column;
				.item{
					height: 65upx;
					line-height: 65upx;
					width: 150upx;
					text-align: center;
				}
			}
		}
	}
	.foot-tool{
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #f2f2f2;
		z-index: 999;
		.foot-list{
			justify-content: space-around;
			padding: 40upx 0;
			.foot-item{
				background-color: #f2f2f2;
				.t1{
					padding:6upx 18upx;
					background-color: $default-color;
					border-radius: 12upx;
					color: #fff;
					margin-right: 10upx;
				}
			}
		}
	}
}
</style>
