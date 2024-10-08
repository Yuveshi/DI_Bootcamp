let Quotes = [];
let templateQuotes = ["You are the shuckiest shuck faced shuck in the world!",
"I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.",
`"That proves you are unusual," returned the Scarecrow; "and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed."`,
"But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place",
"Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!"];

let templateAuthors = ["James Dashner, The Maze Runner ","C. JoyBell C. ", "L. Frank Baum, The Land of Oz ", "J.R. Ward, Crave ", " Rick Riordan, The Son of Neptune "];

// quote constructor
function QuoteObject(id, quote, author){
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.likes = 0;
    this.getQuote = function() {
        return this.quote
    }
    this.getAuthor = function() {
        return this.author
    }
    this.getLikes = function() {
        return this.likes
    }
}

for (let i = 0; i < 5; i++){
    Quotes.push(new QuoteObject(Quotes.length,templateQuotes[i],templateAuthors[i]));
}

// random quote generator
var currQuote;
function generateQuote() {
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");

    do{
        var randomIndex = Math.floor(Math.random() * Quotes.length);

        if (Quotes[randomIndex].getQuote() !== quoteElement.innerText) {
            break;
        }
    }
    while (true)
    
    currQuote = randomIndex;
    quoteElement.innerText = Quotes[randomIndex].getQuote();
    authorElement.innerText = "-" + Quotes[randomIndex].getAuthor();
}

function countCharacters(space){
    let text = document.getElementById("quote").innerText
    if (space == true){
        let characters = document.getElementById("countSpace");
        characters.innerText = text.length
    } else {
        let characters = document.getElementById("countNoSpace");
        characters.innerText = text.replaceAll(" ", "").length;
    }
}

function wordCount(){
    let words = document.getElementById("words");
    words.innerText = document.getElementById("quote").innerText.split(/\s+/).length;
}

function getLikes(){
    let noLikes = document.getElementById("likes");
    noLikes.innerText = Quotes[currQuote].getLikes();
}

// submitting new quote
let quoteForm = document.getElementById("quoteForm");
quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let authorname = document.getElementById("authorName");
    let newQuote = document.getElementById("newQuote");
    Quotes.push(new QuoteObject(Quotes.length,newQuote.value,authorname.value));
    alert("added");
    document.getElementById("quoteForm").reset()
});


// searching quotes
var foundQuotes =[];

let searchQuote = document.getElementById("getQuote");

searchQuote.addEventListener("submit", (e) => {
    e.preventDefault();
    let author = document.getElementById("searchAuthor").value;
    let quoteList = document.getElementById("quotesFound");
    quoteList.innerHTML = "";

    foundQuotes = [""];
    for (let quotation of Quotes){
        if (author == quotation.getAuthor()) {
            foundQuotes.push(quotation.getQuote());
        }
    }

    let newQuote = document.createElement("div");
    newQuote.id = "screenQuote"
    if (foundQuotes.length == 0) {
        newQuote.innerText = foundQuotes[0] ;
    } else {
        newQuote.innerText = foundQuotes[1];
    }

    quoteList.append(newQuote)
})

function nextQuote() {
    let screenQuote = document.getElementById("screenQuote")
    let quotePtr = -1;
    for (let selection = 0; selection<foundQuotes.length;selection++) {
        if (foundQuotes[selection] == String(screenQuote.innerText)) {
            quotePtr = selection;
            break
        }
    }

    if (quotePtr !== -1 && quotePtr < foundQuotes.length - 1){
        screenQuote.innerText = foundQuotes[quotePtr + 1]
    }
}

function prevQuote() {
    let screenQuote = document.getElementById("screenQuote")
    let quotePtr = -1;
    for (let selection = 0; selection<foundQuotes.length;selection++) {
        if (foundQuotes[selection] == String(screenQuote.innerText)) {
            quotePtr = selection;
            break
        }
    }

    if (quotePtr !== -1 && quotePtr > 1){
        screenQuote.innerText = foundQuotes[quotePtr - 1]
    }
}