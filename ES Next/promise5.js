function workOrNot(value, errorChance) {
    return new Promise((resolve, reject) => {
        if(Math.random() < errorChance) {
            reject('There was an error');
        }
        else {
            resolve(value);
        }
    })
}

workOrNot('Testing', 0.1)
    .then(value => `The value is: ${value}`)
    .then(
        v => consol.log(v), // If it calls 'resolve'
        err => console.log(`Second then error: ${err}`) // It handles its only error
    )
    .catch(e => console.log(`Error: ${e}`)) // It handles any of the errors that occur above; catch won't be called if the error then has a 'err' function
    .then(() => console.log('End, there is not data coming to here'));