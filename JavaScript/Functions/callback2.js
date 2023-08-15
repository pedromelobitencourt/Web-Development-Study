const grades = [7.7, 8.9, 9.8, 3.7, 1.9, 9.3];

// Without callback
let badGrades = [];

for(let i in grades) {
    if(grades[i] < 7) badGrades.push(grades[i]);
}

console.log(badGrades); // [ 3.7, 1.9 ]


// It doesn't change the 'grades'; The function must return a boolean value (If the element will be included or not)
badGrades = grades.filter(function(grade) { // Filter: return an array
    return grade < 7;
});

console.log(badGrades); // [ 3.7, 1.9 ]


badGrades = grades.filter(nota => nota < 7);

console.log(badGrades); // [ 3.7, 1.9 ]