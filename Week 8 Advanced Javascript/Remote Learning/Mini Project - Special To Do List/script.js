document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const tasksContainer = document.getElementById("tasks-container");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Save the task to localStorage and display it
    function saveTask(task) {
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        renderWeeklyTaskGraph(); // Update the graph
    }

    // Render all tasks from localStorage
    function renderTasks() {
        tasksContainer.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task-item");
            if (task.isCompleted) {
                taskElement.classList.add("completed");
            } else if (new Date(task.endDate) < new Date()) {
                taskElement.classList.add("expired");
            }

            taskElement.innerHTML = `
                <h3>${task.name}</h3>
                <p>Start Date: ${new Date(task.startDate).toLocaleString()}</p>
                <p>Days Left: ${calculateDaysLeft(task.startDate, task.endDate)} days</p>
                <div class="actions">
                    <input type="checkbox" ${task.isCompleted ? 'checked' : ''} class="complete-task"> Completed
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
                <div class="description">
                    <p>${task.description}</p>
                </div>
            `;

            // Complete/Uncomplete Task
            taskElement.querySelector('.complete-task').addEventListener('change', function() {
                task.isCompleted = this.checked;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
                renderWeeklyTaskGraph(); // Update the graph on task completion change
            });

            // Edit Task
            taskElement.querySelector('.edit').addEventListener('click', () => {
                editTask(index);
            });

            // Delete Task
            taskElement.querySelector('.delete').addEventListener('click', () => {
                deleteTask(index);
            });

            tasksContainer.appendChild(taskElement);
        });
    }

    // Calculate days left to complete the task
    function calculateDaysLeft(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const today = new Date();
        if (today > start) {
            return Math.ceil((end - today) / (1000 * 60 * 60 * 24));
        }
        return Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    }

    // Delete Task
    function deleteTask(index) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
            renderWeeklyTaskGraph(); // Update the graph on deletion
        }
    }

    // Edit Task (Part III)
    function editTask(index) {
        const task = tasks[index];
        document.getElementById("name").value = task.name;
        document.getElementById("description").value = task.description;
        document.getElementById("start-date").value = task.startDate;
        document.getElementById("end-date").value = task.endDate;

        tasks.splice(index, 1); // Remove the task temporarily until edited version is saved
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Handle form submission
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const task = {
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            startDate: document.getElementById("start-date").value,
            endDate: document.getElementById("end-date").value,
            isCompleted: false
        };

        saveTask(task);
        taskForm.reset(); // Clear the form
    });

    // Render the weekly task graph using Chart.js
    function renderWeeklyTaskGraph() {
        const ctx = document.getElementById('weeklyTaskChart').getContext('2d');
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Initialize an array to store the number of tasks per day
        const taskCount = new Array(7).fill(0);

        // Iterate over tasks and count how many are scheduled for each day of the week
        tasks.forEach(task => {
            const startDate = new Date(task.startDate);
            const dayIndex = startDate.getDay(); // Get the day of the week (0 for Sunday, 1 for Monday, etc.)
            taskCount[dayIndex]++;
        });

        // Create or update the chart
        const weeklyTaskChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: daysOfWeek,
                datasets: [{
                    label: 'Number of Tasks',
                    data: taskCount,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    renderTasks(); // Initial render of tasks
    renderWeeklyTaskGraph(); // Initial render of graph
});
