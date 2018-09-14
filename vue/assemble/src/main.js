// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import {ajaxPost,ajaxGet,jsonPost} from '@/utils'
import bus from '@/bus';

Vue.prototype.$bus = bus;
Vue.prototype.$ajaxGet = ajaxGet
Vue.prototype.$ajaxPost = ajaxPost
Vue.prototype.$jsonPost = jsonPost
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
