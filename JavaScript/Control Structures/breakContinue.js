const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(x in nums) {
    if(x == 5) break;
    console.log(x);
}

for(y in nums) {
    if(y == 5) continue;
    console.log(y);
}


outer:
for(a in nums) {
    for(b in nums) {
        if(a == 2 && b == 3) break outer; // It will leave the outer loop
        console.log(a, b);
    }
}