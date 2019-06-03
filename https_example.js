//https://nodejs.org/api/https.html
var https = require('https');

var options = {
    host:'stream-large-file.herokuapp.com',
    path:'/give-me-stuff-now'
};

var callback = response => {
    console.log(`In response handler callback!`);
    response.on('data', chunk => {
        console.log(`[-- CHuNK OF LENGTH ${chunk.length} --]`);
        console.log(chunk.toString());
    })
}

console.log(`I'm about to make the request!`);

//Makes a request to a secure web server.
https.request(options, callback).end();

console.log(`I've made the request!`);
/*
var https = require('https');

var options = {
    hostname: 'encrypted.google.com',
    port: 443,
    path: '/',
    method: 'GET'
};

var req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
    process.stdout.write(d);
    });
});

req.on('error', (e) => {
    console.error(e);
});
req.end();
*/
