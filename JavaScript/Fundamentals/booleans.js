let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1; // Now 'isActive' is a number
console.log(!!isActive);

console.log('\nTrue: ');
console.log(!!3); // All numbers are true, except 0
console.log(!!(-1));
console.log(!!' ');
console.log(!!'asnihiu')
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));
console.log();

console.log('False: ');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));
console.log();

console.log(!!('' || null || 0 || ' ')); // true
console.log(('' || null || 0 || 'epa')); // epa

let nome = '';
console.log(nome || 'Unknown'); // nome is false
