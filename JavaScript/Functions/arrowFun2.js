function Person() {
    this.age = 0;

    setInterval(() => { // This won't vary since it is using arrow function
        this.age++;
        console.log(age);
    }, 1000);
}

new Person;