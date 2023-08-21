class Grand {
    constructor(surname) {
        this.surname = surname;
    }
}

class Parent extends Grand {
    constructor(surname, job = 'Teacher') {
        super(surname);
        this.job = job;
    }
}

class Child extends Parent {
    constructor() {
        super('Bitencourt', 'Engineer');
    }
}

const child = new Child();
console.log(child); 