const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'iPad Pro', price: 4199, fragile: true },
    { name: 'Glass Cup', price: 12.49, fragile: true },
    { name: 'Plastic Cup', price: 18.99, fragile: false }
];


// The callback has to return true or false
// If true, the element will be added to the new array
console.log(products.filter(function(p) {
    return p.price > 2500;
}));

const isExpensive = product => product.price >= 500;
const isFragile = product => product.fragile;

const expensiveFragileProducts = products.filter(isExpensive).filter(isFragile);
console.log(expensiveFragileProducts);