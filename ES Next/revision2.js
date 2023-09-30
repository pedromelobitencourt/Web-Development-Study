        // Arrow function
const sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5


        // Arrow function (this)
const lexical1 = () => console.log(this === exports);
const lexical2 = lexical1.bind({});

lexical1();
lexical2();
lexical1();


        // Default parameter
function log(text='Node') {
    console.log(text);
}

log();


// Rest operator
function total(...numbers) {
    let total = 0;

    numbers.forEach(n => total + n);

    console.log(total);
}