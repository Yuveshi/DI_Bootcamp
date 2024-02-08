// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

console.log([2] === [2]); 
console.log({} === {});
// In both is returning false because we are dealing with object and the values are passed by reference.

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
// becase we are dealing with "objects" the values are passed by reference wich mean the object 2 and 3 has the reference value of object one wich means object 1, 2 and 3 has the same number wich is 4, object 4 has it own reference wich means it stays 5.

//1. Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
    constructor(name, type, color){
        this.name = name ;
        this.type = type;
        this.color = color;
    }
};

//2. Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color);
    }
    sound(sound){
        console.log(`${sound} I'm a ${this.type}, named${this.name} and I'm ${this.color}`);
    }
};

//3. Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mamal('Lily', 'Cow', 'brown and white')
farmerCow.sound('Mooo')