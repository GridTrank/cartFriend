<script>
	import {Login} from '@/utils/util.js'
	export default {
		// 此处globalData为了演示其作用，不是uView框架的一部分
		globalData: {
		
		},
		onLaunch() {
			uni.getStorage({
				key:'token',
				fail: (err) => {
					Login()
				}
			})
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "common/demo.scss";
	@import "common/common.scss";
	
	::-webkit-scrollbar{ display:none;}
</style>