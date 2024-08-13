const accepetedPromise = Promise.resolve(3);
const rejectPromise = Promise.reject("Boo!")

accepetedPromise.then((value) => {console.log(value)});
rejectPromise.catch((error) => {console.log(error)});