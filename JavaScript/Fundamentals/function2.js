// Storing a function into a variable

const printSum = function(a, b) { // Anonymous function
    console.log(a + b);
};

printSum(2, 3); // 5

// Storing an arrow function into a variable
const sum = (a, b) => { // Inside '()', there are the parameters and after '=>' there are the function
    return a + b;
};

console.log(sum(2, 3)); // 5

const minus = (a, b) => a - b;

console.log(minus(5, 2)); // 3

const print2 = a => console.log(a);

print2(989); // 989