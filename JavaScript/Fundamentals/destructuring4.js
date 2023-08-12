function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min];
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 40])); // only max
console.log(rand([]));
// console.log(rand()); // Error
