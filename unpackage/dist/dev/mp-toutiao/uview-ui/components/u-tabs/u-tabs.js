(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-tabs/u-tabs"],{

/***/ 327:
/*!****************************************************************!*\
  !*** D:/work/cartFriend/uview-ui/components/u-tabs/u-tabs.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_tabs_vue_vue_type_template_id_3b2b1a80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-tabs.vue?vue&type=template&id=3b2b1a80&scoped=true& */ 328);
/* harmony import */ var _u_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-tabs.vue?vue&type=script&lang=js& */ 330);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_tabs_vue_vue_type_style_index_0_id_3b2b1a80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-tabs.vue?vue&type=style&index=0&id=3b2b1a80&lang=scss&scoped=true& */ 332);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_tabs_vue_vue_type_template_id_3b2b1a80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_tabs_vue_vue_type_template_id_3b2b1a80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b2b1a80",
  null,
  false,
  _u_tabs_vue_vue_type_template_id_3b2b1a80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uview-ui/components/u-tabs/u-tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 328:
/*!***********************************************************************************************************!*\
  !*** D:/work/cartFriend/uview-ui/components/u-tabs/u-tabs.vue?vue&type=template&id=3b2b1a80&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_template_id_3b2b1a80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-tabs.vue?vue&type=template&id=3b2b1a80&scoped=true& */ 329);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_template_id_3b2b1a80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_template_id_3b2b1a80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_template_id_3b2b1a80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_template_id_3b2b1a80_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 329:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/cartFriend/uview-ui/components/u-tabs/u-tabs.vue?vue&type=template&id=3b2b1a80&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uBadge: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-badge/u-badge */ "uview-ui/components/u-badge/u-badge").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-badge/u-badge.vue */ 380))
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
  var l0 = _vm.__map(_vm.list, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var s0 = _vm.__get_style([_vm.tabItemStyle(index)])

    return {
      $orig: $orig,
      s0: s0
    }
  })

  var s1 = _vm.showBar ? _vm.__get_style([_vm.tabBarStyle]) : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        s1: s1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 330:
