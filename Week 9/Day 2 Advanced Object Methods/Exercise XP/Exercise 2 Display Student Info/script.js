// 🌟 Exercise 2: Display Student Info
// Instructions
function displayStudentInfo(obj){
  console.log(`Your full name is ${first} ${last}`);
};

//1 Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'
const user ={
  first: 'Elie', 
  last:'Schoppik'
};

const {first, last} = user;

displayStudentInfo(user);
