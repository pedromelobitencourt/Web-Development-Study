// Anonymous function is a function without a name
const sum = function(x, y) {
    return x + y;
};

const printResult = function(a, b, operation = sum) {
    console.log(operation(a, b));
}

printResult(3, 8); // 11
printResult(10, 3, function(x, y) {
    return x - y;
}); // 7
printResult(3, 4, (x, y) => x * y); // 12

const person = {
    say: function() {
        console.log('Hello');
    }
};

person.say(); // 'Hello'