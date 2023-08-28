/*
 * Challenge: Implement map functions such that it returns only the prices
*/

const shoppingCart = [
    '{ "name": "Eraser", "price": 3.45 }',
    '{ "name": "Notebook", "price": 13.90 }',
    '{ "name": "Pencil Kit", "price": 41.22 }',
    '{ "name": "Pen", "price": 7.50 }'
];

const turnToObj = json => JSON.parse(json);
const getPrice = product => product.price;

const prices = shoppingCart.map(turnToObj).map(getPrice);
console.log(prices); // [ 3.45, 13.9, 41.22, 7.5 ]