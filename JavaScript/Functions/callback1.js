// Callback: When an event occurs, a function will be called

const manufactures = ['Mercedes', 'Audi', "BMW"];

function print(name, index) {
    console.log(`${index + 1}. ${name}`);
}

manufactures.forEach(print); // For each element, it will call 'print'
console.log();

manufactures.forEach(function(a) { // 'a' will be each element in 'manufactures' array
    console.log(a);
});