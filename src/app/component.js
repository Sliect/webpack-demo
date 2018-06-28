import Vue from 'vue';

export default (text = 'hello world') => {
  const element = document.createElement('div')
  console.log(Vue)
  element.innerHTML = text
  return element
}