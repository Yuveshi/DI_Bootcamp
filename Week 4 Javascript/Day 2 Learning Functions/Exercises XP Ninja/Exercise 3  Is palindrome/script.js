function isPalindrome(word) {
    if (word == word.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("madam"));