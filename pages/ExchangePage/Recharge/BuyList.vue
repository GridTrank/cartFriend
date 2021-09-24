<template>
    <view class="page-wrap">
        <view class="xflex-list">
            <view class="xflex-list-item" v-for="(item,index) in list" :key="index">
                <view class="name f32-c333 fwb">车友圈会员：{{item.name}}</view>
                <view class="time f28-c666 mt20">充值时间：{{item.time}}</view>
                <view class="money">
                    ¥{{item.money}}
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                list:[
                    {
                        name:'月卡',
                        time:'20201.01.01',
                        money:'9.9'
                    },
                    {
                        name:'月卡',
                        time:'20201.01.01',
                        money:'9.9'
                    },
                    {
                        name:'年卡',
                        time:'20201.01.01',
                        money:'9.9'
                    },
                    {
                        name:'月卡',
                        time:'20201.01.01',
                        money:'9.9'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.page-wrap{
    min-height: 100vh;
    .xflex-list{
        flex-direction: column;
        width: 100%;
        .xflex-list-item{
            width: 100%;
            background-color: #fff;
            border-bottom: 2upx solid #ddd;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 30upx;
            border-radius: 0;
            position: relative;
            .money{
                font-size: 30upx;
                color: #333;
                font-weight: bold;
                position: absolute;
                right: 30upx;
                top: 46upx;
            }
        }
    }
}
</style>
