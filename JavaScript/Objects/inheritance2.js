// Prototype Chain
const grand = { attr1: 'A' };
const parent = { __proto__: grand, attr2: 'B', attr3: '3' };
const child = { __proto__: parent, attr3: 'C' };

console.log(child.attr1); // A
// 'child' has attr1? No, it will look for it in its prototype
// Does parent (its prototype) has attr1? No, it will look for it in its prototype (grand)

console.log(child.attr0); // None of the prototypes have 'attr0'; undefined
console.log(child.attr3); // C; the closest one



const car = {
    currVel: 0,
    maxVel: 200,

    accelarate(delta) {
        if(this.currVel + delta <= this.maxVel)
            this.currVel = this.currVel + delta;
        else
            this.currVel = this.maxVel;
    },

    status() {
        return `${this.currVel}Km/h of ${this.maxVel}Km/h`;
    }
};

const ferrari = {
    model: 'F40',
    maxVel: 324 // Shadowing
};

const volvo = {
    model: 'V40',

    status() {
        return `${this.model}: ${super.status()}`;
    }
};

Object.setPrototypeOf(ferrari, car);
Object.setPrototypeOf(volvo, car);

console.log(volvo.status());
console.log(ferrari); // It will only show the things the REALLY belong to 'ferrari'
