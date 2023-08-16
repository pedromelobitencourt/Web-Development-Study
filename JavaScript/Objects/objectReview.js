const product = new Object;
product.name = 'Chair';
product['brand'] = 'Generic';
product.price = 229;

console.log(product);


delete product.price;

console.log(product); // Now it doesn't hava 'price'


const car = {
    model: 'A4',
    value: 89090,
    owner: {
        name: 'Raul',
        age: 57,
        address: {
            street: 'ABC street',
            number: 137
        }
    },
    drivers: [{
        name: 'Junior',
        age: 19
    }, {
        name: 'Anna',
        age: 35
    }],
    getInsuranceValue: function() {
        // ....
    }
};


car.owner.address.number = 1177;
car['owner']['address']['street'] = 'Avenue something';

console.log(car);

delete car.drivers;
delete car.owner.address;
delete car.getInsuranceValue;

console.log(car);
console.log(car.drivers); // undefined
// console.log(car.drivers.length); // Error