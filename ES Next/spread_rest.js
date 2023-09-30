// Rest: gather

const employee = {
    name: 'Pedro',
    salary: 123456
};

const clone = { active: true, ...employee };
console.log(clone);
console.log(clone === employee); // False


const groupA = ['Pedro', 'John', 'Maria', 'Anna'];
const finalGroup = ['Petter', 'Raphael', ...groupA, 'Lucas'];
console.log(finalGroup);