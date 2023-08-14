function area(width, height) {
    const area = width * height;

    if(area > 20) {
        console.log('The value exceeds the limit');
        // returns undefined
    }
    else return area;
}

console.log(area(2, 2)); // 4
console.log(area(2)); // NaN
console.log(area()); // NaN
console.log(area(2, 3, 17, 22)); // 6
console.log(area(5, 5)); // undefined