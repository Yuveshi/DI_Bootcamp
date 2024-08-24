import people from './data.js'

const avgAge = (people) => {
    const sum = people.reduce((acc, curr) => acc + curr.age, 0);
    const avg = sum / people.length
    return avg
}
let AVG = avgAge(people)
console.log(`Average age is: ${AVG}`);