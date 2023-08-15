// Auto invoked function: It won't access other scope variables
// IIFE: Immediately Invoked Function Expression

(function() { // It must be inside '()'
    console.log('Its going to be executed immediately');
    console.log('It cant access variables outside of the function');
})(); // this last '()' : immediately invoke