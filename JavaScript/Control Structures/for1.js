let counter = 1;

while(counter <= 10) {
    console.log(counter);

    counter++;
}

console.log('Outside while:', counter);
console.log();


for(let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log();


const grades = [8.7, 7.4, 9.8, 9.3, 8.1, 7,77];

for(let i = 0; i < grades.length; i++) {
    console.log(`grades[${i}]: ${grades[i]}`);
}