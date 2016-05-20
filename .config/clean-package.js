var fs = require('fs');
var package = require('./../package.json');

delete package.devDependencies;
delete package.dependencies;
package.description = 'production npm to start built project';
package.scripts = { start: 'node ./server' };

fs.writeFile('./bin/package.json', JSON.stringify(package));
