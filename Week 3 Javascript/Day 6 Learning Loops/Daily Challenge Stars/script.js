// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

// let pattern = "";
// for (let i = 0; i < 6; i++) {
//     pattern += "*";
//     console.log(pattern);
// }

let pattern = ""

for ( i = 0; i <6; i++){
    while ( i < 6){
        pattern +="*"
        break
    }
    console.log(pattern)
}