// var copyfiles = require('copyfiles');
//
// copyfiles([
//   './package.json',
//   './bin',
// ], true, function () {
//   console.log('index.html copied to bin');
// });

var fs = require('fs');
var package = require('./package.json');

delete package.devDependencies;
package.description = 'production npm to start built project';
package.scripts = { start: 'node ./server' };

fs.writeFile('bin/package.json', JSON.stringify(package));
