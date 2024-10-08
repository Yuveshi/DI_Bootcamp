const array = [[1],[2],[3],[[[4]]],[[[5]]]]
console.log(array.flatMap(item => Array.isArray(item)? item.flat() : item))

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
console.log(greeting.map(subarray => subarray.join(" ")))
console.log(greeting.map(subarray => subarray.join(" "))).join()

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] 
const extractNumber = arr => {
   if (!Array.isArray(arr)){
      return arr 
   }
   return extractNumber[0]
}
console.log(extractNumber(trapped))

// const extractNumber = arr => {
//    let current = arr;
   
//    // Continue looping until current is not an array
//    while (Array.isArray(current)) {
//        current = current[0]; // Access the first element
//    }
   
//    return [current]; // Wrap the innermost value in an array
// };

// const result = extractNumber(trapped);
// console.log(result); // Output: [3]