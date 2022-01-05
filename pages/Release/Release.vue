<template>
	<view class="page-wrap">
		<view class="select-cirlce model-wrap column" @click="showList=true">
			<text class="txt">当前选择的圈子：</text>
			<text class="circle-txt fwb" >
				{{cirlceName}} 
			</text>
			<text class="txt mt10">点击切换圈子</text>
		</view>
		<view class="type-list model-wrap row jc-sb mt30">
			<view 
				class="type-item row" 
				v-for="(item,index) in typeList" 
				:key="index"
				:class="[(activeType==item.type && 'select-item'), 's'+(index+1) ]"
				@click="selectType(item,index)"
			>
				<image class="type-img" :src="activeType==item.type? item.imgActive:item.img" mode="widthFix"></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		
        <view class="input-content model-wrap mt30" v-if="activeType==1 ||  activeType==2">
			<view class="input-title">标题</view>
			<view class="input-wrap mt20">
				<u-input class="title"  maxlength="50" border v-model="title" placeholder="请输入标题" />
			</view>
        </view>
		
		<view class="input-content model-wrap  mt30" v-if="activeType===0">
			<view class="input-title">有赏任务 <text>余额 {{amountDetail.balanceCount}}元</text> </view>
			<view class="input-wrap mt20">
				<u-input class="title"  v-model="money" placeholder="请输入悬赏金额" ></u-input>
			</view>
		</view>
		
        <template v-if="activeType==3">
            <view class="shunlujia mt30">
            	<view class="tab-wrap">
            		<view class="no_vip" v-if="!userInfo.isEffect">
            			<view class="t1">你当前还不是会员</view>
            			<view class="t2">开通会员专享 4 大会员权益</view>
            		</view>
            		<view class="tabs row mt30">
            			<view @click="target=1" class="tab" :class="target==1 && 'active' ">
            				找顺路车
            			</view>
            			<view @click="target=2" class="tab" :class="target==2 && 'active' ">
            				找顺路司机
            			</view>
            		</view>
            		
            		<view class="address-select model-wrap row jc-sb">
            			<view >
            				<view class="f32-c333">请选择</view>
            				
            				<u-input v-model="startRegion" placeholder="请选择出发地" @click="selectPick('region','start')" type="select" border />
            			</view>
            			<image src="http://120.24.56.30:9000/system/jiaohuan.png" ></image>
            			<view >
            				<view class="f32-c333">请选择</view>
            				<u-input v-model="endRegion" placeholder="请选择目的地" @click="selectPick('region','end')" type="select" border />
            			</view>
            		</view>
            	</view>
            </view>
            
            <view class="input-content model-wrap mt30" >
            	<view class="input-title">手机号码</view>
            	<view class="input-wrap mt20">
            		<u-input class="title" maxlength="11" border v-model="mobilePhone" placeholder="请输入手机号码" />
            	</view>
            </view>
            <view class="input-content model-wrap mt30">
            	<view class="input-title">日期时间</view>
            	<view class="input-wrap mt20">
            		<u-input 
                    type='select' 
                    class="title" 
                    border 
                    v-model="dateTime" 
                    placeholder="请选择出发时间" 
                    @click="selectPick('time')" />
            	</view>
            </view>
        </template>
		
        <view class="input-content model-wrap mt30">
			<view class="input-wrap ">
                <u-input class="content" maxlength="9999999999"  height="300" border type="textarea" v-model="content" />
                <!-- <template v-else>
                    <editor
                    @input="getEditorContent"
                    @ready="onEditorReady"
                    id="editor"
                    placeholder="请输入内容" v-model="content">
                    </editor>
                </template> -->
			</view>
        </view>
        
		<view class="upload model-wrap mt30">
			<view class="input-title" >上传</view>
			<htz-image-upload  
			:max="maxList"  
			v-model="fileList" 
			:mediaType="mediaType"
			@uploadSuccess="uploadSuccess" 
			@imgDelete="deletFile"
			:action="baseUrl + (mediaType=='image'?'/goods/product/upload':'/goods/product/uploadVideo ') ">
			</htz-image-upload>
		</view>
		
		<view class="base-btn mt40" @click="submit">发布</view>
		
		<u-picker :mode="pickerModel" v-model="showPicker" :params="pickParams" @confirm="confirmTimePicker"></u-picker>
		<u-select v-model="showList" :list="circleList" @confirm="confirm"></u-select>
	</view>
