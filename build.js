var copyfiles = require('copyfiles');

copyfiles([
  './package.json',
  './bin',
], true, function () {
  console.log('index.html copied to bin');
});
