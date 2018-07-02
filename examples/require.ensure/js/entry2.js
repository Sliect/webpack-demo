require.ensure(['./a.js'], function (require) {
  // require('./a.js')
  require('./b.js');
}, 'vendor');