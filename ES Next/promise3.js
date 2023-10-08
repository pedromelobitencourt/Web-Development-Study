function generateNumberBetween(min, max) {
    if(min > max) [max, min] = [min, max];

    return new Promise(function(res) {
        const random = parseInt(Math.random() * (max - min + 1)) + min;
        res(random);
    })
}

generateNumberBetween(15, 19)
    .then(num => num * 10)
    .then(numX10 => console.log(`The number is ${numX10}`));