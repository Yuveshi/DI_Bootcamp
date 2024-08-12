// function song() {

//     console.log("We start the song at 99 bottles");
//     let bottles = 99
    
//         while( bottles > 0) {
//             let numberOfBottles = parseInt(prompt("How many bottles do you want to take down"));
    
//             if (isNaN(numberOfBottles)){
//                 alert("enter a number");
//             }
    
//             if (numberOfBottles === 1){
//                 console.log(`${bottles} bottles of beer on the wall`);
//                 console.log(`${bottles} bottles of beer`);
//                 bottles--;
//                 console.log(`take ${numberOfBottles} down, pass it around`);
//                 console.log(`${bottles} bottles of beer on the wall`);
//             } else if (numberOfBottles > 1){
//                 console.log(`${bottles} bottles of beer on the wall`);
//                 console.log(`${bottles} bottles of beer`);
//                 bottles -= numberOfBottles;
//                 console.log(`take ${numberOfBottles} down, pass them around`);
//                 console.log(`${bottles} bottles of beer on the wall`);
            
//             } 
//         }
//         if (bottles == 0){
//             console.log("No more bottles of beer on the wall")
//         }
//     }

//    song()



function song() {
    let numberOfBottles = parseInt(prompt("How many bottles do you want to start with"));
    

    for (let i = 1; numberOfBottles >= 0; i++) {
        console.log(`${numberOfBottles} bottles of beer on the wall`);
        console.log(`${numberOfBottles} bottles of beer`);

        if(numberOfBottles <= 0){
            console.log(`Take ${numberOfBottles +i} down, pass them around`);
            console.log("No more bottles of beer on the wall");
        }

        else{
            console.log(`Take ${i} down, pass ${i === 1 ? 'it' : 'them'} around`);
        }

        

        numberOfBottles -= i;

        // console.log(`${numberOfBottles} bottles of beer on the wall`);
    }
}

    
song();