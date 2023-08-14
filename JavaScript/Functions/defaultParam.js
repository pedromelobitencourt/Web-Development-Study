function sum1(a, b, c) {
    a = a || 1; // If 'a' is false
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

console.log(sum1()); // 3
console.log(sum1(3)); // 5
console.log(sum1(1, 2, 3)); // 6
console.log(sum1(0, 0, 0)); // 3 _____


function sum2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1; // In arguments, is there the index 1?
    c = isNaN(c) ? 1 : c;

    return a + b + c;
}

console.log(sum2()); // 3
console.log(sum2(2)); // 5
console.log(sum2(1, 2, 3)); // 6
console.log(sum2(0, 0, 0)); // 0


function sum3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(sum3()); // 3
console.log(sum3(2)); // 5
console.log(sum3(1, 2, 3)); // 6
console.log(sum3(0, 0, 0)); // 0