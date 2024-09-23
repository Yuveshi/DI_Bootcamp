const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(express.json());
app.use(express.static(__dirname)); // Serve HTML files

// Helper function to read users from file
async function readUsers() {
    try {
        const data = await fs.readFile(USERS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Helper function to write users to file
async function writeUsers(users) {
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

// POST /register
app.post('/register', async (req, res) => {
    const { name, lastName, email, username, password } = req.body;
    const users = await readUsers();
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return res.status(400).json({ message: 'error1: Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1, name, lastName, email, username, password: hashedPassword };
    users.push(newUser);
    
    await writeUsers(users);
    res.status(201).json({ message: 'User registered successfully' });
});

// POST /login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const users = await readUsers();
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(400).json({ message: 'error2: User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'error2: Invalid password' });
    }

    res.json({ message: 'Login successful' });
});

// GET /users
app.get('/users', async (req, res) => {
    const users = await readUsers();
    res.json(users);
});

// GET /users/:id
app.get('/users/:id', async (req, res) => {
    const users = await readUsers();
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// PUT /users/:id
app.put('/users/:id', async (req, res) => {
    const { name, lastName, email } = req.body;
    const users = await readUsers();
    const userIndex = users.findIndex(user => user.id === parseInt(req.params.id));

    if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

    const updatedUser = { ...users[userIndex], name, lastName, email };
    users[userIndex] = updatedUser;
    await writeUsers(users);
    res.json(updatedUser);
});

// Error handling
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
