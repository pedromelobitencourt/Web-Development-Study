function generateNumberBetween(min, max, repeatedNumbers) {
    if(min > max) [max, min] = [min, max];

    return new Promise(function(res) {
        const random = parseInt(Math.random() * (max - min + 1)) + min;

        if(repeatedNumbers.includes(random)) {
            reject('Repeated Number');
        }
        else {
            res(random);
        }
    })
}

async function generatePowerBallNumbers(qnt, tries = 1) {
    try {
        const numbers = [];

        for(let _ of Array(qnt).fill()) {
            numbers.push(await generateNumberBetween(1, 60, numbers));
        }

        return numbers;
    }
    catch(e) { // 'Repeated Number' from "generateNumberBetween"'s reject
        if(tries > 10) return `It's so hard to generate ${qnt} non repeated numbers`;
        else {
            return generatePowerBallNumbers(qnt, tries + 1);
        }
    }
}

generatePowerBallNumbers(15)
    .then(console.log)
    .catch(console.log);