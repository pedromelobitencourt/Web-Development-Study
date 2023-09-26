const fs = require('fs');

const product = {
    name: "Smartphone",
    price: 1349.99,
    discount: 0.15
};

fs.writeFile(__dirname + '/writtenFile.json', JSON.stringify(product), err => {
    console.log(err || 'File saved');
});