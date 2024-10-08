function keysAndValues(obj){
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    return [keys, values]
 }
 let result = keysAndValues({ a: 1, b: 2, c: 3 })
 console.log(result);