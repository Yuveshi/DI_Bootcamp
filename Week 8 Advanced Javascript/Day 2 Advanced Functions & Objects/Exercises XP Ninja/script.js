function mergeWords(string){
    function inner(nextString){
       if (nextString == undefined || nextString == null){
          return string;
       }
       else {
          return inner(string + nextString);
       }
    }
    return inner;
 }
 console.log(mergeWords('Hello')()); 
 console.log(mergeWords('There')('is')('no')('spoon.')())