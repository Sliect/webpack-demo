import component from './component';
import ElementUI from 'element-ui';
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

document.body.appendChild(component())
console.log(Vue)
console.log(ElementUI)