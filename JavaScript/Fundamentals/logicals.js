function buy(a, b) {
    // const buyTV32 = !!(a ^ b); // bitwise xor
    const buyTV32 = a != b;
    const buy = true;

    return { buyTV32, buy: buy }; // Same thing if the value has the same name as the key
}