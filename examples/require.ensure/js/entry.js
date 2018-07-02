require('./a.js');
require.ensure([], function (require) {
  // 这个不会独立出去，因为它已经加载到模块缓存中了
  require('./a.js')
  require('./b.js');
});