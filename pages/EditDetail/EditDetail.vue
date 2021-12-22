<template>
	<view class="page-wrap">
		<view class="bg"></view>
		<page-header
		:title="title"
		></page-header>
		
		<view class="form-wrap model-wrap ">
			<u-form :model="form" :border-bottom="false">
				<u-form-item  :border-bottom="false">
					<view class="image-wrap mt30">
						<image class="img" v-if="form.photo" :src="form.photo" ></image>
						<image class="img" v-else src="http://120.24.56.30:9000/system/def-img.png" mode="widthFix"></image>
						<text class="upload" @click="upload">{{pageType=='edit'?'修改圈子图片':'上传圈子图片'}}</text>
					</view>
				</u-form-item>
				
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
				
				<u-form-item v-if="showAmount" :border-bottom="false">
					<view class="">收费标准</view>
					<u-input v-model="form.amount" placeholder="请输入收费标准"  border />
				</u-form-item>
			</u-form>
		</view>
		<view class="submit-btn  base-btn" @click="submit">
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
				title:'创建圈子',
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
				county:'',
				showType:false,
				typeList:[
					{label:'公开',value:1},
					{label:'邀请制',value:2},
					{label:'付费制',value:3},
				],
				showAmount:false,
				circleId:''
			};
		},
		components:{
		    "lotus-address":lotusAddress
		},
		onLoad(e) {
			this.pageType=e.type
			this.title=e.type=='edit'?'修改圈子资料':'创建圈子'
			if(e.type=='edit'){
				this.circleId=e.id
				this.getDetail()
			}
		},
		methods:{
			getDetail(){
				this.$http({url:'/goods/circle/detail/'+this.circleId}).then(res=>{
					this.form=res.data
					this.form.type=res.data.type==1?'公开':res.data.type==2?'邀请制':'付费制'
					this.showAmount=res.data.type=='付费制' || false
					this.form.region = `${res.data.province} ${res.data.city} ${res.data.county}`; 
				})
			},
            submit(){
                let that=this
				if(!this.form.photo){
					uni.showToast({
						title:'请添加图片',
						icon:'none',
					})
					return
				}
				if(!this.form.name){
					uni.showToast({
						title:'请添加圈子名称',
						icon:'none',
					})
					return
				}
				if(!this.form.description){
					uni.showToast({
						title:'请添加圈子描述',
						icon:'none',
					})
					return
				}
				if(!this.form.region){
					uni.showToast({
						title:'请选择圈子地区',
						icon:'none',
					})
					return
				}
				if(!this.form.type){
					uni.showToast({
						title:'请选择圈子类型',
						icon:'none',
					})
					return
				}
				console.log(this.form.type)
				
                let data={
                    name:this.form.name,
                    description:this.form.description,
                    province:this.province,
                    city:this.city,
					county:this.county,
                    type:this.typeList.filter((item)=>{
                            return item.label==this.form.type
                    })[0].value,
					photo:this.form.photo
                }
				
				if(this.form.type==='付费制' ){
					if(!this.form.amount){
						uni.showToast({
							title:'付费圈子请输入付费标准',
							icon:'none',
						})
						return
					}else{
						data.amount=this.form.amount
					}
				}
				let url=this.pageType=='add'?'/goods/circle/add':'/goods/circle/update'
				if(this.pageType=='edit'){
					data.id=this.circleId
				}
				console.log(data)
				that.$http({url,data,method:'post'}).then(res=>{
					uni.showToast({
						title:that.pageType=='edit'?'修改圈子成功':'添加圈子成功',
						icon:'none',
						success:()=> {
							setTimeout(()=>{
								uni.navigateBack()
							},1500)
						}
					})
					
				})
            },
            selectType(val){
                this.form.type=val[0].label
				if(val[0].label=='付费制'){
					this.showAmount=true
				}else{
					this.showAmount=false
				}
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
					if(res.province && res.city){
						this.form.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
					}
                    this.province=res.province
                    this.city=res.city
					this.county=res.town
			    }
			},
			upload(){
				uni.showLoading({
					title:'上传中'
				})
                uploadFile('/goods/circle/upload','photo').then(res=>{
					this.form.photo=res
					this.$forceUpdate()
					uni.hideLoading()
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
.page-wrap{
	padding: 30upx;
	background-image: url('http://120.24.56.30:9000/system/fb-bg1.png');
    background-repeat: no-repeat;
    background-size: 100%;
	.form-wrap{
		/deep/ .u-input{
			background-color: #fff;
		}
	}
	.image-wrap{
		width: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		justify-content: center;
		.img{
			width: 200upx;
			height: 200upx;
			border-radius: 50%;
			margin-bottom: 20upx;
		}
	}
	
	.submit-btn{
		text-align: center;
		margin-top:40upx ;
	}
}
</style>
