const school = 'Cod3r';

console.log(school[4]); // r
console.log(school[5]); // undefined
console.log(school.charAt(4)); // r
console.log(school.charAt(5)); // vazio

console.log(school.charCodeAt(3)); // Unicode table code of '3'

console.log(school.indexOf('3')); // 3 (index)
console.log(school.indexOf('4')); // -1 (not found)

console.log(school.substring(1)); // od3r
console.log(school.substring(1, 3)); // od : It doesn't include the '3'

console.log('School '.concat(school).concat('!')); // School Cod3r!
console.log('School ' + school + "!");

console.log(school.replace('3', 'e')); // Coder

console.log('Ana, Maria, Pedro'.split(',')); // ',' is the separator