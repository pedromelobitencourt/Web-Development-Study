let compareWithThis = function(param) {
    console.log(this === param);
}

compareWithThis(global); // true; 'global' only works with node

const obj = {};
compareWithThis = compareWithThis.bind(obj); // 'this' of 'obj'
compareWithThis(global); // false;
compareWithThis(obj); // true

compareWithThis = param => console.log(this === param);
compareWithThis(global); // false
compareWithThis(module.exports); // true
compareWithThis(this); // true


compareWithThis = compareWithThis.bind(obj); // It doesn't change anything
compareWithThis(obj); // false