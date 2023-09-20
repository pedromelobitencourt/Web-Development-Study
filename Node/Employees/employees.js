const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios'); // It makes requisitions http
const { isUndefined } = require('lodash');

let employees = []

const getWomen = person => person.genero === 'F';
const getChinese = person => person.pais === 'China';
const lowestIncome = (employee, curEmployee) => {
    return employee.salario < curEmployee.salario ? employee : curEmployee;
}

axios.get(url).then(response => {
    employees = response.data;

    // Challenge: Get the chinese woman with the lowest income   
    const women = employees.filter(getWomen);
    const chineseWomen = women.filter(getChinese);
    const chineseWomanWithLowestIncome = chineseWomen.reduce(lowestIncome);

    console.log(chineseWomanWithLowestIncome);
});

