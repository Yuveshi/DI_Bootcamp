let str1 = "mix";
let str2 = "pod";
let newWord = str1;
str1 = str2.slice(0,2) + str1.slice(2,3);
str2 = newWord.slice(0,2) + str2.slice(2,3);
newWord = str1 + " " + str2;
console.log(newWord);