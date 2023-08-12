{ { { { var sera = 'Really?' } } } };

console.log(sera); // 'Really?' : We can access 'sera', even though 'sera' is inside another scope

function test() {
    var local = 123;
};

test();

console.log(local); // It's not defined

// If you create a var outside a function, it will be GLOBALLY accessable