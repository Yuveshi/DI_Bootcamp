const express = require('express');
const { fetchPosts } = require('./data/dataService'); // Ensure this path is correct
const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to fetch posts from JSONPlaceholder
app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts(); // Call the fetchPosts function
        res.json(posts); // Send the posts as a JSON response
    } catch (error) {
        console.error('Error retrieving posts:', error);
        res.status(500).send('Error retrieving posts'); // Handle errors
    }
});

// Start the Express app
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
