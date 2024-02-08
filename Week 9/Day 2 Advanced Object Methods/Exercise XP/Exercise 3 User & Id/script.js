// 🌟 Exercise 3: User & Id

// Using this object 

const users1 = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
const usersArr = Object.entries(users1)
console.log(usersArr);

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const idX2 = usersArr.map(([key,id])=>[key, id*2])
console.log(idX2);
