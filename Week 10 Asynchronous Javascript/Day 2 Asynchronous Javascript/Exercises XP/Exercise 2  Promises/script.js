const delayedPrint = new Promise((resolve) => {
    setTimeout(() => {
       resolve("Success");
    }, 4000);
 });
 
 delayedPrint
   .then((result) => console.log(result))
   .catch((error) => console.log(error));