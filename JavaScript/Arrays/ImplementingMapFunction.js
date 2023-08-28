Array.prototype.map2 = function(callback) {
    const size = this.length;
    const newArray = [...this]; // Shallow copy

    for(let i = 0; i < size; i++) {
        newArray[i] = callback(this[i], i, this);
    }

    return newArray;
}

const shoppingCart = [
    '{ "name": "Eraser", "price": 3.45 }',
    '{ "name": "Notebook", "price": 13.90 }',
    '{ "name": "Pencil Kit", "price": 41.22 }',
    '{ "name": "Pen", "price": 7.50 }'
];

const turnToObj = json => JSON.parse(json);
const getPrice = product => product.price;

const prices = shoppingCart.map2(turnToObj).map2(getPrice);
console.log(prices); // [ 3.45, 13.9, 41.22, 7.5 ]