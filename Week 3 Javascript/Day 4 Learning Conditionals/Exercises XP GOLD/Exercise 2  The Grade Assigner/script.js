grade = Number(prompt("What's your grade? "));

switch(true) {
    case (grade > 90):
        console.log("A");
        break;
    case (grade > 80):
        console.log("B");
        break;
    case (grade >=70):
        console.log("C");
        break;
    default:
        console.log("D");
        break;
}