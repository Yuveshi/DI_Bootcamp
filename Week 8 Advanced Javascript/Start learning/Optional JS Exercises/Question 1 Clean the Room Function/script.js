function cleanRoom(arr) {
    // Separate numbers and strings
    let numbers = arr.filter(item => typeof item === 'number').sort((a, b) => a - b);
    let strings = arr.filter(item => typeof item === 'string').sort();

    // Helper function to group similar values
    function groupSimilarValues(array) {
        let result = [];
        let subArray = [];

        for (let i = 0; i < array.length; i++) {
            if (subArray.length === 0 || array[i] === subArray[0]) {
                subArray.push(array[i]);
            } else {
                result.push(subArray.length > 1 ? subArray : subArray[0]);
                subArray = [array[i]];
            }
        }
        // Push the last subArray
        result.push(subArray.length > 1 ? subArray : subArray[0]);

        return result;
    }

    // Group numbers and strings separately
    let groupedNumbers = groupSimilarValues(numbers);
    let groupedStrings = groupSimilarValues(strings);

    // Return the result with numbers first, strings after
    return groupedStrings.length > 0 ? [groupedNumbers, groupedStrings] : groupedNumbers;
}

// Test cases
console.log(cleanRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20])); 
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]

console.log(cleanRoom([1, "2", "3", 2])); 
// [[1, 2], ["2", "3"]]
