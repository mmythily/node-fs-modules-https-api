//https://nodejs.org/api/https.html
const https = require('https');

console.log('I did it')

const options = {
    host:'www.example.org',
    path:'/'
};

const callback = () => {
    console.log(`In response handler callback!`);
}

console.log(`I'm about to make the request!`);

//Makes a request to a secure web server.
https.request(options, callback).end();

/*
const https = require('https');

const options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET'
};

const req = https.request(options, (res) => {
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

console.log(`I've made the request!`);