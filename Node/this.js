console.log(this === global); // false
console.log(this === module); // false
console.log(this === module.exports); // true
console.log(this === exports); // true

function logThis() {
    console.log('Inside the function:', this === exports); // false
    console.log('Inside the function:', this === global); // true
}

logThis();