const person = {
    greeting: 'Good morning',
    say() { // If you remove 'this.', it will say that it doesn't know 'greeting'
        console.log(this.greeting); // Access the 'greeting' var of the current persion
    }
}

person.say(); // 'Good morning'

let say = person.say;
say(); // undefined : conflicts between paradigms (functional and OO)

say = person.say();
say; // Good morning


const personSay = person.say.bind(person); // person will be the object that 'this' will get the elements from
personSay(); // Good morning