/*!*****************************************************************************************!*\
  !*** D:/work/cartFriend/uview-ui/components/u-tabs/u-tabs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-tabs.vue?vue&type=script&lang=js& */ 331);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 331:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/cartFriend/uview-ui/components/u-tabs/u-tabs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * tabs 标签
 * @description 该组件，是一个tabs标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 该组件的一个特点是配置为滚动模式时，激活的tab会自动移动到组件的中间位置。
 * @tutorial https://www.uviewui.com/components/tabs.html
 * @property {Boolean} is-scroll tabs是否可以左右拖动（默认true）
 * @property {Array} list 标签数组，元素为对象，如[{name: '推荐'}]
 * @property {String Number} current 指定哪个tab为激活状态（默认0）
 * @property {String Number} height 导航栏的高度，单位rpx（默认80）
 * @property {String Number} font-size tab文字大小，单位rpx（默认30）
 * @property {String Number} duration 滑块移动一次所需的时间，单位秒（默认0.5）
 * @property {String} active-color 滑块和激活tab文字的颜色（默认#2979ff）
 * @property {String} inactive-color tabs文字颜色（默认#303133）
 * @property {String Number} bar-width 滑块宽度，单位rpx（默认40）
 * @property {Object} active-item-style 活动tabs item的样式，对象形式
 * @property {Object} bar-style 底部滑块的样式，对象形式
 * @property {Boolean} show-bar 是否显示底部的滑块（默认true）
 * @property {String Number} bar-height 滑块高度，单位rpx（默认6）
 * @property {String Number} item-width 标签的宽度（默认auto）
 * @property {String Number} gutter 单个tab标签的左右内边距之和，单位rpx（默认40）
 * @property {String} bg-color tabs导航栏的背景颜色（默认#ffffff）
 * @property {String} name 组件内部读取的list参数中的属性名（tab名称），见官网说明（默认name）
 * @property {String} count 组件内部读取的list参数中的属性名（badge徽标数），同name属性的使用，见官网说明（默认count）
 * @property {Array} offset 设置badge徽标数的位置偏移，格式为 [x, y]，也即设置的为top和right的值，单位rpx（默认[5, 20]）
 * @property {Boolean} bold 激活选项的字体是否加粗（默认true）
 * @event {Function} change 点击标签时触发
 * @example <u-tabs ref="tabs" :list="list" :is-scroll="false"></u-tabs>
 */var _default2 =
{
  name: "u-tabs",
  props: {
    // 导航菜单是否需要滚动，如只有2或者3个的时候，就不需要滚动了，此时使用flex平分tab的宽度
    isScroll: {
      type: Boolean,
      default: true },

    //需循环的标签列表
    list: {
      type: Array,
      default: function _default() {
        return [];
      } },

    // 当前活动tab的索引
    current: {
      type: [Number, String],
      default: 0 },

    // 导航栏的高度和行高
    height: {
      type: [String, Number],
      default: 80 },

    // 字体大小
    fontSize: {
      type: [String, Number],
      default: 30 },

    // 过渡动画时长, 单位ms
    duration: {
      type: [String, Number],
      default: 0.5 },

    // 选中项的主题颜色
    activeColor: {
      type: String,
      default: '#2979ff' },

    // 未选中项的颜色
    inactiveColor: {
      type: String,
      default: '#303133' },

    // 菜单底部移动的bar的宽度，单位rpx
    barWidth: {
      type: [String, Number],
      default: 40 },

    // 移动bar的高度
    barHeight: {
      type: [String, Number],
      default: 6 },

    // 单个tab的左或有内边距（左右相同）
    gutter: {
      type: [String, Number],
      default: 30 },

    // 导航栏的背景颜色
    bgColor: {
      type: String,
      default: '#ffffff' },

    // 读取传入的数组对象的属性(tab名称)
    name: {
      type: String,
      default: 'name' },

    // 读取传入的数组对象的属性(徽标数)
    count: {
      type: String,
      default: 'count' },

    // 徽标数位置偏移
    offset: {
      type: Array,
      default: function _default() {
        return [5, 20];
      } },

    // 活动tab字体是否加粗
    bold: {
      type: Boolean,
      default: true },

    // 当前活动tab item的样式
    activeItemStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 是否显示底部的滑块
    showBar: {
      type: Boolean,
      default: true },

    // 底部滑块的自定义样式
    barStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 标签的宽度
    itemWidth: {
      type: [Number, String],
      default: 'auto' } },


  data: function data() {
    return {
      scrollLeft: 0, // 滚动scroll-view的左边滚动距离
      tabQueryInfo: [], // 存放对tab菜单查询后的节点信息
      componentWidth: 0, // 屏幕宽度，单位为px
      scrollBarLeft: 0, // 移动bar需要通过translateX()移动的距离
      parentLeft: 0, // 父元素(tabs组件)到屏幕左边的距离
      id: this.$u.guid(), // id值
      currentIndex: this.current,
      barFirstTimeMove: true // 滑块第一次移动时(页面刚生成时)，无需动画，否则给人怪异的感觉
    };
  },
  watch: {
    // 监听tab的变化，重新计算tab菜单的布局信息，因为实际使用中菜单可能是通过
    // 后台获取的（如新闻app顶部的菜单），获取返回需要一定时间，所以list变化时，重新获取布局信息
    list: function list(n, o) {var _this = this;
      // list变动时，重制内部索引，否则可能导致超出数组边界的情况
      if (n.length !== o.length) this.currentIndex = 0;
      // 用$nextTick等待视图更新完毕后再计算tab的局部信息，否则可能因为tab还没生成就获取，就会有问题
      this.$nextTick(function () {
        _this.init();
      });
    },
    current: {
      immediate: true,
      handler: function handler(nVal, oVal) {var _this2 = this;
        // 视图更新后再执行移动操作
        this.$nextTick(function () {
          _this2.currentIndex = nVal;
          _this2.scrollByIndex();
        });
      } } },


  computed: {
    // 移动bar的样式
    tabBarStyle: function tabBarStyle() {
      var style = {
        width: this.barWidth + 'rpx',
        transform: "translate(".concat(this.scrollBarLeft, "px, -100%)"),
        // 滑块在页面渲染后第一次滑动时，无需动画效果
        'transition-duration': "".concat(this.barFirstTimeMove ? 0 : this.duration, "s"),
        'background-color': this.activeColor,
        height: this.barHeight + 'rpx',
        opacity: this.barFirstTimeMove ? 0 : 1,
        // 设置一个很大的值，它会自动取能用的最大值，不用高度的一半，是因为高度可能是单数，会有小数出现
        'border-radius': "".concat(this.barHeight / 2, "px") };

      Object.assign(style, this.barStyle);
      return style;
    },
    // tab的样式
    tabItemStyle: function tabItemStyle() {var _this3 = this;
      return function (index) {
        var style = {
          height: _this3.height + 'rpx',
          'line-height': _this3.height + 'rpx',
          'font-size': _this3.fontSize + 'rpx',
          'transition-duration': "".concat(_this3.duration, "s"),
          padding: _this3.isScroll ? "0 ".concat(_this3.gutter, "rpx") : '',
          flex: _this3.isScroll ? 'auto' : '1',
          width: _this3.$u.addUnit(_this3.itemWidth) };

        // 字体加粗
        if (index == _this3.currentIndex && _this3.bold) style.fontWeight = 'bold';
        if (index == _this3.currentIndex) {
          style.color = _this3.activeColor;
          // 给选中的tab item添加外部自定义的样式
          style = Object.assign(style, _this3.activeItemStyle);
        } else {
          style.color = _this3.inactiveColor;
        }
        return style;
      };
    } },

  methods: {
    // 设置一个init方法，方便多处调用
    init: function init() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var tabRect;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (

                  _this4.$uGetRect('#' + _this4.id));case 2:tabRect = _context.sent;
                // tabs组件距离屏幕左边的宽度
                _this4.parentLeft = tabRect.left;
                // tabs组件的宽度
                _this4.componentWidth = tabRect.width;
                _this4.getTabRect();case 6:case "end":return _context.stop();}}}, _callee);}))();
    },
    // 点击某一个tab菜单
    clickTab: function clickTab(index) {
      // 点击当前活动tab，不触发事件
      if (index == this.currentIndex) return;
      // 发送事件给父组件
      this.$emit('change', index);
    },
    // 查询tab的布局信息
    getTabRect: function getTabRect() {
      // 创建节点查询
      var query = uni.createSelectorQuery().in(this);
      // 历遍所有tab，这里是执行了查询，最终使用exec()会一次性返回查询的数组结果
      for (var i = 0; i < this.list.length; i++) {
        // 只要size和rect两个参数
        query.select("#u-tab-item-".concat(i)).fields({
          size: true,
          rect: true });

      }
      // 执行查询，一次性获取多个结果
      query.exec(
      function (res) {
        this.tabQueryInfo = res;
        // 初始化滚动条和移动bar的位置
        this.scrollByIndex();
      }.bind(this));

    },
    // 滚动scroll-view，让活动的tab处于屏幕的中间位置
    scrollByIndex: function scrollByIndex() {var _this5 = this;
      // 当前活动tab的布局信息，有tab菜单的width和left(为元素左边界到父元素左边界的距离)等信息
      var tabInfo = this.tabQueryInfo[this.currentIndex];
      if (!tabInfo) return;
      // 活动tab的宽度
      var tabWidth = tabInfo.width;
      // 活动item的左边到tabs组件左边的距离，用item的left减去tabs的left
      var offsetLeft = tabInfo.left - this.parentLeft;
      // 将活动的tabs-item移动到屏幕正中间，实际上是对scroll-view的移动
      var scrollLeft = offsetLeft - (this.componentWidth - tabWidth) / 2;
      this.scrollLeft = scrollLeft < 0 ? 0 : scrollLeft;
      // 当前活动item的中点点到左边的距离减去滑块宽度的一半，即可得到滑块所需的移动距离
      var left = tabInfo.left + tabInfo.width / 2 - this.parentLeft;
      // 计算当前活跃item到组件左边的距离
      this.scrollBarLeft = left - uni.upx2px(this.barWidth) / 2;
      // 第一次移动滑块的时候，barFirstTimeMove为true，放到延时中将其设置false
      // 延时是因为scrollBarLeft作用于computed计算时，需要一个过程需，否则导致出错
      if (this.barFirstTimeMove == true) {
        setTimeout(function () {
          _this5.barFirstTimeMove = false;
        }, 100);
      }
    } },

  mounted: function mounted() {
    this.init();
  } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 332:
