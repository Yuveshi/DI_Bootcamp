let quotes = [
    {   likes: 5,
        id: 0,
        author: "Albert Einstein",
        quote: "Imagination is more important than knowledge."
    },
    {   likes: 10,
        id: 1,
        author: "Maya Angelou",
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
    {   likes: 11,
        id: 2,
        author: "Steve Jobs",
        quote: "Innovation distinguishes between a leader and a follower."
    },
    {   likes: 12,
        id: 3,
        author: "Martin Luther King Jr.",
        quote: "Injustice anywhere is a threat to justice everywhere."
    },
    {   likes: 13,
        id: 4,
        author: "Mahatma Gandhi",
        quote: "The future depends on what you do today."
    },
    {   likes: 14,
        id: 5,
        author: "Winston Churchill",
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
    {   likes: 15,
        id: 6,
        author: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken."
    },
    {   likes: 16,
        id: 7,
        author: "Mark Twain",
        quote: "The secret of getting ahead is getting started."
    },
    {   likes: 17,
        id: 8,
        author: "Nelson Mandela",
        quote: "It always seems impossible until it's done."
    },
    {   likes: 18,
        id: 9,
        author: "Abraham Lincoln",
        quote: "Whatever you are, be a good one."
    }
];

let random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[random].quote;
    document.querySelector('.author').innerHTML = quotes[random].author;
const generateQuote = () => {
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[random].quote;
    document.querySelector('.author').innerHTML = quotes[random].author;
}

const button = document.querySelector(".quote");
button.addEventListener("click", generateQuote);

document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let newQuote = document.getElementById('newQuote').value;
    let newAuthor = document.getElementById('newAuthor').value;
    quotes.push({
        id: quotes.length,
        author: newAuthor,
        quote: newQuote,
        likes: 0
    });
});

document.getElementById('charCountWithSpace').addEventListener('click', function() {
    let quote = document.getElementById('quote').innerHTML;
    alert(quote.length);
});

document.getElementById('charCountWithoutSpace').addEventListener('click', function() {
    let quote = document.getElementById('quote').innerHTML;
    let charCount = quote.replace(/\s/g, '').length;
    alert(charCount);
});

document.getElementById('wordCount').addEventListener('click', function() {
    let quote = document.getElementById('quote').innerHTML;
    let wordCount = quote.split(' ').length;
    alert(wordCount);
});

document.getElementById('likeButton').addEventListener('click', function() {
    let quote = document.getElementById('quote').innerHTML;
    let quoteObj = quotes.find(q => q.quote === quote);
    quoteObj.likes++;
    alert(`This quote has ${quoteObj.likes} likes.`);
});


window.onload = function() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    document.getElementById('quoteText').innerHTML = randomQuote.quote;
    document.getElementById('quoteAuthor').innerHTML = randomQuote.author;
};

document.getElementById('quoteSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let quoteId = document.getElementById('quoteId').value;
    let quote = quotes.find(q => q.id === parseInt(quoteId));
    if (quote) {
        document.getElementById('quoteText').innerHTML = quote.quote;
        document.getElementById('quoteAuthor').innerHTML = quote.author;
    }
});
document.getElementById('prevButton').addEventListener('click', function() {
    let quoteText = document.getElementById('quoteText').innerHTML;
    let quote = quotes.find(q => q.quote === quoteText);
    let prevQuote = quotes[quote.id - 1];
    if (prevQuote) {
        document.getElementById('quoteText').innerHTML = prevQuote.quote;
        document.getElementById('quoteAuthor').innerHTML = prevQuote.author;
        let quoteIdInput = document.getElementById('quoteId');
        quoteIdInput.value = '';
        quoteIdInput.placeholder = prevQuote.id;
    }
});

document.getElementById('nextButton').addEventListener('click', function() {
    let quoteText = document.getElementById('quoteText').innerHTML;
    let quote = quotes.find(q => q.quote === quoteText);
    let nextQuote = quotes[quote.id + 1];
    if (nextQuote) {
        document.getElementById('quoteText').innerHTML = nextQuote.quote;
        document.getElementById('quoteAuthor').innerHTML = nextQuote.author;
        let quoteIdInput = document.getElementById('quoteId');
        quoteIdInput.value = '';
        quoteIdInput.placeholder = nextQuote.id;
    }
});