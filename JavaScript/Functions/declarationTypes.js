console.log(sum(1, 2)); // 3 : Before declaring it

// Function declaration; We can call 'sum' before declaring it, unlike function expression and named one
function sum(x, y) {
    return x + y;
}


// Function expression
const sub = function(x, y) {
    return x - y;
}


// Named Function expression
const mult = function mult(x, y) { // For debugging
    return x * y;
}


