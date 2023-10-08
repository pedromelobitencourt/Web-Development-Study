const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'data.txt');

function readFile(pathh) {
    return new Promise(function(res) {
        fs.readFile(pathh, function(_, content) {
            res(content.toString());
        })
    })
}

readFile(file)
    .then(console.log);