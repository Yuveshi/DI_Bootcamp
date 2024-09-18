// ex1

// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
      a = 3;
    }
    alert(`inside the funcOne function ${a}`);
  }
  
  // #1.1 - run in the console:
  funcOne(); // Output: inside the funcOne function 3
  
  // #1.2 What will happen if the variable is declared
  // with const instead of let ?
  // Prediction: It will throw an error because you cannot reassign a value to a constant.
  
  //#2
  // Remove the duplicate declaration of 'a'
  function funcTwo() {
    a = 5;
  }
  
  function funcThree() {
    alert(`inside the funcThree function ${a}`);
  }
  
  // #2.1 - run in the console:
  funcThree(); // Output: inside the funcThree function 0
  funcTwo();
  funcThree(); // Output: inside the funcThree function 5
  
  // #2.2 What will happen if the variable is declared
  // with const instead of let ?
  // Prediction: It will throw an error as constants cannot be reassigned.
  
  //#3
  function funcFour() {
    window.a = "hello";
  }
  
  function funcFive() {
    alert(`inside the funcFive function ${a}`);
  }
  
  // #3.1 - run in the console:
  funcFour();
  funcFive(); // Output: inside the funcFive function hello
  
  //#4
  // Remove the duplicate declaration of 'a'
  function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
  }
  
  // #4.1 - run in the console:
  funcSix(); // Output: inside the funcSix function test
  
  // #4.2 What will happen if the variable is declared
  // with const instead of let ?
  // Prediction: It will not throw an error, but the inner 'a' will shadow the outer 'a' without affecting it.
  
  //#5
  let a = 2;
  if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
  }
  alert(`outside of the if block ${a}`);
  
  // #5.1 - run the code in the console
  // Output: in the if block 5
  // outside of the if block 2
  
  // #5.2 What will happen if the variable is declared
  // with const instead of let ?
  // Prediction: It will throw an error as constants are block-scoped and cannot be reassigned.
  
  // ex2
  
  const winBattle = () => true;
  
  const experiencePoints = winBattle() ? 10 : 1;
  
  console.log(experiencePoints);
  
  // ex3
  
  const isString = (value) => typeof value === "string";
  
  // Example usage:
  console.log(isString("hello")); // Output: true
  console.log(isString([1, 2, 4, 0])); // Output: false
  // Explanation:
  
  // The function isString takes a parameter value.
  // The arrow function checks if the typeof value is equal to 'string'.
  // If the type of the value is a string, the function returns true; otherwise, it returns false.
  // This function uses the typeof operator to determine the type of the provided value and then checks if it is equal to 'string'.
  
  // ex4
  
  // Remove the duplicate declaration of 'colors'
  
  // Display colors in the specified order
  colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
  });
  
  // Check if at least one element is equal to "Violet"
  if (colors.includes("Violet")) {
    console.log("Yeah");
  } else {
    console.log("No...");
  }
  
  // ex5
  
  const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
  const ordinal = ["th", "st", "nd", "rd"];
  
  // Affichage des couleurs avec les suffixes ordinaux
  colors.forEach((color, index) => {
    const suffix = index + 1 <= 3 ? ordinal[index + 1] : ordinal[0];
    console.log(`${index + 1}${suffix} choix est ${color}.`);
  });
  
  // ex6
  // Créer une variable globale appelée bankAmount avec la somme d'argent actuellement dans votre compte.
  let bankAmount = 5000; // Par exemple, initialisé à 5000 shekels.
  
  // Créer une variable qui sauvegarde le pourcentage de TVA (en Israël, c'est 17%).
  const vatPercentage = 17;
  
  // Créer un tableau avec toutes vos dépenses mensuelles, positives et négatives.
  const details = ["+200", "-100", "+146", "+167", "-2900"];
  
  // Créer un programme qui modifie les dépenses pour inclure la TVA.
  for (let i = 0; i < details.length; i++) {
    // Convertir chaque élément du tableau en nombre et multiplier par la TVA.
    details[i] = (parseFloat(details[i]) * (1 + vatPercentage / 100)).toFixed(2);
  }
  
  // Afficher votre solde de compte bancaire actuel à la fin du mois.
  let totalExpenses = details.reduce(
    (acc, expense) => acc + parseFloat(expense),
    0
  );
  bankAmount -= totalExpenses;
  
  console.log(
    `Votre solde de compte bancaire à la fin du mois est de ${bankAmount.toFixed(
      2
    )} shekels.`
  );