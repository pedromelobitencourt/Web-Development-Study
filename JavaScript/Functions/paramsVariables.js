function sum() {
    let sum = 0;

    for(i in arguments) {
        sum += arguments[i];
    }

    return sum;
}

console.log(sum()); // 0
console.log(sum(2, 7)); // 9
console.log(sum(9, 8, 7)); // 24
console.log(sum(1.1, 2.2, 'Teste')); // 3.3...3Teste