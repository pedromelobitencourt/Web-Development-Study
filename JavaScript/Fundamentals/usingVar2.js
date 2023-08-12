var number = 1;

{
    var number = 2; // the inside number = the outside number
    console.log('Inside: ', number); // Inside: 2
}

console.log('Outside: ', number); // Outside: 2
