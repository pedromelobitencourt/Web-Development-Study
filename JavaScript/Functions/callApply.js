function getPrice(tax = 0, currency = 'R$') {
    return `${currency} ${this.price * (1 - this.discount) * (1 + tax)}`;
}

const product = {
    name: 'Notebook',
    price: 4589,
    discount: 0.15,
    getPrice
};

console.log(getPrice()); // R$ NaN

global.price = 20;
global.discount = 0.1;

console.log(getPrice()); // R$ 18
console.log(product.getPrice()); // R$ 3900.65, because of 'this'


const car = { price: 49990, discount: 0.2 };

console.log(getPrice.call(car)); // R$ 39992; The object that will be used as 'this'
console.log(getPrice.apply(car)); // R$ 39992

// The first parameter is the context (car in the above example)
// Then, come the parameters required by the function
console.log(getPrice.call(car, 0.17, '$')); // $ 49790.64


// The first parameter is the context (car in the above example)
// Then, come an array with the parameters of the function
console.log(getPrice.apply(car, [0.17, '$']));