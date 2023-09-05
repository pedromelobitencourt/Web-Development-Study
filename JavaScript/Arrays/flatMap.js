const school = [{
    name: 'Class M1',
    students: [{
        name: 'John',
        grade: 7.9
    }, {
        name: 'Maria',
        grade: 9.2
    }]
}, {
    name: 'Class M2',
    students: [{
        name: 'Joao',
        grade: 9.4
    }, {
        name: 'Rebeca',
        grade: 8.4
    }]
}];

const getStudentGrade = student => student.grade;
const getClassGrades = Class => Class.students.map(getStudentGrade);

const grades1 = school.map(getClassGrades);
console.log(grades1); // [ [ 7.9, 9.2 ], [ 9.4, 8.4 ] ] : 2 arrays with 2 elements each, each element is an array with the grades of the respective class

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

// FlatMap: Turn a matrix into an array

const grades2 = school.flatMap(getClassGrades);