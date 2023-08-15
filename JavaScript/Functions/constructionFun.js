function Car(maxVel = 200, delta = 5) {
    // private attribute
    let currentVel = 0;

    // public method (using 'this')
    this.accelerate = function () {
        if(currentVel + delta <= maxVel)
            currentVel += delta;
        else currentVel = maxVel;
    };

    // public method (using 'this')
    this.getCurrentVelocity = function() {
        return currentVel;
    };

    // Private method
    const privateMethod1 = function() {
        console.log('Private method 1');
    };

    // Private method
    let privateMethod2 = function() {
        console.log('Private method 2');
    };
}

const uno = new Car; // default parameters or no parameter
uno.accelerate();
console.log(uno.getCurrentVelocity()); // 5

const ferrari = new Car(350, 20);
ferrari.accelerate();
ferrari.accelerate();
console.log(ferrari.getCurrentVelocity()); // 40