const _ = require('lodash'); // Third party module (from node_modules folder)
setInterval(() => console.log(_.random(1, 1000)), 2000); // It generates a random number between 1 and 1000 every 2 seconds

// npm i 'package'
// Using nodemon, you can modify the code and it will be executed automatically