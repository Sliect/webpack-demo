import Vue from 'vue'
import VIndex from './pages/VIndex.vue'

new Vue({
  el: '#app',
  components: {
    VIndex
  },
  // render: h => h(VIndex)
  template: '<VIndex/>'
})