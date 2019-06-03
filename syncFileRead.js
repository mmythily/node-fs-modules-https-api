var fs = require('fs');

var readPath = 'test_read_me.txt';
var writePath = 'test_sync.txt';

var read = fs.readFileSync (readPath, 'utf8');

console.log('reading...' + read);

fs.writeFileSync(writePath, read);