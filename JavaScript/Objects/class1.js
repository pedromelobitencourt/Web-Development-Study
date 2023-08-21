class Computation {
    constructor(name = 'Generic', value = 0) {
        this.name = name;
        this.value = value;
    }
}

class FinancialCycle {
    constructor(month, year) {
        this.month = month;
        this.year = year;
        this.computations = [];
    }

    addComputations(...computations) {
        computations.forEach(c => this.computations.push(c));
    }

    sumary() {
        let finalValue = 0;

        this.computations.forEach(c => finalValue += c.value);

        return finalValue;
    }
}

const salary = new Computation('Salary', 45000);
const electricityBill = new Computation('Electricity', -220);

const bills = new FinancialCycle(7, 2023);
bills.addComputations(salary, electricityBill);
console.log(bills.sumary()); 44780