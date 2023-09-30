function real(parts, ...values) {
    const result = [];

    values.forEach((value, index) => {
        value = isNaN(value) ? value : `R$${value.toFixed(2)}`; // It alternates between parts and values: parts[0], values[0], parts[1], values[1]
        result.push(parts[index], value);
    });

    return result.join('');
};

const price = 29.9;
const installmentPrice = 11;
console.log(real`1x of ${price} or 3x of ${installmentPrice}.`);