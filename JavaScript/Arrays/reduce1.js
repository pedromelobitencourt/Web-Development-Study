const students = [
    { name: 'John', grade: 7.3, scholar: false },
    { name: 'Maria', grade: 9.2, scholar: true },
    { name: 'Pedro', grade: 9.8, scholar: false },
    { name: 'Ana', grade: 8.7, scholar: true }
];


// The second argument of reduce is the initial value of the accumulator

// In the first iteration, the accumulator is students[0] and the current is students[1] 
// (If the initial value is not passed, the first iteration will be students[0] and students[1])
const result = students.map(student => student.grade).reduce((accumulator, current) => {
    console.log(accumulator, current);
    return accumulator + current;
});

console.log(result); // 35