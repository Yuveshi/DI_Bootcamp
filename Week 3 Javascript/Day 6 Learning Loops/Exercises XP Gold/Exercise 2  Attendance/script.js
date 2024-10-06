let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
  
  var keys = Object.keys(guestList);
  var name = String(prompt("What's your name? ")).toLowerCase();;
   if (keys.indexOf(name) != -1) {
    // supposed to use if...in
       values = Object.values(guestList)
       console.log(`Hi! I'm ${name}, and I'm from ${values[keys.indexOf(name)]}.`)
   } else {
       console.log("Hi! I'm a guest.");
   }