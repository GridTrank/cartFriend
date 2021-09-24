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
					<text class="user-name f32-c333">用户昵称</text>
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
					这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是
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
            <view class="eva-item xflex-list">
                <view class="eva-list mt30 xflex-list-item-row" v-for="(item,index) in 8 " :key="index">
                    <image class="eva-img" src="../../static/image/icon.png" mode="widthFix"></image>
                    <view class="eva-info">
                        <view class="eva-model">
                            <view class="name f32-c333 fwb">用户昵称 {{index}} </view>
                            <view class="best bgStyle1">最佳答案</view>
                        </view>
                        <view class="eva-content mt20 f28-c666">评论详情评论详情评论详情评论详情评论详情评论详情评论详情评论详情评论详情 </view>
                        <view class="eva-model mt30">
                            <view class="time">
                                08/12 16:30
                            </view>
                            <view class="num-wrap xflex-list">
                                <view class="num-s">
                                    <text class="num-t1">赞同</text>
                                    <text class="num-t2">20</text>
                                </view>
                                <view class="num-s">
                                    <text class="num-t1">反对</text>
                                    <text class="num-t2">20</text>
                                </view>
                                <view class="num-s">
                                    <text class="num-t1" @click="showEvaInput=true">评论</text>
                                    <text class="num-t2">20</text>
                                </view>
                            </view>
                        </view>
                        
                        <view class="detail-list mt30" >
                            <view class="detail-item" v-for="(vv,vi) in 3" :key="vi">
                                <text class="f32-c333 t1 fwb">用户昵称：</text>
                                <text class="f28-c666 t2">评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</text>
                            </view>
                            <view class="show-more mt20" @click="showMore">
                                查看全部33条评论
                            </view>
                        </view>
                    </view>
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
				<view class="xflex-list-item-row foot-item" @click="toolHandle(item,index)" v-for="(item,index) in toolList" :key="index">
					<text class="t1">{{item.label}}</text>
					<text class="t2">{{item.num}}</text>
				</view>
			</view>
		</view>
        
        <!-- 评论输入框 -->
        <view class="fixed-wrap-bg" v-if="showEvaInput" @click.stop ="showEvaInput=false">
            <view class="eva-input" :class="focus && 'is-focus'" @click.stop="showEvaInput=true">
                <input type="text" :focus="focus" @blur="focus=false" @focus="focus=true" :value="commont" />
                <view class="send-eva"> 发送 </view>
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
                showEvaInput:false,
                focus:false,
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
				],
                commont:''
			};
		},
		watch:{
            "showEvaInput":function(val){
                this.focus=val
            },
            "focus":function(val){
                console.log(111,val)
            }
            
        },
        methods:{
            // 预览图片
			prewImage(e){
				previewImage(this.list)
			},
            // 选择排序
			confirm(e){
				console.log(e)
				this.sortType=e[0].label
			},
            // 查看更多评论
            showMore(){
                uni.navigateTo({
                    url:'/pages/CommentList/CommentList'
                })
            },
            // 底部评论
            toolHandle(item,index){
                if(index==1){
                    this.showEvaInput=true
                }
            },
			dropDownChange(e){
				console.log(e)
			},
            // 更多
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
        .eva-item{
            .eva-list{
                align-items: flex-start;
                .eva-img{
                    width: 100upx;
                    margin-right: 20upx;
                }
                .eva-info{
                    width: 550upx;
                    .eva-model{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .time{
                            font-size: 24upx;
                            color: #666;
                        }
                        .num-s{
                            margin-right: 10upx;
                            display: flex;
                            align-items: center;
                            .num-t1{
                                background-color: $default-color;
                                padding: 4upx 8upx;
                                border-radius: 8upx;
                                margin-right: 8upx;
                                color: #fff;
                                font-size: 28upx;
                            }
                            .num-t2{
                                font-size: 28upx;
                            }
                        }
                    }
                    .detail-list{
                        padding: 30upx;
                        background-color: rgba(0,0,0,0.1);
                        border-radius: 42upx;
                        .detail-item{
                            .t1{
                                font-size: 30upx;
                            }
                            
                        }
                    }
                }
            }
            .show-more{
                color: $default-color;
                font-size: 32upx;
            }
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
        z-index: 999;
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
		z-index: 888;
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
    .eva-input{
        position: fixed;
        background-color: #f2f2f2;
        padding:40upx;
        bottom: 0;
        z-index: 999;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /deep/ input{
            background-color: #fff;
            width: 80%;
                height: 70rpx;
                border-radius: 8rpx;
                padding-left: 10upx;
        }
        .send-eva{
            background-color: $default-color;
            color: #fff;
            padding: 6upx 20upx;
            border-radius: 10upx;
        }
    }
    .is-focus{
        /deep/ input,.send-eva{
            margin-bottom: 40upx;
        }
    }
}
</style>
