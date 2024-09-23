import { greet } from './files/greeting.js'; // Use import for ES modules
import colorfulMessage from './colorful-message.js';
import readFile from './read-file.js';

// Call your functions
console.log(greet('User'));
console.log(colorfulMessage()); // Assuming this function returns a message
readFile(); // Assuming this reads and displays the file content
