// 🌟 Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
//1. Analyze the options below. Which constructor will successfully extend the Dog class?
   // 1
// class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };
// it need the super so it can calm the cunstruction of dog
  
  
    // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
  //this is the right one (call the constructor of dog with super and the new size is called wiyh this)
  
  
    // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };
// it woudn't assign a name for the dog
  
  
    // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };
//this cunstructor overright the name of the constructor in dog so it gives an error

const lab = new Labrador('Tommy', 'Big')

console.log(lab);

