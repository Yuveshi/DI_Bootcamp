document.addEventListener('DOMContentLoaded', () => {
    const emojiDisplay = document.getElementById('emoji-display');
    const guessForm = document.getElementById('guess-form');
    const feedback = document.getElementById('feedback');

    // Fetch a random emoji when the page loads
    fetch('/api/emoji')
        .then(response => response.json())
        .then(data => {
            emojiDisplay.textContent = data.emoji;
            emojiDisplay.dataset.name = data.name; // Store the correct name
        });

    guessForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userGuess = document.getElementById('guess').value;
        const correctName = emojiDisplay.dataset.name;

        if (userGuess.toLowerCase() === correctName.toLowerCase()) {
            feedback.textContent = 'Correct! 🎉';
        } else {
            feedback.textContent = `Wrong! The correct answer was ${correctName}.`;
        }

        // Fetch a new emoji after submitting the guess
        fetch('/api/emoji')
            .then(response => response.json())
            .then(data => {
                emojiDisplay.textContent = data.emoji;
                emojiDisplay.dataset.name = data.name;
                guessForm.reset(); // Clear the input
            });
    });
});
