function Person1() {
    this.age = 0;

    // Put the attributes of 'this' with '.bind(this)', if not it would show 'NaN'
    setInterval(function() {
        this.age++;
        console.log(this.age);
    }.bind(this), 1000); // Every 1000ms, the function is executed
}

function Person2() {
    this.age = 0;

    const self = this; // It won't change 'this'
    setInterval(function() {
        self.age++;
        console.log(self.age);
    }, 1000); // Every 1000ms, the function is executed
}

// new Person1(); // a new object
new Person2(); // a new object
