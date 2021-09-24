<template>
	<view class="page-wrap">
		<view class="image-wrap mt30">
			<image class="img" src="../../static/image/icon.png" mode="widthFix"></image>
			<text class="upload" @click="upload">{{pageType=='edit'?'修改圈子图片':'上传圈子图片'}}</text>
		</view>
		<view class="form-wrap mt20">
			<u-form :model="form" :border-bottom="false">
				<u-form-item  :border-bottom="false">
					<view class="">名称</view>
					<u-input v-model="form.name" border style="background-color: #fff;"></u-input>
				</u-form-item>
				<u-form-item :border-bottom="false">
					<view class="">个性签名</view>
					<u-input v-model="form.description" border style="background-color: #fff;"></u-input>
				</u-form-item>
				<u-form-item :border-bottom="false">
					<view class="">地区</view>
					<u-input v-model="form.region" placeholder="请选择地区" @click="selectRegion" type="select" border />
					
				</u-form-item>
				<u-form-item :border-bottom="false">
					<view class="">圈子类型</view>
					<u-input v-model="form.type" placeholder="请选择圈子类型" @click="showType=true" type="select" border />
				</u-form-item>
			</u-form>
		</view>
		
		<view class="submit-btn  bgStyle1" @click="submit">
			{{pageType=='edit'?'确认修改':'创建'}}
		</view>
		
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
		<u-select v-model="showType" :list="typeList" @confirm="selectType"></u-select>
	</view>
</template>

<script>
	import lotusAddress from "../../components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue";
    import {uploadFile} from '@/utils/util.js'
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
                province:'',
                city:'',
				showType:false,
				typeList:[
					{label:'公开',value:1},
					{label:'邀请制',value:2},
					{label:'付费制',value:3},
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
            submit(){
                let that=this
                let data={
                    name:that.form.name,
                    description:that.form.name,
                    province:that.province,
                    city:that.city,
                    type:that.typeList.filter((item)=>{
                            return item.label==that.form.type
                    })[0].value,
                }
                
                console.log(data)
                
            },
            selectType(val){
                console.log(val)
                this.form.type=val[0].label
            },
			selectRegion(){
				this.lotusAddressData.visible = true;
			},
			openPicker() {
			    this.lotusAddressData.visible = true;
			    this.lotusAddressData.provinceName = '广东省';
			    this.lotusAddressData.cityName = '广州市';
			    this.lotusAddressData.townName = '白云区';
			},
			choseValue(res){
			    this.lotusAddressData.visible = res.visible;
			    if(res.isChose){
			        this.lotusAddressData.provinceName = res.province;//省
			        this.lotusAddressData.cityName = res.city;//市
			        this.lotusAddressData.townName = res.town;//区
			        this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
			        this.form.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
                    this.province=res.province
                    this.city=res.city
			    }
			},
			upload(){
                let data={
                    name:this.form.name,
                    description:this.form.name,
                    provithis:this.city,
                    type:this.form.name,
                }
                console.log(data)
                
                uploadFile('/goods/circle/add','photo',data)
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
