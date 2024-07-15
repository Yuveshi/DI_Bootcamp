// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

//     Create a class named Video. The class should be constructed with the following parameters:
//         title (a string)
//         uploader (a string, the person who uploaded it)
//         time (a number, the duration of the video - in seconds)
//     Create a method called watch() which displays a string as follows:
//     “uploader parameter watched all time parameter of title parameter!”
//     Instantiate a new Video instance and call the watch() method.
//     Instantiate a second Video instance with different values.
//     Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//     Think of the best data structure to save this information within the array.
//     Bonus: Loop through the array to instantiate those instances.


class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}`;
    }
}

// const video1 = new Video("The Hobbit", "John", 120);
// console.log(video1.watch());

let array = [];
let movies =  ["The Hobbit", "The Hobbit 1", "The Hobbit 2", "The Hobbit 3", "The Hobbit 4" ];
let uploaders = ["John", "Jane", "Jack", "Jill", "James"];
let times = [120, 130, 140, 150, 160];
for(let i = 0; i < 5; i++){
    let video = new Video(movies[i], uploaders[i], times[i]);
    array.push(video);
}

console.log(array);


for(video of array){
    console.log(video.watch());
}