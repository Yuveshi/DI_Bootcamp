const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

const tasksFilePath = path.join(__dirname, 'tasks.json');

// Helper function to read tasks from JSON file
const readTasks = () => {
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    return JSON.parse(data);
};

// Helper function to write tasks to JSON file
const writeTasks = (tasks) => {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

// GET /tasks: Retrieve all tasks
app.get('/tasks', (req, res) => {
    try {
        const tasks = readTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).send('Error retrieving tasks');
    }
});

// GET /tasks/:id: Retrieve a specific task by ID
app.get('/tasks/:id', (req, res) => {
    try {
        const tasks = readTasks();
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        if (task) {
            res.json(task);
        } else {
            res.status(404).send('Task not found');
        }
    } catch (error) {
        res.status(500).send('Error retrieving task');
    }
});

// POST /tasks: Create a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }

    try {
        const tasks = readTasks();
        const newTask = {
            id: tasks.length + 1,
            title,
            description,
            completed: false
        };
        tasks.push(newTask);
        writeTasks(tasks);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).send('Error creating task');
    }
});

// PUT /tasks/:id: Update a task by ID
app.put('/tasks/:id', (req, res) => {
    const { title, description } = req.body;
    if (!title && !description) {
        return res.status(400).send('At least one of title or description is required');
    }

    try {
        const tasks = readTasks();
        const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
        if (taskIndex === -1) {
            return res.status(404).send('Task not found');
        }
        const updatedTask = { ...tasks[taskIndex], title, description };
        tasks[taskIndex] = updatedTask;
        writeTasks(tasks);
        res.json(updatedTask);
    } catch (error) {
        res.status(500).send('Error updating task');
    }
});

// DELETE /tasks/:id: Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
    try {
        const tasks = readTasks();
        const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
        if (taskIndex === -1) {
            return res.status(404).send('Task not found');
        }
        tasks.splice(taskIndex, 1);
        writeTasks(tasks);
        res.send('Task deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting task');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
