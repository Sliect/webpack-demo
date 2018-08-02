// import component from './component';
import ElementUI from 'element-ui';
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

import APP from './APP'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    APP
  },
  template: '<APP />'
})