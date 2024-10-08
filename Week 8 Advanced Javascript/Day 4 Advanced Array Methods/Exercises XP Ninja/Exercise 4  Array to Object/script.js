const letters = ['x', 'y', 'z', 'z'];
let occurences = {}

for (let letter of letters){
   if (occurences[letter] === undefined) {
      occurences[letter] = 1
   } else {
      occurences[letter] += 1
   }
}
console.log(occurences)

// use reduce method to obtain key value pair
occurences = letters.reduce((acc, letter) => {
   if (acc[letter] === undefined) {
      acc[letter] = 1
   } else {
      acc[letter] += 1
   }
   return acc
}, {})
console.log(occurences)