var verb = prompt("Enter a verb: ");
len = verb.length;
var verbing = verb;
if (len >= 3) {
    if (verb.endsWith("ing")) {
        verbing = verbing + "ly"
    }
    else{
        verbing = verbing + "ing"
    }
}
console.log(verbing)