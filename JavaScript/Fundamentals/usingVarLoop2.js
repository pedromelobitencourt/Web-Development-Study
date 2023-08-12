const funcs = [];

for(var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i); // It's like a pass by reference
    });
}

funcs[2](); // 10
funcs[8](); // 10