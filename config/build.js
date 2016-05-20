var copyfiles = require('copyfiles');
var fs = require('fs');
var package = require('./../package.json');

copyfiles([
  './../package.json',
  './../bin',
], true, function () {
  console.log('index.html copied to bin');
  delete package.devDependencies;
  package.description = 'production npm to start built project';
  package.scripts = { start: 'node ./server' };

  fs.writeFile('./bin/package.json', JSON.stringify(package));
});
