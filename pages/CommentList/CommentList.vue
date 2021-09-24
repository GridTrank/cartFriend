<template>
    <view class="page-wrap  ">
            <view class="eva-item xflex-list">
                <view class="eva-list xflex-list-item-row" :class="index==1 && 'mt30'" v-for="(item,index) in 9" :key="index">
                    <image class="eva-img" src="../../static/image/icon.png" mode="widthFix"></image>
                    <view class="eva-info">
                        <view class="eva-model">
                            <view class="name f32-c333 fwb">用户昵称 </view>
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
                    </view>
                </view>
            </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {

            };
        }
    }
</script>

<style lang="scss">
  
        .eva-item {
            .eva-list {
                align-items: flex-start;
                padding: 40upx;
                border-radius: 0;
                .eva-img {
                    width: 100upx;
                    margin-right: 20upx;
                }

                .eva-info {
                    width: 550upx;

                    .eva-model {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .time {
                            font-size: 24upx;
                            color: #666;
                        }

                        .num-s {
                            margin-right: 10upx;
                            display: flex;
                            align-items: center;

                            .num-t1 {
                                background-color: $default-color;
                                padding: 4upx 8upx;
                                border-radius: 8upx;
                                margin-right: 8upx;
                                color: #fff;
                                font-size: 28upx;
                            }

                            .num-t2 {
                                font-size: 28upx;
                            }
                        }
                    }

                    .detail-list {
                        padding: 30upx;
                        background-color: rgba(0, 0, 0, 0.1);
                        border-radius: 42upx;

                        .detail-item {
                            .t1 {
                                font-size: 30upx;
                            }
                        }
                    }
                }
            }

            .show-more {
                color: $default-color;
                font-size: 32upx;
            }
        }

        /deep/ .u-input {
            background-color: #fff;
            width: 150upx;
        }
</style>
