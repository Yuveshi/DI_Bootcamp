function checkPass(average) {
    if (average > 65){
        return true;
    }
    else {
        return false;
    }
}
function findAvg(gradesList) {
    let avg = 0;
    for (let grade of gradesList) {
        avg += grade
    } 
    avg = avg / gradesList.length
    console.log("Average:", avg)
    
    return checkPass(avg);
}

var grades = [50,60,70,95, 84, 92];

if (findAvg(grades) == true){
    console.log("passed");
} else {
    console.log("failed. will need to re take exam");
}