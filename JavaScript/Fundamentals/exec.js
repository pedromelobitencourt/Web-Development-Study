// In node, each file is a module, unlike in web

let a = 3;
global.b = 123;
this.c = 465;

console.log(a); // 3
console.log(global.b); // 123
console.log(this.c); // 465
console.log(module.exports.c); // 465
console.log(module.exports === this); // true

aiu = 3; // to the module.exports (without 'var', 'const', 'let')
console.log(global.aiu); // 3