function findPairWithTargetSum(arr, target) {
    let numMap = {};

    for (let num of arr) {
        let complement = target - num;

        // If the complement is already in the map, we found the pair
        if (numMap[complement]) {
            return [complement, num];
        }

        // Otherwise, store the current number in the map
        numMap[num] = true;
    }

    // If no pair is found
    return null;
}

// Test cases
console.log(findPairWithTargetSum([1, 2, 3], 4)); 
// [1, 3]

console.log(findPairWithTargetSum([4, 7, 1, -3, 2], 5)); 
// [7, -3]
