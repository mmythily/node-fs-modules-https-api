var fs = require('fs');

var filePath = './test_sync.txt';
var fileData = 'Testing sync file write. \n';

fs.writeFileSync(filePath, fileData);

console.log('successfully wrote to', filePath);