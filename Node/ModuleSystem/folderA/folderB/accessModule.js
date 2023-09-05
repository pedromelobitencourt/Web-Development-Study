const moduleA = require('./../../moduleA');
console.log(moduleA.hello);

// const folderC = require('./folderC/index');
const folderC = require('./folderC'); // We can omit the index.js


// const http = require('http');
// http.createServer((req, res) => {
//     res.write('Good morning!');
//     res.end();
// }).listen(8080);