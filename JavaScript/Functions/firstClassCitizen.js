function fun1() { // If the function doesn't return anything, it returns 'undefined'

}

const fun2 = function () { };

const array = [function (a, b) { return a + b }, fun1, fun2];

const obj = {};
obj.say = function() { return 'Hey' };

function run(fun) {
    fun();
}

run(function () { console.log('Exec') });


function sum(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}

sum(2, 3)(8); // sum(2, 3) is a function

console.log(fun1());