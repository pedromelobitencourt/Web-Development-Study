const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilots.pop(); // Removes Massa, last element
console.log(pilots);

pilots.push('Verstappen');
console.log(pilots);

pilots.shift(); // Removes the first element
console.log(pilots);

pilots.unshift('Hamilton'); // Adds an item to the beginning of the array
console.log(pilots);

// Adding using splice
pilots.splice(2, 0, 'Bottas', 'Massa'); 
console.log(pilots); // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// Removing using splice
pilots.splice(3, 1); // Removes the index 3
console.log(pilots);

const somePilots1 = pilots.slice(2); // Returns a new array that starts from index 2
console.log(somePilots1);

const somePilots2 = pilots.slice(1, 4); // It will get the elements between 1 and (4 - 1)
console.log(somePilots2);