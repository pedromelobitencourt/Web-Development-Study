console.log('01)', '1' == 1); // true : comparing value
console.log('02)', '1' === 1); // false : strictly comparing (the types are different)

const d1 = new Date(0); // 1970
const d2 = new Date(0);

console.log('03)', d1 == d2); // false : comparing reference
console.log('04)', d1 === d2); // false : comparing reference
console.log('05)', d1.getTime() == d2.getTime()); // true
console.log('06)', d1.getTime() === d2.getTime()); // true

console.log('07)', undefined == null); // true
console.log('08)', undefined === null); // false
