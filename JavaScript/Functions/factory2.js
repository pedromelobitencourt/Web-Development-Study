function createProduct(name, price) {
    return {
        name,
        price,
        discount: 0.1
    };
}

console.log(createProduct('Notebook', 2999));
console.log(createProduct('iPad', 4999));
