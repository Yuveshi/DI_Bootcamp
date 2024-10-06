var out = "boom";
var num = Number(prompt("enter a number: "));
if (num > 2) {
    out = out.replace("o", "o".repeat(num - 1));
    
    if ((num % 2 == 0) && (num % 5 == 0)) {
        out = out.toUpperCase().concat("!");
    }
    else{
        if (num % 5 == 0) {
            out = out.toUpperCase();
        }
        if (num % 2 == 0) {
            out = out.concat("!")
        }
    }
}
console.log(out)