const daughters = ['Ualeskah', 'Cibalena'];
const sons = ['Uoxiton', 'Uesclei'];

let all = daughters.concat(sons);

console.log(all, daughters, sons); // [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ] [ 'Ualeskah', 'Cibalena' ] [ 'Uoxiton', 'Uesclei' ]

all = daughters.concat(sons, "Someone");

console.log(all); // [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei', 'Someone' ]


console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]