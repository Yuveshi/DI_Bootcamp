// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (a, b) => a + b;

console.log(sum(5, 6));

// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

//1. First, use function declaration and invoke it.
//2. Then, use function expression and invoke it.
//3. Write in a one line comment, the difference between function declaration and function expression.
//4. Finally, use a one line arrow function and invoke it.

console.log(convertion(10))

function convertion(kgs) {
    return kgs * 1000 + " g"
}

console.log(convertion(10))
//The function declaration can be called before and after the function 

const convertion1 = function(kgs){
    return kgs * 1000 + " g"
}

console.log(convertion1(11))
//The function expression can be called just before the function

const convertion2 = (kgs) => kgs * 1000 + " g"

console.log(convertion2(12));

// 🌟 Exercise 3 : Fortune Teller
// Instructions
//1. Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
//2. The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function addElementsToDom(nChildren, partnerName, geoLoc, jobTitle) {
    const sentence = `You will be a ${jobTitle} in ${geoLoc}, and married to ${partnerName} with ${nChildren} kids.`;

    const p = document.createElement("p")
    p.innerText = sentence
    document.body.appendChild(p)

    console.log(sentence)
})(4, "Avina", "Google", "Developer");

// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function addElementsToDom(name) {
    const div = document.createElement("div")
    div.innerText = name

    const image = document.createElement("img");
    image.src = "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
    image.width = 50
    
    const navbar = document.querySelector("#navbar")
    navbar.appendChild(div)
    navbar.appendChild(image)

})("Jane");

// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
//1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

//2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

//3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// function makeJuice(size) {
// const div1 = document.createElement("div")
// div1.innerText= "we are making a juice this size:"+ size;
// document.body.appendChild(div1);

//    function addIngredients(fstIngredient, sndIngredient, trdIngredient){
//     const div2 = document.createElement("div")
//     div2.innerText= `with this ingredients: ${fstIngredient}  ${sndIngredient}  ${trdIngredient}`;
//     document.body.appendChild(div2);
//    }

//    addIngredients("orange", "apple", "banana")
// }
// makeJuice("big")


// Part II:
//1. In the makeJuice function, create an empty array named ingredients.

//2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

//3. Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

//4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.


function makeJuice(size) {
    let ingredients = []
    addIngredients("orange", "apple", "banana")
    addIngredients("blueberry", "peach", "milk")
    console.log(ingredients)

       function addIngredients(fstIngredient, sndIngredient, trdIngredient){
        ingredients.push(fstIngredient, sndIngredient, trdIngredient)
       }

       function displayJuice(){
       let sentence =`The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]}, ${ingredients[5]}`
       const div1 = document.createElement("div")
        div1.innerText= sentence
        document.body.appendChild(div1);
        }
         displayJuice()
    }
    makeJuice("big")