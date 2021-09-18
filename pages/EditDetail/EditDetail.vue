<template>
	<view class="page-wrap">
		<view class="image-wrap mt30">
			<image class="img" src="../../static/image/icon.png" mode="widthFix"></image>
			<text class="upload" @click="upload">点击上传头像</text>
		</view>
		<view class="form-wrap mt20">
			<u-form :model="form" :border-bottom="false">
				<u-form-item  :border-bottom="false">
					<view class="">名称</view>
					<u-input v-model="form.name" border style="background-color: #fff;"></u-input>
				</u-form-item>
				<u-form-item :border-bottom="false">
					<view class="">个性签名</view>
					<u-input v-model="form.sign" border style="background-color: #fff;"></u-input>
				</u-form-item>
				<u-form-item :border-bottom="false">
					<view class="">地区</view>
					<u-input v-model="form.region" @click="selectRegion" type="select" border />
					
				</u-form-item>
				<u-form-item :border-bottom="false">
					<view class="">圈子类型</view>
					<u-input v-model="form.type" @click="showType=true" type="select" border />
				</u-form-item>
			</u-form>
		</view>
		
		<view class="submit-btn  bgStyle1">
			{{pageType=='edit'?'确认修改':'创建'}}
		</view>
		
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
		<u-select v-model="showType" :list="typeList"></u-select>
	</view>
</template>

<script>
	import lotusAddress from "../../components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue";
	export default {
		data() {
			return {
				pageType:'',
				form:{},
				lotusAddressData:{
				    visible:false,
				    provinceName:'',
				    cityName:'',
				    townName:'',
				},
				region:'',
				showType:false,
				typeList:[
					{label:'类型1',value:1},
					{label:'类型2',value:2},
					{label:'类型3',value:3},
					{label:'类型4',value:4},
				]
			};
		},
		components:{
		    "lotus-address":lotusAddress
		},
		onLoad(e) {
			this.pageType=e.type
			uni.setNavigationBarTitle({
			　　title:e.type=='edit'?'修改圈子资料':'创建圈子'
			})
		},
		methods:{
			selectRegion(){
				this.lotusAddressData.visible = true;
			},
			openPicker() {
			    this.lotusAddressData.visible = true;
			    this.lotusAddressData.provinceName = '广东省';
			    this.lotusAddressData.cityName = '广州市';
			    this.lotusAddressData.townName = '白云区';
			},
			//回传已选的省市区的值
			choseValue(res){
			    //res数据源包括已选省市区与省市区code
			    console.log(res);
			    this.lotusAddressData.visible = res.visible;//visible为显示与关闭组件标识true显示false隐藏
			    //res.isChose = 1省市区已选 res.isChose = 0;未选
			    if(res.isChose){
			        this.lotusAddressData.provinceName = res.province;//省
			        this.lotusAddressData.cityName = res.city;//市
			        this.lotusAddressData.townName = res.town;//区
			        this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
			        this.form.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
			    }
			},
			upload(){
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: 'http://8.134.100.47/api/member/update',
				            filePath: tempFilePaths[0],
				            name: 'photo',
							header:{
								'Authorization': 'Bearer '+uni.getStorageSync('token'),
								'Content-Type': 'multipart/form-data'
							},
				            formData: {
				                'userId': uni.getStorageSync('user_id')
				            },
				            success: (uploadFileRes) => {
				                console.log(uploadFileRes.data);
				            }
				        });
				    }
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-wrap{
	min-height: 100vh;
	overflow: hidden;
	.image-wrap{
		width: 100%;
		// height: 300upx;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		justify-content: center;
		.img{
			width: 200upx;
			border-radius: 50%;
			margin-bottom: 20upx;
		}
	}
	.form-wrap{
		width: 80%;
		margin:auto;
		/deep/ .u-input{
			background-color: #fff;
		}
	}
	.submit-btn{
		width: 35%;
		padding: 16upx 38upx;
		text-align: center;
		margin:40upx auto;
	}
}
</style>
