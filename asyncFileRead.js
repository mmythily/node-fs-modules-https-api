var fs = require('fs');

var readPath = 'test_read_me.txt';
var writePath = 'test_async.txt';

fs.readFile(readPath, 'utf8', function(err,data){
    
    //Will write the content from one file to another
    fs.writeFile(writePath, data, function(err){
        if (err) throw err;
    });

});