/*!**************************************************************************************************************************!*\
  !*** D:/work/cartFriend/uview-ui/components/u-tabs/u-tabs.vue?vue&type=style&index=0&id=3b2b1a80&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_style_index_0_id_3b2b1a80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../开发工具/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-tabs.vue?vue&type=style&index=0&id=3b2b1a80&lang=scss&scoped=true& */ 333);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_style_index_0_id_3b2b1a80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_style_index_0_id_3b2b1a80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_style_index_0_id_3b2b1a80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_style_index_0_id_3b2b1a80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_tabs_vue_vue_type_style_index_0_id_3b2b1a80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 333:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/cartFriend/uview-ui/components/u-tabs/u-tabs.vue?vue&type=style&index=0&id=3b2b1a80&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovd29yay9jYXJ0RnJpZW5kL3V2aWV3LXVpL2NvbXBvbmVudHMvdS10YWJzL3UtdGFicy52dWU/MmNhNiIsIndlYnBhY2s6Ly8vRDovd29yay9jYXJ0RnJpZW5kL3V2aWV3LXVpL2NvbXBvbmVudHMvdS10YWJzL3UtdGFicy52dWU/NGI4MyIsIndlYnBhY2s6Ly8vRDovd29yay9jYXJ0RnJpZW5kL3V2aWV3LXVpL2NvbXBvbmVudHMvdS10YWJzL3UtdGFicy52dWU/NTQyMyIsIndlYnBhY2s6Ly8vRDovd29yay9jYXJ0RnJpZW5kL3V2aWV3LXVpL2NvbXBvbmVudHMvdS10YWJzL3UtdGFicy52dWU/NzFkNCIsInVuaS1hcHA6Ly8vdXZpZXctdWkvY29tcG9uZW50cy91LXRhYnMvdS10YWJzLnZ1ZSIsIndlYnBhY2s6Ly8vRDovd29yay9jYXJ0RnJpZW5kL3V2aWV3LXVpL2NvbXBvbmVudHMvdS10YWJzL3UtdGFicy52dWU/YTkwYSIsIndlYnBhY2s6Ly8vRDovd29yay9jYXJ0RnJpZW5kL3V2aWV3LXVpL2NvbXBvbmVudHMvdS10YWJzL3UtdGFicy52dWU/ODNmNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStIO0FBQy9IO0FBQzBEO0FBQ0w7QUFDc0M7OztBQUczRjtBQUNxTDtBQUNyTCxnQkFBZ0IsdUxBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDZNQUVOO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFBO0FBQTZyQixDQUFnQixrcUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQmp0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0EsZ0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBRkE7O0FBTUE7QUFDQTtBQUNBLGlCQURBO0FBRUEsYUFGQSxzQkFFQTtBQUNBO0FBQ0EsT0FKQSxFQVBBOztBQWFBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGdCQUZBLEVBZEE7O0FBa0JBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBbkJBOztBQXVCQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQXhCQTs7QUE0QkE7QUFDQTtBQUNBLDRCQURBO0FBRUEsa0JBRkEsRUE3QkE7O0FBaUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBbENBOztBQXNDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQXZDQTs7QUEyQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsaUJBRkEsRUE1Q0E7O0FBZ0RBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGdCQUZBLEVBakRBOztBQXFEQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQXREQTs7QUEwREE7QUFDQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUEzREE7O0FBK0RBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHFCQUZBLEVBaEVBOztBQW9FQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxzQkFGQSxFQXJFQTs7QUF5RUE7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBLE9BSkEsRUExRUE7O0FBZ0ZBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBakZBOztBQXFGQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxhQUZBLHNCQUVBO0FBQ0E7QUFDQSxPQUpBLEVBdEZBOztBQTRGQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxtQkFGQSxFQTdGQTs7QUFpR0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsYUFGQSxzQkFFQTtBQUNBO0FBQ0EsT0FKQSxFQWxHQTs7QUF3R0E7QUFDQTtBQUNBLDRCQURBO0FBRUEscUJBRkEsRUF6R0EsRUFGQTs7O0FBZ0hBLE1BaEhBLGtCQWdIQTtBQUNBO0FBQ0EsbUJBREEsRUFDQTtBQUNBLHNCQUZBLEVBRUE7QUFDQSx1QkFIQSxFQUdBO0FBQ0Esc0JBSkEsRUFJQTtBQUNBLG1CQUxBLEVBS0E7QUFDQSx3QkFOQSxFQU1BO0FBQ0EsZ0NBUEE7QUFRQSw0QkFSQSxDQVFBO0FBUkE7QUFVQSxHQTNIQTtBQTRIQTtBQUNBO0FBQ0E7QUFDQSxRQUhBLGdCQUdBLENBSEEsRUFHQSxDQUhBLEVBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBVkE7QUFXQTtBQUNBLHFCQURBO0FBRUEsYUFGQSxtQkFFQSxJQUZBLEVBRUEsSUFGQSxFQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBO0FBSUEsT0FSQSxFQVhBLEVBNUhBOzs7QUFrSkE7QUFDQTtBQUNBLGVBRkEseUJBRUE7QUFDQTtBQUNBLG9DQURBO0FBRUEsd0VBRkE7QUFHQTtBQUNBLHdGQUpBO0FBS0EsNENBTEE7QUFNQSxzQ0FOQTtBQU9BLDhDQVBBO0FBUUE7QUFDQSw0REFUQTs7QUFXQTtBQUNBO0FBQ0EsS0FoQkE7QUFpQkE7QUFDQSxnQkFsQkEsMEJBa0JBO0FBQ0E7QUFDQTtBQUNBLHVDQURBO0FBRUEsOENBRkE7QUFHQSw4Q0FIQTtBQUlBLGdFQUpBO0FBS0EsMkVBTEE7QUFNQSw4Q0FOQTtBQU9BLG9EQVBBOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BcEJBO0FBcUJBLEtBeENBLEVBbEpBOztBQTRMQTtBQUNBO0FBQ0EsUUFGQSxrQkFFQTs7QUFFQSxtREFGQSxTQUVBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQVBBO0FBUUEsS0FWQTtBQVdBO0FBQ0EsWUFaQSxvQkFZQSxLQVpBLEVBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBakJBO0FBa0JBO0FBQ0EsY0FuQkEsd0JBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxvQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsQ0FJQSxJQUpBLENBSUEsSUFKQSxDQURBOztBQU9BLEtBdENBO0FBdUNBO0FBQ0EsaUJBeENBLDJCQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLEdBRkE7QUFHQTtBQUNBLEtBOURBLEVBNUxBOztBQTRQQSxTQTVQQSxxQkE0UEE7QUFDQTtBQUNBLEdBOVBBLEU7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFBQTtBQUFBO0FBQUE7QUFBdzBDLENBQWdCLGl0Q0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTUxQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InV2aWV3LXVpL2NvbXBvbmVudHMvdS10YWJzL3UtdGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdS10YWJzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjJiMWE4MCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3UtdGFicy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3UtdGFicy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdS10YWJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNiMmIxYTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2IyYjFhODBcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidXZpZXctdWkvY29tcG9uZW50cy91LXRhYnMvdS10YWJzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdS10YWJzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjJiMWE4MCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG50cnkge1xuICBjb21wb25lbnRzID0ge1xuICAgIHVCYWRnZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1iYWRnZS91LWJhZGdlXCIgKi8gXCJAL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1iYWRnZS91LWJhZGdlLnZ1ZVwiXG4gICAgICApXG4gICAgfVxuICB9XG59IGNhdGNoIChlKSB7XG4gIGlmIChcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIkNhbm5vdCBmaW5kIG1vZHVsZVwiKSAhPT0gLTEgJiZcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIi52dWVcIikgIT09IC0xXG4gICkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKVxuICAgIGNvbnNvbGUuZXJyb3IoXCIxLiDmjpLmn6Xnu4Tku7blkI3np7Dmi7zlhpnmmK/lkKbmraPnoa5cIilcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIyLiDmjpLmn6Xnu4Tku7bmmK/lkKbnrKblkIggZWFzeWNvbSDop4TojIPvvIzmlofmoaPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL2NvbGxvY2F0aW9uL3BhZ2VzP2lkPWVhc3ljb21cIlxuICAgIClcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIzLiDoi6Xnu4Tku7bkuI3nrKblkIggZWFzeWNvbSDop4TojIPvvIzpnIDmiYvliqjlvJXlhaXvvIzlubblnKggY29tcG9uZW50cyDkuK3ms6jlhozor6Xnu4Tku7ZcIlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgbDAgPSBfdm0uX19tYXAoX3ZtLmxpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgdmFyICRvcmlnID0gX3ZtLl9fZ2V0X29yaWcoaXRlbSlcblxuICAgIHZhciBzMCA9IF92bS5fX2dldF9zdHlsZShbX3ZtLnRhYkl0ZW1TdHlsZShpbmRleCldKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICRvcmlnOiAkb3JpZyxcbiAgICAgIHMwOiBzMFxuICAgIH1cbiAgfSlcblxuICB2YXIgczEgPSBfdm0uc2hvd0JhciA/IF92bS5fX2dldF9zdHlsZShbX3ZtLnRhYkJhclN0eWxlXSkgOiBudWxsXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgbDA6IGwwLFxuICAgICAgICBzMTogczFcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91LXRhYnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91LXRhYnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidS10YWJzXCIgOnN0eWxlPVwie1xyXG5cdFx0YmFja2dyb3VuZDogYmdDb2xvclxyXG5cdH1cIj5cclxuXHRcdDwhLS0gJHUuZ2V0UmVjdCgp5a+557uE5Lu25qC56IqC54K55peg5pWI77yM5Zug5Li65YaZ5LqGLmluKHRoaXMp77yM5pWF6L+Z6YeM6I635Y+W5YaF5bGC5o6l54K55bC65a+4IC0tPlxyXG5cdFx0PHZpZXcgOmlkPVwiaWRcIj5cclxuXHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC14IGNsYXNzPVwidS1zY3JvbGwtdmlld1wiIDpzY3JvbGwtbGVmdD1cInNjcm9sbExlZnRcIiBzY3JvbGwtd2l0aC1hbmltYXRpb24+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXNjcm9sbC1ib3hcIiA6Y2xhc3M9XCJ7J3UtdGFicy1zY29ybGwtZmxleCc6ICFpc1Njcm9sbH1cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS10YWItaXRlbSB1LWxpbmUtMVwiIDppZD1cIid1LXRhYi1pdGVtLScgKyBpbmRleFwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBsaXN0XCIgOmtleT1cImluZGV4XCIgQHRhcD1cImNsaWNrVGFiKGluZGV4KVwiXHJcblx0XHRcdFx0XHQgOnN0eWxlPVwiW3RhYkl0ZW1TdHlsZShpbmRleCldXCI+XHJcblx0XHRcdFx0XHRcdDx1LWJhZGdlIDpjb3VudD1cIml0ZW1bY291bnRdIHx8IGl0ZW1bJ2NvdW50J10gfHwgMFwiIDpvZmZzZXQ9XCJvZmZzZXRcIiBzaXplPVwibWluaVwiPjwvdS1iYWRnZT5cclxuXHRcdFx0XHRcdFx0e3sgaXRlbVtuYW1lXSB8fCBpdGVtWyduYW1lJ119fVxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1pZj1cInNob3dCYXJcIiBjbGFzcz1cInUtdGFiLWJhclwiIDpzdHlsZT1cIlt0YWJCYXJTdHlsZV1cIj48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0LyoqXHJcblx0ICogdGFicyDmoIfnrb5cclxuXHQgKiBAZGVzY3JpcHRpb24g6K+l57uE5Lu277yM5piv5LiA5LiqdGFic+agh+etvue7hOS7tu+8jOWcqOagh+etvuWkmueahOaXtuWAme+8jOWPr+S7pemFjee9ruS4uuW3puWPs+a7keWKqO+8jOagh+etvuWwkeeahOaXtuWAme+8jOWPr+S7peemgeatoua7keWKqOOAgiDor6Xnu4Tku7bnmoTkuIDkuKrnibnngrnmmK/phY3nva7kuLrmu5rliqjmqKHlvI/ml7bvvIzmv4DmtLvnmoR0YWLkvJroh6rliqjnp7vliqjliLDnu4Tku7bnmoTkuK3pl7TkvY3nva7jgIJcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly93d3cudXZpZXd1aS5jb20vY29tcG9uZW50cy90YWJzLmh0bWxcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGlzLXNjcm9sbCB0YWJz5piv5ZCm5Y+v5Lul5bem5Y+z5ouW5Yqo77yI6buY6K6kdHJ1Ze+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IGxpc3Qg5qCH562+5pWw57uE77yM5YWD57Sg5Li65a+56LGh77yM5aaCW3tuYW1lOiAn5o6o6I2QJ31dXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgTnVtYmVyfSBjdXJyZW50IOaMh+WumuWTquS4qnRhYuS4uua/gOa0u+eKtuaAge+8iOm7mOiupDDvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyBOdW1iZXJ9IGhlaWdodCDlr7zoiKrmoI/nmoTpq5jluqbvvIzljZXkvY1ycHjvvIjpu5jorqQ4MO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIE51bWJlcn0gZm9udC1zaXplIHRhYuaWh+Wtl+Wkp+Wwj++8jOWNleS9jXJweO+8iOm7mOiupDMw77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgTnVtYmVyfSBkdXJhdGlvbiDmu5HlnZfnp7vliqjkuIDmrKHmiYDpnIDnmoTml7bpl7TvvIzljZXkvY3np5LvvIjpu5jorqQwLjXvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gYWN0aXZlLWNvbG9yIOa7keWdl+WSjOa/gOa0u3RhYuaWh+Wtl+eahOminOiJsu+8iOm7mOiupCMyOTc5ZmbvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gaW5hY3RpdmUtY29sb3IgdGFic+aWh+Wtl+minOiJsu+8iOm7mOiupCMzMDMxMzPvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyBOdW1iZXJ9IGJhci13aWR0aCDmu5HlnZflrr3luqbvvIzljZXkvY1ycHjvvIjpu5jorqQ0MO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBhY3RpdmUtaXRlbS1zdHlsZSDmtLvliqh0YWJzIGl0ZW3nmoTmoLflvI/vvIzlr7nosaHlvaLlvI9cclxuXHQgKiBAcHJvcGVydHkge09iamVjdH0gYmFyLXN0eWxlIOW6lemDqOa7keWdl+eahOagt+W8j++8jOWvueixoeW9ouW8j1xyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2hvdy1iYXIg5piv5ZCm5pi+56S65bqV6YOo55qE5ruR5Z2X77yI6buY6K6kdHJ1Ze+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIE51bWJlcn0gYmFyLWhlaWdodCDmu5HlnZfpq5jluqbvvIzljZXkvY1ycHjvvIjpu5jorqQ277yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgTnVtYmVyfSBpdGVtLXdpZHRoIOagh+etvueahOWuveW6pu+8iOm7mOiupGF1dG/vvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyBOdW1iZXJ9IGd1dHRlciDljZXkuKp0YWLmoIfnrb7nmoTlt6blj7PlhoXovrnot53kuYvlkozvvIzljZXkvY1ycHjvvIjpu5jorqQ0MO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBiZy1jb2xvciB0YWJz5a+86Iiq5qCP55qE6IOM5pmv6aKc6Imy77yI6buY6K6kI2ZmZmZmZu+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBuYW1lIOe7hOS7tuWGhemDqOivu+WPlueahGxpc3Tlj4LmlbDkuK3nmoTlsZ7mgKflkI3vvIh0YWLlkI3np7DvvInvvIzop4HlrpjnvZHor7TmmI7vvIjpu5jorqRuYW1l77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGNvdW50IOe7hOS7tuWGhemDqOivu+WPlueahGxpc3Tlj4LmlbDkuK3nmoTlsZ7mgKflkI3vvIhiYWRnZeW+veagh+aVsO+8ie+8jOWQjG5hbWXlsZ7mgKfnmoTkvb/nlKjvvIzop4HlrpjnvZHor7TmmI7vvIjpu5jorqRjb3VudO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IG9mZnNldCDorr7nva5iYWRnZeW+veagh+aVsOeahOS9jee9ruWBj+enu++8jOagvOW8j+S4uiBbeCwgeV3vvIzkuZ/ljbPorr7nva7nmoTkuLp0b3DlkoxyaWdodOeahOWAvO+8jOWNleS9jXJweO+8iOm7mOiupFs1LCAyMF3vvIlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGJvbGQg5r+A5rS76YCJ6aG555qE5a2X5L2T5piv5ZCm5Yqg57KX77yI6buY6K6kdHJ1Ze+8iVxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGNoYW5nZSDngrnlh7vmoIfnrb7ml7bop6blj5FcclxuXHQgKiBAZXhhbXBsZSA8dS10YWJzIHJlZj1cInRhYnNcIiA6bGlzdD1cImxpc3RcIiA6aXMtc2Nyb2xsPVwiZmFsc2VcIj48L3UtdGFicz5cclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiBcInUtdGFic1wiLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Ly8g5a+86Iiq6I+c5Y2V5piv5ZCm6ZyA6KaB5rua5Yqo77yM5aaC5Y+q5pyJMuaIluiAhTPkuKrnmoTml7blgJnvvIzlsLHkuI3pnIDopoHmu5rliqjkuobvvIzmraTml7bkvb/nlKhmbGV45bmz5YiGdGFi55qE5a695bqmXHJcblx0XHRcdGlzU2Nyb2xsOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v6ZyA5b6q546v55qE5qCH562+5YiX6KGoXHJcblx0XHRcdGxpc3Q6IHtcclxuXHRcdFx0XHR0eXBlOiBBcnJheSxcclxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcclxuXHRcdFx0XHRcdHJldHVybiBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW9k+WJjea0u+WKqHRhYueahOe0ouW8lVxyXG5cdFx0XHRjdXJyZW50OiB7XHJcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWvvOiIquagj+eahOmrmOW6puWSjOihjOmrmFxyXG5cdFx0XHRoZWlnaHQ6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDgwXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWtl+S9k+Wkp+Wwj1xyXG5cdFx0XHRmb250U2l6ZToge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogMzBcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L+H5rih5Yqo55S75pe26ZW/LCDljZXkvY1tc1xyXG5cdFx0XHRkdXJhdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogMC41XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmAieS4remhueeahOS4u+mimOminOiJslxyXG5cdFx0XHRhY3RpdmVDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnIzI5NzlmZidcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pyq6YCJ5Lit6aG555qE6aKc6ImyXHJcblx0XHRcdGluYWN0aXZlQ29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyMzMDMxMzMnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiPnOWNleW6lemDqOenu+WKqOeahGJhcueahOWuveW6pu+8jOWNleS9jXJweFxyXG5cdFx0XHRiYXJXaWR0aDoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogNDBcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g56e75YqoYmFy55qE6auY5bqmXHJcblx0XHRcdGJhckhlaWdodDoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogNlxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDljZXkuKp0YWLnmoTlt6bmiJbmnInlhoXovrnot53vvIjlt6blj7Pnm7jlkIzvvIlcclxuXHRcdFx0Z3V0dGVyOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAzMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlr7zoiKrmoI/nmoTog4zmma/popzoibJcclxuXHRcdFx0YmdDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnI2ZmZmZmZidcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6K+75Y+W5Lyg5YWl55qE5pWw57uE5a+56LGh55qE5bGe5oCnKHRhYuWQjeensClcclxuXHRcdFx0bmFtZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnbmFtZSdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6K+75Y+W5Lyg5YWl55qE5pWw57uE5a+56LGh55qE5bGe5oCnKOW+veagh+aVsClcclxuXHRcdFx0Y291bnQ6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ2NvdW50J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlvr3moIfmlbDkvY3nva7lgY/np7tcclxuXHRcdFx0b2Zmc2V0OiB7XHJcblx0XHRcdFx0dHlwZTogQXJyYXksXHJcblx0XHRcdFx0ZGVmYXVsdDogKCkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFs1LCAyMF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOa0u+WKqHRhYuWtl+S9k+aYr+WQpuWKoOeyl1xyXG5cdFx0XHRib2xkOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW9k+WJjea0u+WKqHRhYiBpdGVt55qE5qC35byPXHJcblx0XHRcdGFjdGl2ZUl0ZW1TdHlsZToge1xyXG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0XHRkZWZhdWx0KCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHt9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbmmL7npLrlupXpg6jnmoTmu5HlnZdcclxuXHRcdFx0c2hvd0Jhcjoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlupXpg6jmu5HlnZfnmoToh6rlrprkuYnmoLflvI9cclxuXHRcdFx0YmFyU3R5bGU6IHtcclxuXHRcdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRcdHJldHVybiB7fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5qCH562+55qE5a695bqmXHJcblx0XHRcdGl0ZW1XaWR0aDoge1xyXG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdFx0ZGVmYXVsdDogJ2F1dG8nXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHNjcm9sbExlZnQ6IDAsIC8vIOa7muWKqHNjcm9sbC12aWV355qE5bem6L655rua5Yqo6Led56a7XHJcblx0XHRcdFx0dGFiUXVlcnlJbmZvOiBbXSwgLy8g5a2Y5pS+5a+5dGFi6I+c5Y2V5p+l6K+i5ZCO55qE6IqC54K55L+h5oGvXHJcblx0XHRcdFx0Y29tcG9uZW50V2lkdGg6IDAsIC8vIOWxj+W5leWuveW6pu+8jOWNleS9jeS4unB4XHJcblx0XHRcdFx0c2Nyb2xsQmFyTGVmdDogMCwgLy8g56e75YqoYmFy6ZyA6KaB6YCa6L+HdHJhbnNsYXRlWCgp56e75Yqo55qE6Led56a7XHJcblx0XHRcdFx0cGFyZW50TGVmdDogMCwgLy8g54i25YWD57SgKHRhYnPnu4Tku7Yp5Yiw5bGP5bmV5bem6L6555qE6Led56a7XHJcblx0XHRcdFx0aWQ6IHRoaXMuJHUuZ3VpZCgpLCAvLyBpZOWAvFxyXG5cdFx0XHRcdGN1cnJlbnRJbmRleDogdGhpcy5jdXJyZW50LFxyXG5cdFx0XHRcdGJhckZpcnN0VGltZU1vdmU6IHRydWUsIC8vIOa7keWdl+esrOS4gOasoeenu+WKqOaXtijpobXpnaLliJrnlJ/miJDml7Yp77yM5peg6ZyA5Yqo55S777yM5ZCm5YiZ57uZ5Lq65oCq5byC55qE5oSf6KeJXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0Ly8g55uR5ZCsdGFi55qE5Y+Y5YyW77yM6YeN5paw6K6h566XdGFi6I+c5Y2V55qE5biD5bGA5L+h5oGv77yM5Zug5Li65a6e6ZmF5L2/55So5Lit6I+c5Y2V5Y+v6IO95piv6YCa6L+HXHJcblx0XHRcdC8vIOWQjuWPsOiOt+WPlueahO+8iOWmguaWsOmXu2FwcOmhtumDqOeahOiPnOWNle+8ie+8jOiOt+WPlui/lOWbnumcgOimgeS4gOWumuaXtumXtO+8jOaJgOS7pWxpc3Tlj5jljJbml7bvvIzph43mlrDojrflj5bluIPlsYDkv6Hmga9cclxuXHRcdFx0bGlzdChuLCBvKSB7XHJcblx0XHRcdFx0Ly8gbGlzdOWPmOWKqOaXtu+8jOmHjeWItuWGhemDqOe0ouW8le+8jOWQpuWImeWPr+iDveWvvOiHtOi2heWHuuaVsOe7hOi+ueeVjOeahOaDheWGtVxyXG5cdFx0XHRcdGlmKG4ubGVuZ3RoICE9PSBvLmxlbmd0aCkgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG5cdFx0XHRcdC8vIOeUqCRuZXh0VGlja+etieW+heinhuWbvuabtOaWsOWujOavleWQjuWGjeiuoeeul3RhYueahOWxgOmDqOS/oeaBr++8jOWQpuWImeWPr+iDveWboOS4unRhYui/mOayoeeUn+aIkOWwseiOt+WPlu+8jOWwseS8muaciemXrumimFxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50OiB7XHJcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlLFxyXG5cdFx0XHRcdGhhbmRsZXIoblZhbCwgb1ZhbCkge1xyXG5cdFx0XHRcdFx0Ly8g6KeG5Zu+5pu05paw5ZCO5YaN5omn6KGM56e75Yqo5pON5L2cXHJcblx0XHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gblZhbDtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY3JvbGxCeUluZGV4KCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Ly8g56e75YqoYmFy55qE5qC35byPXHJcblx0XHRcdHRhYkJhclN0eWxlKCkge1xyXG5cdFx0XHRcdGxldCBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdHdpZHRoOiB0aGlzLmJhcldpZHRoICsgJ3JweCcsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnNjcm9sbEJhckxlZnR9cHgsIC0xMDAlKWAsXHJcblx0XHRcdFx0XHQvLyDmu5HlnZflnKjpobXpnaLmuLLmn5PlkI7nrKzkuIDmrKHmu5Hliqjml7bvvIzml6DpnIDliqjnlLvmlYjmnpxcclxuXHRcdFx0XHRcdCd0cmFuc2l0aW9uLWR1cmF0aW9uJzogYCR7dGhpcy5iYXJGaXJzdFRpbWVNb3ZlID8gMCA6IHRoaXMuZHVyYXRpb24gfXNgLFxyXG5cdFx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiB0aGlzLmFjdGl2ZUNvbG9yLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLmJhckhlaWdodCArICdycHgnLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogdGhpcy5iYXJGaXJzdFRpbWVNb3ZlID8gMCA6IDEsXHJcblx0XHRcdFx0XHQvLyDorr7nva7kuIDkuKrlvojlpKfnmoTlgLzvvIzlroPkvJroh6rliqjlj5bog73nlKjnmoTmnIDlpKflgLzvvIzkuI3nlKjpq5jluqbnmoTkuIDljYrvvIzmmK/lm6DkuLrpq5jluqblj6/og73mmK/ljZXmlbDvvIzkvJrmnInlsI/mlbDlh7rnjrBcclxuXHRcdFx0XHRcdCdib3JkZXItcmFkaXVzJzogYCR7dGhpcy5iYXJIZWlnaHQgLyAyfXB4YFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0T2JqZWN0LmFzc2lnbihzdHlsZSwgdGhpcy5iYXJTdHlsZSk7XHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyB0YWLnmoTmoLflvI9cclxuXHRcdFx0dGFiSXRlbVN0eWxlKCkge1xyXG5cdFx0XHRcdHJldHVybiAoaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLmhlaWdodCArICdycHgnLFxyXG5cdFx0XHRcdFx0XHQnbGluZS1oZWlnaHQnOiB0aGlzLmhlaWdodCArICdycHgnLFxyXG5cdFx0XHRcdFx0XHQnZm9udC1zaXplJzogdGhpcy5mb250U2l6ZSArICdycHgnLFxyXG5cdFx0XHRcdFx0XHQndHJhbnNpdGlvbi1kdXJhdGlvbic6IGAke3RoaXMuZHVyYXRpb259c2AsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHRoaXMuaXNTY3JvbGwgPyBgMCAke3RoaXMuZ3V0dGVyfXJweGAgOiAnJyxcclxuXHRcdFx0XHRcdFx0ZmxleDogdGhpcy5pc1Njcm9sbCA/ICdhdXRvJyA6ICcxJyxcclxuXHRcdFx0XHRcdFx0d2lkdGg6IHRoaXMuJHUuYWRkVW5pdCh0aGlzLml0ZW1XaWR0aClcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHQvLyDlrZfkvZPliqDnspdcclxuXHRcdFx0XHRcdGlmIChpbmRleCA9PSB0aGlzLmN1cnJlbnRJbmRleCAmJiB0aGlzLmJvbGQpIHN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPT0gdGhpcy5jdXJyZW50SW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0c3R5bGUuY29sb3IgPSB0aGlzLmFjdGl2ZUNvbG9yO1xyXG5cdFx0XHRcdFx0XHQvLyDnu5npgInkuK3nmoR0YWIgaXRlbea3u+WKoOWklumDqOiHquWumuS5ieeahOagt+W8j1xyXG5cdFx0XHRcdFx0XHRzdHlsZSA9IE9iamVjdC5hc3NpZ24oc3R5bGUsIHRoaXMuYWN0aXZlSXRlbVN0eWxlKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHN0eWxlLmNvbG9yID0gdGhpcy5pbmFjdGl2ZUNvbG9yO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g6K6+572u5LiA5LiqaW5pdOaWueazle+8jOaWueS+v+WkmuWkhOiwg+eUqFxyXG5cdFx0XHRhc3luYyBpbml0KCkge1xyXG5cdFx0XHRcdC8vIOiOt+WPlnRhYnPnu4Tku7bnmoTlsLrlr7jkv6Hmga9cclxuXHRcdFx0XHRsZXQgdGFiUmVjdCA9IGF3YWl0IHRoaXMuJHVHZXRSZWN0KCcjJyArIHRoaXMuaWQpO1xyXG5cdFx0XHRcdC8vIHRhYnPnu4Tku7bot53nprvlsY/luZXlt6bovrnnmoTlrr3luqZcclxuXHRcdFx0XHR0aGlzLnBhcmVudExlZnQgPSB0YWJSZWN0LmxlZnQ7XHJcblx0XHRcdFx0Ly8gdGFic+e7hOS7tueahOWuveW6plxyXG5cdFx0XHRcdHRoaXMuY29tcG9uZW50V2lkdGggPSB0YWJSZWN0LndpZHRoO1xyXG5cdFx0XHRcdHRoaXMuZ2V0VGFiUmVjdCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vmn5DkuIDkuKp0YWLoj5zljZVcclxuXHRcdFx0Y2xpY2tUYWIoaW5kZXgpIHtcclxuXHRcdFx0XHQvLyDngrnlh7vlvZPliY3mtLvliqh0YWLvvIzkuI3op6blj5Hkuovku7ZcclxuXHRcdFx0XHRpZihpbmRleCA9PSB0aGlzLmN1cnJlbnRJbmRleCkgcmV0dXJuIDtcclxuXHRcdFx0XHQvLyDlj5HpgIHkuovku7bnu5nniLbnu4Tku7ZcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCBpbmRleCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOafpeivonRhYueahOW4g+WxgOS/oeaBr1xyXG5cdFx0XHRnZXRUYWJSZWN0KCkge1xyXG5cdFx0XHRcdC8vIOWIm+W7uuiKgueCueafpeivolxyXG5cdFx0XHRcdGxldCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRcdFx0Ly8g5Y6G6YGN5omA5pyJdGFi77yM6L+Z6YeM5piv5omn6KGM5LqG5p+l6K+i77yM5pyA57uI5L2/55SoZXhlYygp5Lya5LiA5qyh5oCn6L+U5Zue5p+l6K+i55qE5pWw57uE57uT5p6cXHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdC8vIOWPquimgXNpemXlkoxyZWN05Lik5Liq5Y+C5pWwXHJcblx0XHRcdFx0XHRxdWVyeS5zZWxlY3QoYCN1LXRhYi1pdGVtLSR7aX1gKS5maWVsZHMoe1xyXG5cdFx0XHRcdFx0XHRzaXplOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRyZWN0OiB0cnVlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5omn6KGM5p+l6K+i77yM5LiA5qyh5oCn6I635Y+W5aSa5Liq57uT5p6cXHJcblx0XHRcdFx0cXVlcnkuZXhlYyhcclxuXHRcdFx0XHRcdGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRhYlF1ZXJ5SW5mbyA9IHJlcztcclxuXHRcdFx0XHRcdFx0Ly8g5Yid5aeL5YyW5rua5Yqo5p2h5ZKM56e75YqoYmFy55qE5L2N572uXHJcblx0XHRcdFx0XHRcdHRoaXMuc2Nyb2xsQnlJbmRleCgpO1xyXG5cdFx0XHRcdFx0fS5iaW5kKHRoaXMpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5rua5Yqoc2Nyb2xsLXZpZXfvvIzorqnmtLvliqjnmoR0YWLlpITkuo7lsY/luZXnmoTkuK3pl7TkvY3nva5cclxuXHRcdFx0c2Nyb2xsQnlJbmRleCgpIHtcclxuXHRcdFx0XHQvLyDlvZPliY3mtLvliqh0YWLnmoTluIPlsYDkv6Hmga/vvIzmnIl0YWLoj5zljZXnmoR3aWR0aOWSjGxlZnQo5Li65YWD57Sg5bem6L6555WM5Yiw54i25YWD57Sg5bem6L6555WM55qE6Led56a7KeetieS/oeaBr1xyXG5cdFx0XHRcdGxldCB0YWJJbmZvID0gdGhpcy50YWJRdWVyeUluZm9bdGhpcy5jdXJyZW50SW5kZXhdO1xyXG5cdFx0XHRcdGlmICghdGFiSW5mbykgcmV0dXJuO1xyXG5cdFx0XHRcdC8vIOa0u+WKqHRhYueahOWuveW6plxyXG5cdFx0XHRcdGxldCB0YWJXaWR0aCA9IHRhYkluZm8ud2lkdGg7XHJcblx0XHRcdFx0Ly8g5rS75YqoaXRlbeeahOW3pui+ueWIsHRhYnPnu4Tku7blt6bovrnnmoTot53nprvvvIznlKhpdGVt55qEbGVmdOWHj+WOu3RhYnPnmoRsZWZ0XHJcblx0XHRcdFx0bGV0IG9mZnNldExlZnQgPSB0YWJJbmZvLmxlZnQgLSB0aGlzLnBhcmVudExlZnQ7XHJcblx0XHRcdFx0Ly8g5bCG5rS75Yqo55qEdGFicy1pdGVt56e75Yqo5Yiw5bGP5bmV5q2j5Lit6Ze077yM5a6e6ZmF5LiK5piv5a+5c2Nyb2xsLXZpZXfnmoTnp7vliqhcclxuXHRcdFx0XHRsZXQgc2Nyb2xsTGVmdCA9IG9mZnNldExlZnQgLSAodGhpcy5jb21wb25lbnRXaWR0aCAtIHRhYldpZHRoKSAvIDI7XHJcblx0XHRcdFx0dGhpcy5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCA8IDAgPyAwIDogc2Nyb2xsTGVmdDtcclxuXHRcdFx0XHQvLyDlvZPliY3mtLvliqhpdGVt55qE5Lit54K554K55Yiw5bem6L6555qE6Led56a75YeP5Y675ruR5Z2X5a695bqm55qE5LiA5Y2K77yM5Y2z5Y+v5b6X5Yiw5ruR5Z2X5omA6ZyA55qE56e75Yqo6Led56a7XHJcblx0XHRcdFx0bGV0IGxlZnQgPSB0YWJJbmZvLmxlZnQgKyB0YWJJbmZvLndpZHRoIC8gMiAtIHRoaXMucGFyZW50TGVmdDtcclxuXHRcdFx0XHQvLyDorqHnrpflvZPliY3mtLvot4NpdGVt5Yiw57uE5Lu25bem6L6555qE6Led56a7XHJcblx0XHRcdFx0dGhpcy5zY3JvbGxCYXJMZWZ0ID0gbGVmdCAtIHVuaS51cHgycHgodGhpcy5iYXJXaWR0aCkgLyAyO1xyXG5cdFx0XHRcdC8vIOesrOS4gOasoeenu+WKqOa7keWdl+eahOaXtuWAme+8jGJhckZpcnN0VGltZU1vdmXkuLp0cnVl77yM5pS+5Yiw5bu25pe25Lit5bCG5YW26K6+572uZmFsc2VcclxuXHRcdFx0XHQvLyDlu7bml7bmmK/lm6DkuLpzY3JvbGxCYXJMZWZ05L2c55So5LqOY29tcHV0ZWTorqHnrpfml7bvvIzpnIDopoHkuIDkuKrov4fnqIvpnIDvvIzlkKbliJnlr7zoh7Tlh7rplJlcclxuXHRcdFx0XHRpZih0aGlzLmJhckZpcnN0VGltZU1vdmUgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYmFyRmlyc3RUaW1lTW92ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSwgMTAwKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdEBpbXBvcnQgXCIuLi8uLi9saWJzL2Nzcy9zdHlsZS5jb21wb25lbnRzLnNjc3NcIjtcclxuXHJcblx0dmlldyxcclxuXHRzY3JvbGwtdmlldyB7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdDo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcblx0Ojotd2Via2l0LXNjcm9sbGJhcixcclxuXHQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR3aWR0aDogMCAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC51LXNjcm9sbC1ib3gge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LyogI2lmZGVmIE1QLVRPVVRJQU8gKi9cclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC8qICNpZmRlZiBINSAqL1xyXG5cdC8vIOmAmui/h+agt+W8j+epv+mAj++8jOmakOiXj0g15LiL77yMc2Nyb2xsLXZpZXfkuIvnmoTmu5rliqjmnaFcclxuXHRzY3JvbGwtdmlldyA6OnYtZGVlcCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR3aWR0aDogMCAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC51LXNjcm9sbC12aWV3IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC51LXRhYi1pdGVtIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgY29sb3I7XHJcblx0fVxyXG5cclxuXHQudS10YWItYmFyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC51LXRhYnMtc2NvcmxsLWZsZXgge1xyXG5cdFx0QGluY2x1ZGUgdnVlLWZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3UtdGFicy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYjJiMWE4MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4v5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL+W8gOWPkeW3peWFty9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi/lvIDlj5Hlt6XlhbcvSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdS10YWJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNiMmIxYTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NDE0Nzc5NzgyNDNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDov5byA5Y+R5bel5YW3L0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-tabs/u-tabs-create-component',
    {
        'uview-ui/components/u-tabs/u-tabs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(327))
        })
    },
    [['uview-ui/components/u-tabs/u-tabs-create-component']]
]);
