console.log(module.exports === this); // true
console.log(module.exports === exports); // true

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null; // It references module.exports, but if you change the reference, it will not work, but module.exports will
console.log(module.exports); // { a: 1, b: 2, c: 3 }

// It will return always 'module.exports'