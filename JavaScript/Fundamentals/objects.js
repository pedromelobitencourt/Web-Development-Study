const prod1 = {}; // {} represents an object; key : value (It can be of any type, be a function)

// We can define the attributes and beheavours of an object
prod1.name = 'Ultra mega'; // new attribute; created dynammically
prod1.price = 4998.90;
prod1['Cool discount'] = 0.4; // Avoid spaced key attributes

console.log(prod1);

const prod2 = {
    name: 'Black shirt',
    price: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
};

console.log(prod2);

// object != json (interchange data between systems)
// We can turn an object into a json