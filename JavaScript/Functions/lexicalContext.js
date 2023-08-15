const value = 'Global';

function myFunction() {
    console.log(value);
}

function exec() {
    const value = 'Local';
    myFunction();
}

exec(); // Global, because 'myFunction' can't see 'value = 'Local''