function test1(num) {
    if(num > 7)
        console.log(num); // Only this sentence is in 'if' block
    console.log('Final');
}

test1(3);

function test2(num) {
    if(num >= 7); { // Only ';' in the if block. The 'console.log' is in another block
        console.log(num);
    }
}

test2(4); // 4
test2(7); // 7