</template>
<script>
	import {baseUrl} from '@/utils/util'
	import { mapState } from 'vuex'
	import htzImageUpload from '@/components/htz-image-upload/htz-image-upload.vue'
	export default {
		components: {
		    htzImageUpload,
		},
		data() {
			return {
				baseUrl:baseUrl,
				showList:false,
				cirlceName:'当前的圈子',
				list:[],
				activeType:1,
                editorCtx:'',
				typeList:[
					{
						name:'文章',
						value:'article',
						type:1,
						img:'http://120.24.56.30:9000/system/fb_icon1.png',
						imgActive:'http://120.24.56.30:9000/system/fb_icon1_a.png'
					},
					{
						name:'视频',
						value:'video',
						type:2,
						img:'http://120.24.56.30:9000/system/fb_icon2.png',
						imgActive:'http://120.24.56.30:9000/system/fb_icon2_a.png'
					},
					{
						name:'提问',
						value:'question',
						type:0,
						img:'http://120.24.56.30:9000/system/fb_icon3.png',
						imgActive:'http://120.24.56.30:9000/system/fb_icon3_a.png'
					},
					{
						name:'顺路驾',
						value:'wind',
						type:3,
						img:'http://120.24.56.30:9000/system/fb_icon4.png',
						imgActive:'http://120.24.56.30:9000/system/fb_icon4_a.png'
					},
				],
				title:'',
				mobilePhone:'',
				mediaType:'image',
				maxList:99,
				content:'',
				money:'',
				circleId:'',
				target:1,
				fileList:[],
				circleList:[],
				startRegion:'',
				endRegion:'',
				regionType:'',
				showPicker:false,
				pickParams:{
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false
				},
				dateTime:'',
				pickerModel:'time',
				userInfo:uni.getStorageSync('userInfo'),
			};
		},
		computed:{
			...mapState(['amountDetail'])
		},
		onLoad(e) {
			if(e.circleId){
				this.circleId=e.circleId
			}
            if(e.type){
                this.activeType=e.type
            }
			this.userInfo=uni.getStorageSync('userInfo')
		},
        onShow() {
            this.$store.dispatch('amountDetail')
            this.getCircleList()
        },
		methods:{
			// 获取圈子列表
			getCircleList(){
                let data={
                    size:999,
                    current:1
                }
				this.$http({url:'/goods/circle/myCircle',data}).then(res=>{
					if(res.data.records.length<=0){
						uni.showToast({
							title:'您还未加入任何圈子，请先加入圈子',
							icon:'none'
						})
						setTimeout(()=>{
							uni.navigateBack()
						},1500)
						return
					}
					res.data.records.forEach(item=>{
						item.label=item.circleName
						item.value=item.circleId
					})
					this.circleList=res.data.records
					if(this.circleId){
						this.cirlceName=res.data.records.filter((item)=>{
							return item.circleId==this.circleId
						})[0].circleName
					}else{
						this.cirlceName=res.data.records[0].circleName
						this.circleId=res.data.records[0].circleId
					}
				})
			},
			// 确定
			submit(){
                console.log(this.content)
				if(!this.content){
					uni.showToast({
						title:'请输入内容',
						icon:'none'
					})
					return
				}
				if((this.activeType===1 || this.activeType===2) && !this.title ){
					uni.showToast({
						title:'请输入标题',
						icon:'none'
					})
					return
				}
				if(this.money && Number(this.money)>this.amountDetail.balanceCount){
					uni.showModal({
						title: '提示',
						content: '当前余额不足，请充值',
						success: res => {
							if(res.confirm){
								uni.navigateTo({
									url:'/pages/ExchangePage/Recharge/Recharge'
								})
							}
						},
						fail: () => {},
					})
					return
				}
				if(this.activeType===3){
                    let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
					if(!this.startRegion || !this.endRegion || !this.dateTime || !this.mobilePhone){
						uni.showToast({
							title:'请补充完整信息',
							icon:'none'
						})
						return
					}
                    if(!myreg.test(this.mobilePhone)){
                        uni.showToast({
                        	title:'请输入正确的手机号码',
                        	icon:'none'
                        })
                        return
                    }
				}
				let data={
					circleId:this.circleId,
					title:this.title,
					content:this.content,
					type:this.activeType+1,
					amount:this.money,
					photos:this.fileList.join(',')
				}
				if(this.activeType==3){
					data.origin=this.startRegion;
					data.destination=this.endRegion;
					data.mobilePhone=this.mobilePhone;
					data.dateTime=this.dateTime
					data.target=this.target
				}
				if(this.mediaType=='video' && !data.photos){
					uni.showToast({
						title:'请选择视频',
						icon:'none'
					})
					return
				}
				uni.showLoading({
					title:'加载中'
				})
                let url=this.activeType==3?'/goods/product/release':'/goods/product/add'
				this.$http({url,data,method:'post'}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title:'发布成功',
						icon:'none'
					})
					
					setTimeout(()=>{
						uni.navigateBack()
					},1500)
				})
				
			},
			
			// 选择圈子
			confirm(res){
				this.cirlceName=res[0].label
				this.circleId=res[0].value
			},
			// 上成功
			uploadSuccess(res){
				var _res = JSON.parse(res.data);
				if (_res.code == 200) {
				    this.fileList.push(_res.data);
				}
			},
            // 富文本初始化
            onEditorReady() {
                uni.createSelectorQuery().select('#editor').context((res) => {
                    this.editorCtx = res.context
                }).exec()
            },
			getEditorContent(e) {
			    this.content = e.detail.html;
			    this.contentText = e.detail.text;
			},
            
			// 选择下拉框
			selectPick(type,val){
				if(type=='time'){
					this.pickParams={
						year: true,
						month: true,
						day: true,
						hour: true,
						minute: true,
						second: false
					}
					this.pickerModel='time'
				}else{
					this.pickParams={
						province: true,
						city: true,
						area: true
					}
					this.pickerModel='region'
					this.regionType=val
				}
				this.showPicker=true
			},
			// 确认下拉框
			confirmTimePicker(res){
				if(this.pickerModel=='time'){
					this.dateTime=res.year+'-'+res.month+'-'+res.day+'  '+res.hour+':'+res.minute
				}else{
					
					if(this.regionType=='start'){
						this.startRegion= (res.city.label=='市辖区'?'': res.city.label ) +res.area.label
					}else{
						this.endRegion=(res.city.label=='市辖区'?'':res.city.label ) +res.area.label
					}
				}
			},
			// 删除文件
			deletFile(url,res){},
			// 选择发布类型
			selectType(item,index){
				this.activeType=item.type
				if(item.type!==2){
					this.mediaType='image'
					this.maxList=99
				}else{
					this.mediaType='video'
					this.maxList=1
				}
				
				this.fileList=[]
				this.content=''
				this.title=''
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-wrap{
	min-height: 100vh;
	padding:30upx;
	.select-cirlce{
		background: linear-gradient(359deg, #DFAD76 0%, #FFECD8 100%);
		.txt{
			font-size: 28upx;
			color: #412815;
		}
		.circle-txt{
			display: inline-block;
			padding: 10upx 0upx;
			color:#412815;
			font-size: 48upx;
		}
	}
	.type-list{
		padding: 30upx;
		.type-item{
			padding: 30upx 0;
			border-radius: 16upx;
			width: 140upx;
			text-align: center;
			font-size: 28upx;
			color: #0D1722;
			justify-content: center;
			.type-img{
				width: 32upx;
				margin-right: 10upx;
			}
		}
		.s1{
			background-color: rgba(0, 145, 255, 0.2);
		}
		.s2{
			background-color: rgba(109, 212, 0, 0.2);
		}
		.s3{
			background-color:rgba(247, 181, 0, 0.2) ;
		}
		.s4{
			background-color: rgba(98, 54, 255, 0.2);
		}
		.select-item{color: #fff;}
		.select-item.s1{
			background-color: #0091FF;
		}
		.select-item.s2{
			background-color: #6DD400;
		}
		.select-item.s3{
			background-color: #F7B500;
		}
		.select-item.s4{
			background-color:#6236FF;
		}
	}
    .input-wrap {
        background-color: #fff;
        border-radius: 16upx;
        padding: 4upx 0;
		.fh{
			font-size: 40upx;
			font-weight: bold;
		}
    }
	.foot-btn{
		width: 100%;
		.submit{
			width: 25%;
			text-align: center;
			padding: 10upx 30upx;
			background-color: $default-color;
			border-radius: 32upx;
			float: right;
			color: #fff;
		}
	}
    .title{
		background-color: #fff;
		border-radius: 16upx;
	}
	.content{
		background-color: #fff;
		min-height: 600upx;
		border-radius: 16upx;
	}
	.shunlujia{
		.tab-wrap{
			.no_vip{
				background-image: url('http://120.24.56.30:9000/system/qz-bg2.png');
				background-size: cover;
				width: 100%;
				height: 170upx;
				color: #412815;
				padding: 30upx;
				border-radius: 12upx;
				.t1{
					font-size: 28upx;
				}
				.t2{
					margin-top: 10upx;
					font-size: 48upx;
				}
			}
			.tabs{
				background-color: #F7D5B0;
				width: 90%;
				color: #412815;
				justify-content: space-around;
				font-size: 32upx;
				margin: auto;
				margin-top: 30upx;
				border-top-left-radius: 12upx;
				border-top-right-radius: 12upx;
				padding: 26upx 0;
				.tab.active{
					position: relative;
					&::after{
						content: "";
						display: block;
						position: absolute;
						bottom: -10upx;
						left: 50%;
						transform: translateX(-50%);
						height: 4upx;
						background-color: #412815;
						width: 60upx;
						
					}
				}
			}
			.address-select{
				.f32-c333{
					text-align: center;
					margin-bottom: 14upx;
				}
				image{
					width: 56upx;
					height: 40upx;
					display: blcok;
					margin: 50upx 30upx 2upx 30upx;
				}
				/deep/ .u-input{
					.u-input__input{
						font-size: 24upx;
					}
				}
			}
		}
	}
}
</style>
