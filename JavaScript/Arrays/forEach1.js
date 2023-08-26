const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

approved.forEach(function(name, index) { // element, index
    console.log(`${index + 1}: ${name}`);
});

approved.forEach(name => console.log(name));

const printApproved = approved => console.log(approved);

approved.forEach(printApproved);

// The for each function can also get the array
approved.forEach(function(name, index, array) { // element, index
    console.log(`${index + 1}: ${name}`);
    console.log(array);
});