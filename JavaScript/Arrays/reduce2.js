const students = [
    { name: 'John', grade: 7.3, scholar: false },
    { name: 'Maria', grade: 9.2, scholar: true },
    { name: 'Pedro', grade: 9.8, scholar: false },
    { name: 'Ana', grade: 8.7, scholar: true }
];

// Challenge 1: Are all students scholars?

const allScholars = students.reduce((accumulator, current) => {
    accumulator = accumulator && current.scholar;

    return accumulator;
});

console.log(allScholars);


// Challenge 2: Is any student a scholar?

const anyScholar = students.reduce((accumulator, current) => {
    accumulator = accumulator || current.scholar;

    return accumulator;
}, false);


console.log(anyScholar);