function getRandomNumberBetween(min, max) {
    const value = Math.random() * (max - min) + min;

    return Math.floor(value);
}


let option = -1;



do { // Undetermined number of repeatitions; Do always at least once
    option = getRandomNumberBetween(-1, 10);
    console.log(option);
} while(option != -1);

console.log('End');