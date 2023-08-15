// Closure: It's the scope of a created function
// This scope allows the function to access and manipulate outer variables
const x = 'Global';

function outer() {
    const x = 'Local';

    function inside() {
        return x;
    }

    return inside();
}

const myFunction = outer;
console.log(myFunction()); // Local, because 'Local' is closer to x than 'Global'