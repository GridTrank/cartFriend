(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/MyCenter/CollectionList"],{

/***/ 100:
/*!*******************************************************************************!*\
  !*** D:/work/cartFriend/main.js?{"page":"pages%2FMyCenter%2FCollectionList"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _CollectionList = _interopRequireDefault(__webpack_require__(/*! ./pages/MyCenter/CollectionList.vue */ 101));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_CollectionList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 101:
/*!************************************************************!*\
  !*** D:/work/cartFriend/pages/MyCenter/CollectionList.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionList_vue_vue_type_template_id_1c70c3a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionList.vue?vue&type=template&id=1c70c3a1&scoped=true& */ 102);
/* harmony import */ var _CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollectionList.vue?vue&type=script&lang=js& */ 104);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _CollectionList_vue_vue_type_style_index_0_id_1c70c3a1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollectionList.vue?vue&type=style&index=0&id=1c70c3a1&scoped=true&lang=scss& */ 106);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollectionList_vue_vue_type_template_id_1c70c3a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CollectionList_vue_vue_type_template_id_1c70c3a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c70c3a1",
  null,
  false,
  _CollectionList_vue_vue_type_template_id_1c70c3a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/MyCenter/CollectionList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 102:
/*!*******************************************************************************************************!*\
  !*** D:/work/cartFriend/pages/MyCenter/CollectionList.vue?vue&type=template&id=1c70c3a1&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_template_id_1c70c3a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CollectionList.vue?vue&type=template&id=1c70c3a1&scoped=true& */ 103);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_template_id_1c70c3a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_template_id_1c70c3a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_template_id_1c70c3a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_template_id_1c70c3a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 103:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/cartFriend/pages/MyCenter/CollectionList.vue?vue&type=template&id=1c70c3a1&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    noData: function() {
      return __webpack_require__.e(/*! import() | components/no-data/no-data */ "components/no-data/no-data").then(__webpack_require__.bind(null, /*! @/components/no-data/no-data.vue */ 334))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l1 =
    _vm.dataList.length > 0 && _vm.pageType !== "recommend"
      ? _vm.__map(_vm.dataList, function(item, index) {
          var $orig = _vm.__get_orig(item)

          var l0 =
            (item.productType !== 3 &&
              item.productType !== 4 &&
              item.productPhotos) ||
            (_vm.pageType == "question" && item.photos)
              ? (item.productPhotos || item.photos).split(",")
              : null
          return {
            $orig: $orig,
            l0: l0
          }
        })
      : null
  var l3 =
    _vm.dataList.length > 0 && !(_vm.pageType !== "recommend")
      ? _vm.__map(_vm.dataList, function(item, index) {
          var $orig = _vm.__get_orig(item)

          var l2 = item.photos ? item.photos.split(",") : null
          return {
            $orig: $orig,
            l2: l2
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1,
        l3: l3
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 104:
/*!*************************************************************************************!*\
  !*** D:/work/cartFriend/pages/MyCenter/CollectionList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CollectionList.vue?vue&type=script&lang=js& */ 105);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 105:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/cartFriend/pages/MyCenter/CollectionList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


















































































































var _getData = __webpack_require__(/*! @/common/mixin/getData.js */ 81);var invitationList = function invitationList() {__webpack_require__.e(/*! require.ensure | components/invitation-list/invitation-list */ "components/invitation-list/invitation-list").then((function () {return resolve(__webpack_require__(/*! @/components/invitation-list/invitation-list */ 260));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
{
  components: { invitationList: invitationList },
  mixins: [_getData.getData],
  data: function data() {
    return {
      item: [],
      pageType: '' };


  },
  onLoad: function onLoad(e) {
    this.pageType = e.pageType;
    uni.setNavigationBarTitle({
      title: e.pageType == 'collect' ? '我的收藏' :
      e.pageType == 'question' ? '我的提问' :
      e.pageType == 'recommend' ? '推荐问题' :
      '我的浏览' });

    if (this.pageType == 'collect') {
      this.url = '/goods/product/myCollect';
    } else if (this.pageType == 'question') {
      this.url = '/goods/product/myQuestion';
    } else if (this.pageType == 'recommend') {
      this.url = '/goods/product/recommendMore';
    } else {
      this.url = '/goods/product/myView';
    }
    this.getData();
  },

  methods: {
    handleReward: function handleReward(item, index) {var _this = this;
      var url = "",data = {},method = '';
      if (this.pageType == 'collect') {
        url = '/goods/product/collect';
        data = {
          productId: item.productId,
          isCollect: 0 };

        method = 'POST';
      } else if (this.pageType == 'browse') {
        url = '/goods/product/deleteView/' + item.id;
        data = {};
      }
      uni.showModal({
        title: '提示',
        content: this.pageType == 'collect' ? '确定取消该收藏吗？' : this.pageType == 'browse' ? '确定删除该记录吗？' : '',
        success: function success(res) {
          if (res.confirm) {
            _this.$http({ url: url, data: data, method: method }).then(function (res) {
              uni.showToast({
                title: res.msg,
                icon: 'none' });

              setTimeout(function () {
                _this.dataList.splice(index, 1);
              }, 1500);

            });
          }
        },
        fail: function fail() {

        } });

    },
    // 删除我的提问
    delQuestion: function delQuestion(item, index) {var _this2 = this;
      uni.showModal({
        title: '提示',
        content: '确定删除该数据吗？',
        success: function success(res) {
          if (res.confirm) {
            _this2.$http({ url: '/goods/product/delete/' + item.id }).then(function (res) {
              uni.showToast({
                title: res.msg,
                icon: 'none' });

              if (res.code == 200) {
                _this2.dataList.splice(index, 1);
              }
            });
          }
        },
        fail: function fail() {

        } });

    },
    toDetail: function toDetail(item) {
      // if(this.pageType!=='collect' ){
      // 	return
      // }
      uni.navigateTo({
        url: '/pages/InvitationDetail/InvitationDetail?productId=' + (item.productId || item.id) });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 106:
/*!**********************************************************************************************************************!*\
  !*** D:/work/cartFriend/pages/MyCenter/CollectionList.vue?vue&type=style&index=0&id=1c70c3a1&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_style_index_0_id_1c70c3a1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CollectionList.vue?vue&type=style&index=0&id=1c70c3a1&scoped=true&lang=scss& */ 107);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_style_index_0_id_1c70c3a1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_style_index_0_id_1c70c3a1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_style_index_0_id_1c70c3a1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_style_index_0_id_1c70c3a1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CollectionList_vue_vue_type_style_index_0_id_1c70c3a1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 107:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/cartFriend/pages/MyCenter/CollectionList.vue?vue&type=style&index=0&id=1c70c3a1&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[100,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovd29yay9jYXJ0RnJpZW5kL3BhZ2VzL015Q2VudGVyL0NvbGxlY3Rpb25MaXN0LnZ1ZT85YzkxIiwid2VicGFjazovLy9EOi93b3JrL2NhcnRGcmllbmQvcGFnZXMvTXlDZW50ZXIvQ29sbGVjdGlvbkxpc3QudnVlP2U4OTQiLCJ3ZWJwYWNrOi8vL0Q6L3dvcmsvY2FydEZyaWVuZC9wYWdlcy9NeUNlbnRlci9Db2xsZWN0aW9uTGlzdC52dWU/M2Q2NCIsIndlYnBhY2s6Ly8vRDovd29yay9jYXJ0RnJpZW5kL3BhZ2VzL015Q2VudGVyL0NvbGxlY3Rpb25MaXN0LnZ1ZT80NGZlIiwidW5pLWFwcDovLy9wYWdlcy9NeUNlbnRlci9Db2xsZWN0aW9uTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L3dvcmsvY2FydEZyaWVuZC9wYWdlcy9NeUNlbnRlci9Db2xsZWN0aW9uTGlzdC52dWU/YzBmOSIsIndlYnBhY2s6Ly8vRDovd29yay9jYXJ0RnJpZW5kL3BhZ2VzL015Q2VudGVyL0NvbGxlY3Rpb25MaXN0LnZ1ZT8wMTQwIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3NEQUFBO0FBQ0E7QUFDQSxrSCw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyx1QkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUNzQzs7O0FBR25HO0FBQ2tMO0FBQ2xMLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0xBRU47QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQUE7QUFBc3JCLENBQWdCLDBxQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNtSDFzQix3RTtBQUNBO0FBQ0EsZ0RBREE7QUFFQSw0QkFGQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBLGNBREE7QUFFQSxrQkFGQTs7O0FBS0EsR0FUQTtBQVVBLFFBVkEsa0JBVUEsQ0FWQSxFQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBSkE7O0FBTUE7QUFDQTtBQUNBLEtBRkEsTUFFQTtBQUNBO0FBQ0EsS0FGQSxNQUVBO0FBQ0E7QUFDQSxLQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTVCQTs7QUE4QkE7QUFDQSxnQkFEQSx3QkFDQSxJQURBLEVBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLHNCQUZBOztBQUlBO0FBQ0EsT0FQQSxNQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLHdHQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDRCQUZBOztBQUlBO0FBQ0E7QUFDQSxlQUZBLEVBRUEsSUFGQTs7QUFJQSxhQVRBO0FBVUE7QUFDQSxTQWhCQTtBQWlCQTs7QUFFQSxTQW5CQTs7QUFxQkEsS0FuQ0E7QUFvQ0E7QUFDQSxlQXJDQSx1QkFxQ0EsSUFyQ0EsRUFxQ0EsS0FyQ0EsRUFxQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsNEJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsNEJBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsYUFSQTtBQVNBO0FBQ0EsU0FmQTtBQWdCQTs7QUFFQSxTQWxCQTs7QUFvQkEsS0ExREE7QUEyREEsWUEzREEsb0JBMkRBLElBM0RBLEVBMkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FEQTs7QUFHQSxLQWxFQSxFQTlCQSxFOzs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBQTtBQUFBO0FBQXF6QyxDQUFnQix5dENBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F6MEM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9NeUNlbnRlci9Db2xsZWN0aW9uTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJzt3eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL015Q2VudGVyL0NvbGxlY3Rpb25MaXN0LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL0NvbGxlY3Rpb25MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzcwYzNhMSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbGxlY3Rpb25MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29sbGVjdGlvbkxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NvbGxlY3Rpb25MaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFjNzBjM2ExJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWM3MGMzYTFcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvTXlDZW50ZXIvQ29sbGVjdGlvbkxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9Db2xsZWN0aW9uTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM3MGMzYTEmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICBub0RhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjb21wb25lbnRzL25vLWRhdGEvbm8tZGF0YVwiICovIFwiQC9jb21wb25lbnRzL25vLWRhdGEvbm8tZGF0YS52dWVcIlxuICAgICAgKVxuICAgIH1cbiAgfVxufSBjYXRjaCAoZSkge1xuICBpZiAoXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCJDYW5ub3QgZmluZCBtb2R1bGVcIikgIT09IC0xICYmXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCIudnVlXCIpICE9PSAtMVxuICApIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICBjb25zb2xlLmVycm9yKFwiMS4g5o6S5p+l57uE5Lu25ZCN56ew5ou85YaZ5piv5ZCm5q2j56GuXCIpXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMi4g5o6S5p+l57uE5Lu25piv5ZCm56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9jb2xsb2NhdGlvbi9wYWdlcz9pZD1lYXN5Y29tXCJcbiAgICApXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMy4g6Iul57uE5Lu25LiN56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM6ZyA5omL5Yqo5byV5YWl77yM5bm25ZyoIGNvbXBvbmVudHMg5Lit5rOo5YaM6K+l57uE5Lu2XCJcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIGwxID1cbiAgICBfdm0uZGF0YUxpc3QubGVuZ3RoID4gMCAmJiBfdm0ucGFnZVR5cGUgIT09IFwicmVjb21tZW5kXCJcbiAgICAgID8gX3ZtLl9fbWFwKF92bS5kYXRhTGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuXG4gICAgICAgICAgdmFyIGwwID1cbiAgICAgICAgICAgIChpdGVtLnByb2R1Y3RUeXBlICE9PSAzICYmXG4gICAgICAgICAgICAgIGl0ZW0ucHJvZHVjdFR5cGUgIT09IDQgJiZcbiAgICAgICAgICAgICAgaXRlbS5wcm9kdWN0UGhvdG9zKSB8fFxuICAgICAgICAgICAgKF92bS5wYWdlVHlwZSA9PSBcInF1ZXN0aW9uXCIgJiYgaXRlbS5waG90b3MpXG4gICAgICAgICAgICAgID8gKGl0ZW0ucHJvZHVjdFBob3RvcyB8fCBpdGVtLnBob3Rvcykuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkb3JpZzogJG9yaWcsXG4gICAgICAgICAgICBsMDogbDBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICA6IG51bGxcbiAgdmFyIGwzID1cbiAgICBfdm0uZGF0YUxpc3QubGVuZ3RoID4gMCAmJiAhKF92bS5wYWdlVHlwZSAhPT0gXCJyZWNvbW1lbmRcIilcbiAgICAgID8gX3ZtLl9fbWFwKF92bS5kYXRhTGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuXG4gICAgICAgICAgdmFyIGwyID0gaXRlbS5waG90b3MgPyBpdGVtLnBob3Rvcy5zcGxpdChcIixcIikgOiBudWxsXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgICAgICAgIGwyOiBsMlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIDogbnVsbFxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIGwxOiBsMSxcbiAgICAgICAgbDM6IGwzXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQ29sbGVjdGlvbkxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9Db2xsZWN0aW9uTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJwYWdlLXdyYXBcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwibGlzdC13cmFwIG1vZGVsLXdyYXBcIiB2LWlmPVwiZGF0YUxpc3QubGVuZ3RoPjBcIj5cclxuXHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJwYWdlVHlwZSE9PSdyZWNvbW1lbmQnXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbmZvIFwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGRhdGFMaXN0XCIgOmtleT1cImluZGV4XCIgQGNsaWNrPVwidG9EZXRhaWwoaXRlbSlcIj5cclxuXHRcdFx0XHRcdDwhLS0g5pS26JePIOa1j+iniCDmiJHnmoTmj5Dpl64tLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5mby10b3BcIiB2LWlmPVwicGFnZVR5cGUhPT0ncXVlc3Rpb24nXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5mby11c2VyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidXNlci1hdmF0YXJcIiA6c3JjPVwiaXRlbS5tZW1iZXJQaG90b1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuaWNrLW5hbWVcIj57e2l0ZW0ubWVtYmVyTmlja05hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBAY2xpY2suc3RvcD1cImhhbmRsZVJld2FyZChpdGVtLGluZGV4KVwiIGNsYXNzPVwicmV3YXJkXCIgdi1pZj1cInBhZ2VUeXBlPT0nY29sbGVjdCcgfHwgcGFnZVR5cGU9PSdicm93c2UnXCI+XHJcblx0XHRcdFx0XHRcdFx0e3twYWdlVHlwZT09J2NvbGxlY3QnPyflj5bmtojmlLbol48nOnBhZ2VUeXBlPT0nYnJvd3NlJz8n5Yig6ZmkJzonJ319XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInNodW5sdWppYVwiIHYtaWY9XCJpdGVtLnByb2R1Y3RUeXBlPT00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHQ8dmlldyBjbGFzcz1cInRvcCByb3cgamMtc2JcIj5cclxuICAgICAgICAgICAgICAgICAgICBcdFx0PHRleHQgY2xhc3M9XCJsZWZ0XCI+e3tpdGVtLnByb2R1Y3RUYXJnZXQ9PTE/J+aJvumhuui3r+i9pic6J+aJvumhuui3r+WPuOacuid9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICBcdFx0PHRleHQgY2xhc3M9XCJyaWdodFwiPuWHuuWPkeaXtumXtCB7e2l0ZW0ucHJvZHVjdERhdGVUaW1lfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHQ8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgXHQ8dmlldyBjbGFzcz1cImFkZHJlc3Mgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHRcdDx0ZXh0Pnt7aXRlbS5wcm9kdWN0T3JpZ2lufX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHRcdDxpbWFnZSBzcmM9XCJodHRwOi8vMTIwLjI0LjU2LjMwOjkwMDAvc3lzdGVtL3Nsai1pY29uMS5wbmdcIiA+PC9pbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICBcdFx0PHRleHQ+e3tpdGVtLnByb2R1Y3REZXN0aW5hdGlvbn19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIFx0PC92aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5mby1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbmZvLXRpdGxlIHR3b0hpZGRlblwiICB2LWlmPVwicGFnZVR5cGUhPT0ncXVlc3Rpb24nICYmIGl0ZW0ucHJvZHVjdFRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLnByb2R1Y3RUaXRsZX19XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJub3RlLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5vdGUgdGhyZWVIaWRkZW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdHt7IGl0ZW0ucHJvZHVjdENvbnRlbnQgfHwgaXRlbS5jb250ZW50fX1cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwiKGl0ZW0ucHJvZHVjdFR5cGUhPT0zICYmIGl0ZW0ucHJvZHVjdFR5cGUhPT00ICYmIGl0ZW0ucHJvZHVjdFBob3RvcykgfHwgKHBhZ2VUeXBlPT0ncXVlc3Rpb24nICYmIGl0ZW0ucGhvdG9zKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC14PVwidHJ1ZVwiIGNsYXNzPVwiaW1nLXdyYXAgbXQyMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHYtZm9yPVwiKGltZyxpKSBpbiAoaXRlbS5wcm9kdWN0UGhvdG9zIHx8IGl0ZW0ucGhvdG9zKS5zcGxpdCgnLCcpIFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDprZXk9XCJpXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJub3RlLWltZ1wiICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cImltZ1wiID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXcgPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJpdGVtLnByb2R1Y3RUeXBlPT0zICYmIGl0ZW0ucHJvZHVjdFBob3Rvc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZGVvIFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJ2aWRlb1wiXHJcblx0XHRcdFx0XHRcdFx0XHQ6c2hvdy1jZW50ZXItcGxheS1idG49XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6Y29udHJvbHM9J2ZhbHNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJpdGVtLnByb2R1Y3RQaG90b3NcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZGVvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5mby1ib3R0b21cIj5cclxuXHRcdFx0XHRcdFx0PHRleHQ+e3sgcGFnZVR5cGU9PSdjb2xsZWN0JyB8fCAgcGFnZVR5cGU9PSdicm93c2UnPyBpdGVtLnByb2R1Y3RBZ3JlZUNvdW50OiBpdGVtLmFncmVlQ291bnR9fei1nuWQjDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQ+e3sgcGFnZVR5cGU9PSdjb2xsZWN0JyB8fCAgcGFnZVR5cGU9PSdicm93c2UnPyBpdGVtLnByb2R1Y3RWaWV3Q291bnQgOiBpdGVtLnZpZXdDb3VudH195rWP6KeI6YePPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD57eyBwYWdlVHlwZT09J2NvbGxlY3QnIHx8ICBwYWdlVHlwZT09J2Jyb3dzZSc/IGl0ZW0ucHJvZHVjdENvbW1lbnRDb3VudCA6IGl0ZW0uY29tbWVudENvdW50IH196K+E6K66PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBAY2xpY2suc3RvcD1cImRlbFF1ZXN0aW9uKGl0ZW0saW5kZXgpXCIgY2xhc3M9XCJkZWxcIiB2LWlmPVwicGFnZVR5cGU9PSdxdWVzdGlvbidcIj7liKDpmaQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXcgPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0XHJcblx0XHRcdDwhLS0g5o6o6I2Q6Zeu6aKYIC0tPlxyXG5cdFx0XHQ8dGVtcGxhdGUgdi1lbHNlPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5mbyBcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBkYXRhTGlzdFwiIDprZXk9XCJpbmRleFwiID5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5mby10b3BcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbmZvLXVzZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1c2VyLWF2YXRhclwiIDpzcmM9XCJpdGVtLnBob3Rvc1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuaWNrLW5hbWVcIj57e2l0ZW0ubWVtYmVyTmlja05hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBAY2xpY2s9XCJ0b0RldGFpbChpdGVtKVwiIGNsYXNzPVwiIGJnLWRlZmF1bHQxXCI+XHJcblx0XHRcdFx0XHRcdFx05Y675Zue562UXHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5mby1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbmZvLXRpdGxlIHR3b0hpZGRlblwiID57e2l0ZW0udGl0bGV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJub3RlLWluZm9cIiA+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJub3RlIHRocmVlSGlkZGVuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7eyBpdGVtLmNvbnRlbnR9fVxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8c2Nyb2xsLXZpZXcgdi1pZj1cIml0ZW0ucGhvdG9zXCIgc2Nyb2xsLXg9XCJ0cnVlXCIgY2xhc3M9XCJpbWctd3JhcCBtdDIwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgXHJcblx0XHRcdFx0XHRcdFx0XHR2LWZvcj1cIihpbWcsaSkgaW4gaXRlbS5waG90b3Muc3BsaXQoJywnKSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwibm90ZS1pbWdcIiAgXHJcblx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwiaW1nXCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8L3Njcm9sbC12aWV3ID5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbmZvLWJvdHRvbVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD57e2l0ZW0uYWdyZWVDb3VudH196LWe5ZCMPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD57eyBpdGVtLnZpZXdDb3VudH195rWP6KeI6YePPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD57e2l0ZW0ucmVwbHlDb3VudH195Zue562UPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdDwvdmlldz5cclxuICAgICAgICA8dmlldyB2LWVsc2U+XHJcbiAgICAgICAgICAgIDxuby1kYXRhPjwvbm8tZGF0YT5cclxuICAgICAgICA8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgaW52aXRhdGlvbkxpc3QgZnJvbSAnQC9jb21wb25lbnRzL2ludml0YXRpb24tbGlzdC9pbnZpdGF0aW9uLWxpc3QnXHJcblx0aW1wb3J0IHtnZXREYXRhfSBmcm9tICdAL2NvbW1vbi9taXhpbi9nZXREYXRhLmpzJ1xyXG5cdGV4cG9ydCBkZWZhdWx0e1xyXG5cdFx0Y29tcG9uZW50czp7aW52aXRhdGlvbkxpc3R9LFxyXG5cdFx0bWl4aW5zOltnZXREYXRhXSxcclxuXHRcdGRhdGEoKXtcclxuXHRcdFx0cmV0dXJue1xyXG5cdFx0XHRcdGl0ZW06W10sXHJcblx0XHRcdFx0cGFnZVR5cGU6JycsXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoZSkge1xyXG5cdFx0XHR0aGlzLnBhZ2VUeXBlPWUucGFnZVR5cGVcclxuXHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcblx0XHRcdOOAgOOAgHRpdGxlOmUucGFnZVR5cGU9PSdjb2xsZWN0Jz8n5oiR55qE5pS26JePJzpcclxuXHRcdFx0XHRcdGUucGFnZVR5cGU9PSdxdWVzdGlvbic/J+aIkeeahOaPkOmXric6XHJcblx0XHRcdFx0XHRlLnBhZ2VUeXBlPT0ncmVjb21tZW5kJz8n5o6o6I2Q6Zeu6aKYJzpcclxuXHRcdFx0XHRcdCfmiJHnmoTmtY/op4gnXHJcblx0XHRcdH0pXHJcblx0XHRcdGlmKHRoaXMucGFnZVR5cGU9PSdjb2xsZWN0Jyl7XHJcblx0XHRcdFx0dGhpcy51cmw9Jy9nb29kcy9wcm9kdWN0L215Q29sbGVjdCdcclxuXHRcdFx0fWVsc2UgaWYodGhpcy5wYWdlVHlwZT09J3F1ZXN0aW9uJyl7XHJcblx0XHRcdFx0dGhpcy51cmw9Jy9nb29kcy9wcm9kdWN0L215UXVlc3Rpb24nXHJcblx0XHRcdH1lbHNlIGlmKHRoaXMucGFnZVR5cGU9PSdyZWNvbW1lbmQnKXtcclxuXHRcdFx0XHR0aGlzLnVybD0nL2dvb2RzL3Byb2R1Y3QvcmVjb21tZW5kTW9yZSdcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy51cmw9Jy9nb29kcy9wcm9kdWN0L215VmlldydcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICB0aGlzLmdldERhdGEoKVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdGhhbmRsZVJld2FyZChpdGVtLGluZGV4KXtcclxuXHRcdFx0XHRsZXQgdXJsPVwiXCIsIGRhdGE9e30sbWV0aG9kPScnXHJcblx0XHRcdFx0aWYodGhpcy5wYWdlVHlwZT09J2NvbGxlY3QnKXtcclxuXHRcdFx0XHRcdHVybD0nL2dvb2RzL3Byb2R1Y3QvY29sbGVjdCdcclxuXHRcdFx0XHRcdGRhdGE9e1xyXG5cdFx0XHRcdFx0XHRwcm9kdWN0SWQ6aXRlbS5wcm9kdWN0SWQsXHJcblx0XHRcdFx0XHRcdGlzQ29sbGVjdDowXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRtZXRob2Q9J1BPU1QnXHJcblx0XHRcdFx0fWVsc2UgaWYodGhpcy5wYWdlVHlwZT09J2Jyb3dzZScpe1xyXG5cdFx0XHRcdFx0dXJsPScvZ29vZHMvcHJvZHVjdC9kZWxldGVWaWV3LycraXRlbS5pZFxyXG5cdFx0XHRcdFx0ZGF0YT17fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IHRoaXMucGFnZVR5cGU9PSdjb2xsZWN0Jz8n56Gu5a6a5Y+W5raI6K+l5pS26JeP5ZCX77yfJzp0aGlzLnBhZ2VUeXBlPT0nYnJvd3NlJz8n56Gu5a6a5Yig6Zmk6K+l6K6w5b2V5ZCX77yfJzonJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKHJlcy5jb25maXJtKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRodHRwKHt1cmwsZGF0YSxtZXRob2R9KS50aGVuKHJlcz0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOnJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGFMaXN0LnNwbGljZShpbmRleCwxKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSwxNTAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDliKDpmaTmiJHnmoTmj5Dpl65cclxuXHRcdFx0ZGVsUXVlc3Rpb24oaXRlbSxpbmRleCl7XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRjb250ZW50Oifnoa7lrprliKDpmaTor6XmlbDmja7lkJfvvJ8nLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYocmVzLmNvbmZpcm0pe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJGh0dHAoe3VybDonL2dvb2RzL3Byb2R1Y3QvZGVsZXRlLycraXRlbS5pZH0pLnRoZW4ocmVzPT57XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6cmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRpZihyZXMuY29kZT09MjAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhTGlzdC5zcGxpY2UoaW5kZXgsMSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvRGV0YWlsKGl0ZW0pe1xyXG5cdFx0XHRcdC8vIGlmKHRoaXMucGFnZVR5cGUhPT0nY29sbGVjdCcgKXtcclxuXHRcdFx0XHQvLyBcdHJldHVyblxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6Jy9wYWdlcy9JbnZpdGF0aW9uRGV0YWlsL0ludml0YXRpb25EZXRhaWw/cHJvZHVjdElkPScrIChpdGVtLnByb2R1Y3RJZCB8fCBpdGVtLmlkKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuXHQucGFnZS13cmFwe1xyXG5cdFx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0XHRwYWRkaW5nOiAzMHVweDtcclxuXHR9XHJcblx0Lmxpc3Qtd3JhcHtcclxuXHRcdC5pbmZve1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0XHRwYWRkaW5nOiAzMHVweCAwO1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxuXHRcdFx0JjpsYXN0LWNoaWxke1xyXG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0fVxyXG5cdFx0XHQuaW5mby10b3B7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHVweDtcclxuXHRcdFx0XHQuaW5mby11c2Vye1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHQudXNlci1hdmF0YXJ7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA4MHVweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHVweDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDIwdXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICAuc2h1bmx1amlhe1xyXG4gICAgICAgICAgICBcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovLzEyMC4yNC41Ni4zMDo5MDAwL3N5c3RlbS9zbGotYmcxLnBuZycpO1xyXG4gICAgICAgICAgICBcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIFx0aGVpZ2h0OiAxNzB1cHg7XHJcbiAgICAgICAgICAgIFx0d2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIFx0cGFkZGluZzogMzB1cHg7XHJcbiAgICAgICAgICAgIFx0LnRvcHtcclxuICAgICAgICAgICAgXHRcdC5sZWZ0e1xyXG4gICAgICAgICAgICBcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3RDQxO1xyXG4gICAgICAgICAgICBcdFx0XHRwYWRkaW5nOiA0dXB4IDEydXB4O1xyXG4gICAgICAgICAgICBcdFx0XHRib3JkZXItcmFkaXVzOiAyMHVweDtcclxuICAgICAgICAgICAgXHRcdFx0Zm9udC1zaXplOiAyNHVweDtcclxuICAgICAgICAgICAgXHRcdFx0Y29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIFx0XHR9XHJcbiAgICAgICAgICAgIFx0XHQucmlnaHR7XHJcbiAgICAgICAgICAgIFx0XHRcdGNvbG9yOiAjNEIyRjEyO1xyXG4gICAgICAgICAgICBcdFx0XHRmb250LXNpemU6IDI4dXB4O1xyXG4gICAgICAgICAgICBcdFx0fVxyXG4gICAgICAgICAgICBcdH1cclxuICAgICAgICAgICAgXHQuYWRkcmVzc3tcclxuICAgICAgICAgICAgXHRcdC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBcdFx0Y29sb3I6ICMwRDE3MjI7XHJcbiAgICAgICAgICAgIFx0XHRmb250LXNpemU6IDM0dXB4O1xyXG4gICAgICAgICAgICBcdFx0bWFyZ2luLXRvcDogMjB1cHg7XHJcbiAgICAgICAgICAgIFx0XHRpbWFnZXtcclxuICAgICAgICAgICAgXHRcdFx0bWFyZ2luOiAwIDMwdXB4O1xyXG4gICAgICAgICAgICBcdFx0XHR3aWR0aDo2MHVweCA7XHJcbiAgICAgICAgICAgIFx0XHRcdGhlaWdodDogNjB1cHg7XHJcbiAgICAgICAgICAgIFx0XHR9XHJcbiAgICAgICAgICAgIFx0fVxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdC5pbmZvLWNlbnRlcntcclxuXHRcdFx0XHQuaW5mby10aXRsZXtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMzB1cHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubm90ZS1pbmZve1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAyMHVweCAwO1xyXG5cdFx0XHRcdFx0Lm5vdGV7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI4dXB4O1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDIwdXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmltZy13cmFwe1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdFx0XHRcdFx0Lm5vdGUtaW1ne1xyXG5cdFx0XHRcdFx0XHRcdGZsZXgtc2hyaW5rOiAwO1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyMDB1cHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMDB1cHg7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTh1cHg7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAzMHVweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQuaW5mby1ib3R0b217XHJcblx0XHRcdFx0QGluY2x1ZGUgWGZsZXhCb3goZmxleC1zdGFydCk7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHRleHR7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDIwdXB4O1xyXG5cdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMjB1cHg7XHJcblx0XHRcdFx0XHRjb2xvcjogIzY3NkQ4MjtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjh1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5kZWx7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDZ1cHggMzR1cHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyNHVweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC52aWRlb3tcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMHVweCA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LnJld2FyZHtcclxuXHRcdHBhZGRpbmc6IDEydXB4IDI0dXB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOHVweDtcclxuXHRcdGNvbG9yOiAkYmFzZS1jb2xvcjtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICRiYXNlLWNvbG9yO1xyXG5cdFx0Zm9udC1zaXplOiAyNHVweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuZGVse1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjB1cHg7XHJcblx0fVxyXG5cdC50aXBze1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nOiAyMHVweCAwO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICM2NjY7XHJcblx0XHRmb250LXNpemU6IDI4dXB4O1xyXG5cdH1cclxuXHQubm8tZGF7XHJcblx0XHRtYXJnaW4tdG9wOiAzMDB1cHg7XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0NvbGxlY3Rpb25MaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFjNzBjM2ExJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9Db2xsZWN0aW9uTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzcwYzNhMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjQxNDc3OTc2ODY1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9