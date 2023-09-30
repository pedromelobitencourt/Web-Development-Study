// Process a template string inside a function

function tag(parts, ...values) {
    console.log(parts); // [ '', ' is ', '.' ]
    console.log(values); // [ 'Pedro', 'Approved ]
    return 'Another string';
};

const student = 'Pedro';
const status = 'Approved';
console.log(tag`${student} is ${status}.`);