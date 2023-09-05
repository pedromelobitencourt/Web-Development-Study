// Importing some things from other modules (files)
const moduleA = require('./moduleA'); // Relative path to moduleA.js
const moduleB = require('./moduleB.js'); // Relative path to moduleB.js; You can put '.js' or not if its a JavaScript file

console.log(moduleA.hello);
console.log(moduleA.welcome);
console.log(moduleA.seeYou);
console.log(moduleA); // { hello: 'Hello, guys!', welcome: 'Welcome to Node.js', seeYou: 'See you next time!' }

console.log(moduleB.goodMorning);
console.log(moduleB.goodNight());
console.log(moduleB); // { goodMorning: 'Good morning!', goodNight: [Function: goodNight] }