// Not executable code

// Before, non structured code
// After, procedural code : Functions that manipulate data
processing(value1, value2, value);

// OO : Data that has methods

object = {
    value1,
    value2,
    value3,

    processing() {
        // ...
    }
}

object.processing(); // The main part is the object


// Abstraction: Get the real object and know how to map this object to the application (What is needed)

// Encapsulation: Some things related to the object you need to know, but others you don't like how the engine works
// If you change the internal implementation, the user won't always need to adapt to it (like cars)

// Inheritance: Something can be another thing. A dog is a mammal, a mammal is an animal
// You can reutilize attributes and methods of our superclass
// Prioritize composition over inheritance

// Polymorphism: 