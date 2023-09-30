const technologies = new Map();

technologies.set('react', { framework: false });
technologies.set('angular', { framework: true });

console.log(technologies.react); // undefined
console.log(technologies.get('react').framework);

const miscellaneousKeys = new Map([
    [function () { }, 'Function'],
    [{}, 'Object'],
    [123, 'Number']
]);


miscellaneousKeys.forEach((value, key) => {
    console.log(key, value);
});


console.log(miscellaneousKeys.has(123)); // true
console.log(miscellaneousKeys.delete(123)); // true. It found the value and deleted it
console.log(miscellaneousKeys.size) // 2