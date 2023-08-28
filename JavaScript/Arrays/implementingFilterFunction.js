Array.prototype.filter2 = function(callback) {
    const size = this.length;

    const newArray = [];

    for(let i = 0; i < size; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}


const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'iPad Pro', price: 4199, fragile: true },
    { name: 'Glass Cup', price: 12.49, fragile: true },
    { name: 'Plastic Cup', price: 18.99, fragile: false }
];

const isExpensive = product => product.price >= 500;
const isFragile = product => product.fragile;

const expensiveFragileProducts = products.filter2(isExpensive).filter2(isFragile);
console.log(expensiveFragileProducts);