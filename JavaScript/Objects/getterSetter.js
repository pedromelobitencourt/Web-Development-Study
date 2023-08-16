const sequence = {
    _value: 1, // _: convenction that it's a private value
    get value() { return this._value++; },
    set value(value) { 
        if(value > this._value) this._value = value;
    }
};

console.log(sequence.value, sequence.value); // get method
sequence.value = 999; // set method
