const obj1 = {};

console.log(typeof Object, typeof new Object); // function object

const obj2 = new Object;

function Product(name, price, discount) {
    this.name = name; // We can only access the name outside the function ('this')

    this.getDiscountPrice = () => {
        return price * (1 - discount);
    }
}

const p1 = new Product('Pen', 7.99, 0.15);
const p2 = new Product('Pen', 2998.99, 0.25);

console.log(p1.getDiscountPrice(), p2.getDiscountPrice()); // 6.7915 2249.2425

// Factory Function
function createEmployee(name, salary, misses) {
    return {
        name,
        salary,
        misses,
        getSalary() {
            return (salary / 30) * (30 - misses);
        }
    }
}

const e1 = createEmployee('John', 7980, 4);
const e2 = createEmployee('Peter', 18900, 3);

console.log(e1.getSalary(), e2.getSalary()); // 6916 17010


// Object.create
const child = Object.create(null);
child.name = 'Anna';
console.log(child); // { nome: 'Anna' }


const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON); // { info: 'Sou um JSON' }
console.log(fromJSON.info); // Sou um JSON