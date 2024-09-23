// Main application file to test the TodoList 
// app.js

// Import the TodoList class from the todo.js module using CommonJS syntax
const TodoList = require('./todo.js');

// Create an instance of TodoList
const myTodoList = new TodoList();

// Add a few tasks to the list
myTodoList.addTask('Buy groceries');
myTodoList.addTask('Read a book');
myTodoList.addTask('Learn Node.js');

// Mark some tasks as complete
myTodoList.markComplete(0); // Marks "Buy groceries" as complete
myTodoList.markComplete(2); // Marks "Learn Node.js" as complete

// List all tasks
myTodoList.listTasks();
