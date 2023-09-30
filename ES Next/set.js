// There is no index and there is no repeated values
const teams = new Set();

teams.add('Flamengo');
teams.add('Cruzeiro');
teams.add('Corinthians');
teams.add('Cruzeiro');

console.log(teams);
console.log(teams.size);
console.log(teams.has('Flamengo')); // true


const names = ['Pedro', 'Rafael', 'Sergio', 'Lucas', 'Lucas'];
const namesSet = new Set(names);
console.log(namesSet);