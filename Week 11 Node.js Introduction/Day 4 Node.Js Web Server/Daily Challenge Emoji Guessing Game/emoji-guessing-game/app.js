const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files from the public directory

app.get('/api/emoji', (req, res) => {
    const emojis = [
        { emoji: '😀', name: 'Smile' },
        { emoji: '🐶', name: 'Dog' },
        { emoji: '🌮', name: 'Taco' },
        // Add more emoji objects
    ];
    // Randomly select an emoji
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    res.json(randomEmoji); // Send the emoji as a response
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
