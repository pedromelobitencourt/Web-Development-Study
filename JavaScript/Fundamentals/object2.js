console.log(typeof Object); // function
console.log(typeof new Object); // object

const Client = function() {};
console.log(typeof Client); // function
console.log(typeof new Client); // object

class Product {};
console.log(typeof Product); // function
console.log(typeof new Product); // object