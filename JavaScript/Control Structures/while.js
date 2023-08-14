function getRandomNumberBetween(min, max) {
    const value = Math.random() * (max - min) + min;
    
    return Math.floor(value);
}

let option = 0;

while(option != -1) { // Undetermined number of repeatitions
    option = getRandomNumberBetween(-1, 10);
    console.log(option);
}

console.log('End');