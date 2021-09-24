<template>
	<view class="login-wrap">
		<u-popup 
        v-model="showModel" 
        :mask-close-able="false"
        mode="center">
            <view class="wrap xflex-list">
                <button class="login-btn" @click="ceshi">授权登录</button>
                <button class="login-btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号码</button>
            </view>
        </u-popup>
	</view>
</template>

<script>
    import { mapState } from 'vuex'
    import {getUserProfile} from '@/utils/util.js'
	export default {
		data() {
			return {
				showPop:true
			};
		},
        computed:{
            showModel:{
                get:function(){
                    return this.showLoginPop
                },
                set:function(val){
                    return val
                }
            },
        },
        methods:{
            ceshi(){
                getUserProfile()
            },
            getPhoneNumber(e){
                console.log(e)
            }
        }
	}
</script>

<style lang="scss">

</style>
