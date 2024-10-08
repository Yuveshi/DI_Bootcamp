function printFullName(studentObject){
    const {first, last} = studentObject
    console.log(first + " " + last)
 }
 const student = {first: "John", last: "Doe"}
 printFullName(student)