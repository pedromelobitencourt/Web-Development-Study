function generateNumberBetween(min, max, time) {
    if(min > max) [max, min] = [min, max];

    return new Promise(function(res) {
        setTimeout(function() {
            const random = parseInt(Math.random() * (max - min + 1)) + min;
            res(random);
        }, time)
    })
}

function generateNumbers() {
    return Promise.all([ // When all promises are ready; For paralelism (everyone)
        generateNumberBetween(1, 60, 4000),
        generateNumberBetween(1, 60, 1000),
        generateNumberBetween(1, 60, 500),
        generateNumberBetween(1, 60, 3000),
        generateNumberBetween(1, 60, 1500)
    ])
}

console.time('promise');
generateNumbers()
    .then(numbers => console.log(numbers))
    .then(() => {
        console.timeEnd('promise') // 4.008s
    })
;