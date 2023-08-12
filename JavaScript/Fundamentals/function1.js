// no return function
function printSum(a, b) {
    console.log(a + b);
};

printSum(2, 3); // 5
printSum(33); // NaN: b will be undefined
printSum(37, 9, 3, 3); // 46 : It will ignore the rest
printSum(); // NaN

// return function
function sum(a, b = 0) { // By default, b will be 0 if not passed
    return a + b;
};

console.log(sum(2, 3)); // 5
console.log(sum(9)); // 9