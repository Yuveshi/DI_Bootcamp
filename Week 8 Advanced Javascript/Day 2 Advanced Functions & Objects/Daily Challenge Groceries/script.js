// Using this object :
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

//1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = (obj) =>{
    const fruits = obj.fruits;
    fruits.forEach((fruits) => console.log(fruits));
};

displayGroceries(groceries)

//2. Create another arrow function named cloneGroceries.
    //- In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
        //a- Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?

    //- In the function, create a variable named shopping that is equal to the groceries variable.
        //b- Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
        //c- Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

        const cloneGroceries = () => {
            let user = client; 
            client = "betty"
            console.log(user);
            console.log(client);
            let shopping = groceries
            shopping.totalPrice = "$35"
            console.log(groceries.totalPrice)
            console.log(shopping.totalPrice)
            shopping.other.paid = false
            console.log(shopping.other.paid)
            console.log(groceries.other.paid)

        } ;
        cloneGroceries()
        //a- it wont change because the user value because its dealing with strings witch is a primitive type data witch means that is handeling pass by value so when we created the user variable was stored as a new variable (different addess)and when we affect client nothing happens to user.

        //b- it will be modified in both beacuse this time we are dealing with an object wich means thet it handle pass by reference(same addess), so this time when you make any change it will cange in both because the data is tranferren by reference.

        //c- it will be modified in both beacuse this time we are dealing with an object wich means thet it handle pass by reference, so this time when you make any change it will cange in both because the data is tranferren by reference.

//3. Invoke the cloneGroceries function.