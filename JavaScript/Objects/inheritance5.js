console.log(typeof String); // function
console.log(typeof Array); // function
console.log(typeof Object); // function

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

console.log('Coder School'.reverse());

Array.prototype.first = function () {
    return this[0];
}