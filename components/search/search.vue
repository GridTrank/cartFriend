<template>
	<view>
		<u-input
			v-model="keyword"
			:clearable="false"
			:border="true"
		>
		</u-input>
		<u-icon name="search"  size="28"></u-icon>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:''
			};
		}
	}
</script>

<style lang="scss">

</style>
