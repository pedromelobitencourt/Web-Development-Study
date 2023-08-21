const obj = { a: 1, b: 2, c: 3, sum() { return a + b + c; } };
// Converting it to JSON; Text format
console.log(JSON.stringify(obj)); // {"a": 1, "b": 2, "c": 3}: There is only data, it's not executable

// Turning it back to object
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); // Only in this way

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }')); 