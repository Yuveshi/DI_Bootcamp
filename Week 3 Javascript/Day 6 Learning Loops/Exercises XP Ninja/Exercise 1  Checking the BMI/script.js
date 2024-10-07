function findBMI(mass, height){
    return (mass / (height * height));
};

const person1 = {
    Fullname: "John Doe",
    Mass: 80,
    Height: 1.79,
    bmi : function() {
        return findBMI(this.Mass, this.Height);
    }
};

const person2 = {
    Fullname: "Kelly Smith",
    Mass: 55,
    Height: 1.57,
    bmi : function () {
        return findBMI(this.Mass, this.Height);
    }
};

function compareBMI(p1, p2){
    if (p1 > p2) {
        return p1;
    } else if (p2 > p1) {
        return p2;
    } else {
        return 0;
    }
}

switch (compareBMI(person1.bmi(), person2.bmi())){
    case 0:
        console.log("Both have same bmi");
        break;
    case person1.bmi():
        console.log(person1.Fullname, "has greater bmi");
        break;
    default:
    console.log(person2.Fullname, "has greater bmi");
}