// Exercise 1 : List Of People
// Instructions

const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays
//1. Write code to remove “Greg” from the people array.

people.splice(0,1);

console.log(people);

//2. Write code to replace “James” to “Jason”.

people.splice(2,1, 'jason');
console.log(people);

//3. Write code to add your name to the end of the people array.

people.push('Moshe');
console.log(people);


//4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf('Mary'))

//5. Write code to make a copy of the people array using the slice method.
//- The copy should NOT include “Mary” or your name.
//- Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//- Hint: Check out the documentation for the slice method

let peopleCopy = people.slice(1, 3)
console.log(peopleCopy)

//6. Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf("Foo"))
// It shows -1 because that item doesn't exist in the array

//7. Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let last = people.slice(3)
console.log(last)

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

for(let i=0; i<people.length; i++){
    console.log(people[i])
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

// for(let i=0; i<people.length; i++){
//     console.log(people[i])
//     if(i === 1) {
//         break;
//     }
// };

for(let i=0; i<people.length; i++){
    console.log(people[i])
    if(people[i] === "Devon") {
        break;
    }
};

// Exercise 2 : Your Favorite Colors
// Instructions
//1. Create an array called colors where the value is a list of your five favorite colors.

let colors = ["red", "yellow", "black", "pink", "black"];

//2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

for(let i=0; i<colors.length; i++){
    console.log("My #" + (i + 1) + " choice is " + colors[i])
}

 //3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let suffix = ["st", "nd", "rd", "th", "th"]

for(let i=0; i<colors.length; i++){
    console.log("My #" + (i + 1) + suffix[i]+ " choice is " + colors[i])
}

// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// let user = prompt("give me the number!")
// console.log(typeof user);

// // While the number is smaller than 10 continue asking the user for a new number.
// // Tip : Which while loop is more relevant for this situation?

// while(user < 10){
//      user = prompt("New number!");
// } console.log("Welcome!")

// Exercise 4 : Building Management
// Instructions:
// Review About Objects
// Copy and paste the above object to your Javascript file.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Console.log the number of floors in the building.

console.log(building.numberOfFloors)

// Console.log how many apartments are on the floors 1 and 3.

console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log(building.nameOfTenants[1] + " has " + building.numberOfRoomsAndRent.dan[0] + " rooms.")

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1])> building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1]= 1200

}
console.log(building)

// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.

const family = {
    dad: "Elie",
    mom: "Silvina",
    bro1: "Albert",
    bror2: "Jack"
};

// Using a for in loop, console.log the keys of the object.

for (let key in family){
    console.log(key)
}

// Using a for in loop, console.log the values of the object.

for (let key in family){
    console.log(family[key])
}

// Exercise 6 : Rudolf
// Instructions:

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
// for (let key in details){
//     console.log(JSON.stringify(details))
// }
let str = []

for (let key in details){
   // console.log([key + " " + details[key]])
   str.push([key + " " + details[key]]);
}
console.log (str.join(" "))

// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
//2. Console.log the name of their secret society. The output should be “ABJKPS”

names.sort();

//console.log(names[0][0] + names[1][0] + names[2][0]+ names[3][0]+ names[4][0]+ names[5][0] );

let secretName = []
for(let i=0;i<names.length;i++){
 //   console.log(names[i][0]);
    secretName.push(names[i][0]);
};
    console.log (secretName.join(""))