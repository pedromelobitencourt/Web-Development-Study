const fs = require('fs')

const path = __dirname + '/file.json';

// Synchronized
const content = fs.readFileSync(path, 'utf-8');
console.log(content, '\n');


// Assynchronized: Better for big files
fs.readFile(path, 'utf-8', (err, content) => { // When the file is ready, the callback will be fired
    // const config = content;
    // console.log(`${config.db.host}:${config.db.port}`); // error, config is a string
    
    const config = JSON.parse(content);
    console.log(`${config.db.host}:${config.db.port}\n`); // error, config is a string
});


const config = require('./file.json'); // Synchronized
console.log(config, '\n');


fs.readdir(__dirname, (err, files) => {
    console.log(files);
});
console.log('\n');