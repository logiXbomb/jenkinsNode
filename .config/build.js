var copyfiles = require('copyfiles');
var copy = require('copy-files');
var fs = require('fs');
var package = require('./../package.json');

copy({
  files: {
    'index.html': __dirname + '/../client/index.html'
  },
  dest: __dirname + '/../bin/client'
}, function (err) {
  console.log(err, 'client files copied');
});

copy({
  files: {
    'package.json': __dirname + '/../package.json'
  },
  dest: __dirname + '/../bin'
}, function (err) {
  console.log(err, 'npm files copied');
  delete package.devDependencies;
  package.description = 'production npm to start built project';
  package.scripts = { start: 'node ./server' };
  fs.writeFile('./bin/package.json', JSON.stringify(package));
  console.log(err, 'dev devDependencies stripped');
});
