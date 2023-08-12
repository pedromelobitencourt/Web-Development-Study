// lexical context == scope

const hello = 'Hey'; // lexical context 1

function exec() {
    const hello = 'hey'; // lexical context 2
    return hello;
}

const client = {
    name: 'Pedro',
    age: 21
}; // lexical context 3

