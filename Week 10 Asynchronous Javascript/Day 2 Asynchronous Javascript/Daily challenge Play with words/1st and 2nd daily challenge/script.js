const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        const allStrings = words.every(word => typeof word ==="string")
        
        if(allStrings){
            const uppercaseWords = words.map(word => word.toUpperCase());
            resolve (uppercaseWords);
        }else {
            reject (`${uppercaseWords} is not string`);
        }       
    });
}



const sortWords = (uppercaseWords) => {
    return new Promise((resolve, reject) => {
        if(uppercaseWords.length >4){
            const sortWords = [...uppercaseWords].sort()
            resolve (uppercaseWords);
        }else {
            reject (`you have selected ${uppercaseWords}. basket should contain more then 4 items`);
        }       
    });
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


      const morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`;
      
      
      function toJs() {
          return new Promise((resolve, reject) => {
              const morseJS = JSON.parse(morse);
              if (Object.keys(morseJS).length === 0) {
                  reject('Morse object is empty');
              } else {
                  resolve(morseJS);
              }
          });
      }
    //   let morseJs = toJs()
    //   console.log(morseJs);
     
      function toMorse(morseJS) {
          return new Promise((resolve, reject) => {
              const userInput = prompt('Enter a word or a sentence:').toLowerCase();
              const morseTranslation = [];
      
              for (const char of userInput) {
                  if (morseJS[char]) {
                      morseTranslation.push(morseJS[char]);
                  } else {
                      reject(`Character "${char}" doesn't exist in the Morse object`);
                      return;
                  }
              }
      
              resolve(morseTranslation);
          });
      }
      
     
      function joinWords(morseTranslation) {
          const morseString = morseTranslation.join('<br>');
          let html = `Morse Translation:<br>${morseString}`;
          document.getElementById('root').innerHTML = html;
      }
      
      toJs()
          .then(morseJS => toMorse(morseJS))
          .then(morseTranslation => joinWords(morseTranslation))
          .catch(error => console.log(error));