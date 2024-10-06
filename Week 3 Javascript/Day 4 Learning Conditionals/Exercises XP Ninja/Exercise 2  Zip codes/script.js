var zip = prompt("Enter zip code: ");
var valid = true;

if (zip.length != 0){
    zip = zip.trim()
}
if (zip.length != 5) {
    valid = false;
}
if (isNaN(zip) == true){
    valid = false;
    // automatically trims blank spaces?
}
if (zip.includes(' ') == true){
    valid = false;
}
if (valid === true) {
    console.log("success");
}
else{
    console.log("error");
}