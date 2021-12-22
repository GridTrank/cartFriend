<script>
	import Vue from 'vue'
	import {Login} from '@/utils/util.js'
	export default {
		// 此处globalData为了演示其作用，不是uView框架的一部分
		globalData: {
		
		},
		onLaunch(e) {
			uni.getSystemInfo({
				success: e=> {
					this.initSize(e);
				}
			})
		},
		onPageScroll(e) {
			console.log(123123)
		},
		methods:{
			initSize(e){
				const systemInfo = e;
				let navigationBarHeight;
				let custom = {};
				// #ifndef MP
				custom = {height: 36,width: 88};
				navigationBarHeight = 44;
				// #endif
				// #ifdef MP
				custom = wx.getMenuButtonBoundingClientRect();
				navigationBarHeight = custom.bottom + custom.top - e.statusBarHeight * 2;
				// #endif	
				systemInfo.custom = custom;
				systemInfo.navigationBarHeight = navigationBarHeight;
				Vue.prototype.systemInfo = systemInfo;
			},
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "common/demo.scss";
	@import "common/common.scss";
	@import '/common/iconfont.css';
	::-webkit-scrollbar{ display:none;}
</style>