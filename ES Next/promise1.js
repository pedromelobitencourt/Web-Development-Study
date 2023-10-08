let p = new Promise(function(fulfillPromise) { // Only a parameter (but it can be an object for instance)
    fulfillPromise(['Anna', 'Pedro', 'Lucas', 'Rafael']);
});

// p
//     .then(returnedValue => returnedValue[0])
//     .then(firstName => firstName[0])
//     .then(firstLetter => console.log(firstLetter));


function firstElement(array) {
    return array[0];
}

function firstLetter(string) {
    return string[0];
}


p
    .then(firstElement)
    .then(firstLetter)
    .then(value => console.log(value));

// Usually 'fulfillPromise' function is called 'res' or 'resolve'