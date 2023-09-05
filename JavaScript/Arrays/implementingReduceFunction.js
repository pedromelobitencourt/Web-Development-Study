Array.prototype.reduce2 = function(callback, initialValue) {
    const initialIndex = initialValue ? 0 : 1;

    let accumulator = initialValue || this[0];
    const size = this.length;

    for(let i = initialIndex; i < size; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

const sum = (total, value) => total + value;
const nums = [1, 2, 3, 4, 5, 6, 7];

console.log(nums.reduce2(sum));