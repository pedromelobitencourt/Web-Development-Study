function waitFor(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            // console.log('Executing promise');
            resolve(); // This is the 'then'; 'resolve' executes the function inside the 'then'
        }, time)
    });
}

function returnValue() {
    return new Promise(resolve => {
        setTimeout(() => resolve(9), 1000);
    })
}

async function execute() { // Synchronizing
    let value = await returnValue();

    await waitFor(1000); // The next lines will only be executed once this line is totally executed
    console.log(value);

    await waitFor(1500); // The function should return a Promise
    console.log(value + 1);

    await waitFor(2000);
    console.log(value + 2);

    return value + 3; // It returns a Promise
}

execute()
    .then(value => console.log(`The returned value is: ${value}`));