for(let letter of 'Coding' ) {
    console.log(letter);
};
console.log();


const ECMA_subjects = ['Promise', 'Map', 'Set'];

for(let i in ECMA_subjects) { // Indexes
    console.log(i);
}
console.log();

for(let i of ECMA_subjects) { // Indexes
    console.log(i);
}
console.log();


const mapSubjects = new Map([
    ['Map', { talked: true }],
    ['Set', { talked: true }],
    ['Promise', { talked: false }]
]);

for(let subject of mapSubjects) {
    console.log(subject);
};
console.log();