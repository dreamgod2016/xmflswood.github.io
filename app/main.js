require('./css/bubble.css');
require('./css/stars.scss');

require('./css/code.css');
require('./css/full.css');
require('./css/cursor.css');
require.ensure([], function(require) {
  const love = require('./js/go.js');
  //等待加载完
  window.onload = () => {
   love.go();
  }
})

