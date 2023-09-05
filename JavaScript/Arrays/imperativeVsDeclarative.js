const students = [
    { name: 'John', grade: 7.9 },
    { name: 'Maria', grade: 9.2 }
];


// Imperative
let total1 = 0;

for (let i = 0; i < students.length; i++) {
    total1 += students[i].grade;
}

console.log(total1 / students.length);


// Declarative: recommended
// You can reuse the functions
const getGrade = student => student.grade;
const sum = (total, current) => total + current;

// There are less attention to intern details
const total2 = students.map(getGrade).reduce(sum);
console.log(total2 / students.length);