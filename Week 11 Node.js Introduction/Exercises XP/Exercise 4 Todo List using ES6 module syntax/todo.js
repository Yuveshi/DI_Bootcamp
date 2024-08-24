// JavaScript file for managing todo tasks 
// todo.js

// Define the TodoList class
class TodoList {
    constructor() {
      this.tasks = []; // Initialize an empty array to store tasks
    }
  
    // Method to add a new task
    addTask(task) {
      this.tasks.push({ task, completed: false }); // Add a task object with a 'completed' flag
      console.log(`Task "${task}" added.`);
    }
  
    // Method to mark a task as complete by its index
    markComplete(index) {
      if (index < 0 || index >= this.tasks.length) {
        console.log(`Task index ${index} is out of range.`);
        return;
      }
      this.tasks[index].completed = true; // Set the 'completed' flag to true
      console.log(`Task "${this.tasks[index].task}" marked as complete.`);
    }
  
    // Method to list all tasks
    listTasks() {
      console.log('To-Do List:');
      this.tasks.forEach((task, index) => {
        const status = task.completed ? '✓' : '✗';
        console.log(`${index + 1}. ${task.task} [${status}]`);
      });
    }
  }
  
  // Export the TodoList class using CommonJS syntax
  module.exports = TodoList;
  