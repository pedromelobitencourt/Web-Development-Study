// setTimeout(function() {
//     console.log('Executing 1');

//     setTimeout(function() {
//         console.log('Executing 2');
//     }, 2000) // 2 sec
// }, 2000);

function waitFor(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executing promise');
            resolve(); // This is the 'then'; 'resolve' executes the function inside the 'then'
        }, time)
    });
}


waitFor()
    .then(waitFor)
    .then(waitFor);