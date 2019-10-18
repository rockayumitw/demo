import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from './i18n'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/main.css'

import $ from 'jquery'

// 使用插件
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false
Vue.prototype.$ = $

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* eslint-disable */
// fadeIn
$(function () {
  $('.fade-content > *').css({ 'opacity': '0', 'transform': 'translateY(' + 2 + 'em)' })
  $(window).on('scroll load', function () {
    $('.fade-content > *').each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 8
      var bottom_of_window = $(window).scrollTop() + $(window).height()
      if (bottom_of_window > bottom_of_object) {
        $(this).css({ 'opacity': '1', 'transform': 'translateY(' + 0 + 'em)' })
      } else {
        $(this).css({ 'opacity': '0', 'transform': 'translateY(' + 2 + 'em)' })
      }
    })
  })
})
