import component from './component';
import ElementUI from 'element-ui';
import Vue from 'vue';

Vue.use(ElementUI)

document.body.appendChild(component())
console.log(Vue)
console.log(ElementUI)