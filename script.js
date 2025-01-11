// script.js

const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');
const star = document.getElementById('star');

let taskCount = 0; // Keeps track of the number of completed tasks

// Function to add a new task
addTaskBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="completeBtn">Complete</button>
        `;

        // Add event listener for task completion
        const completeBtn = li.querySelector('.completeBtn');
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('checked');
            taskCount++;

            // Update star size and brightness based on task completion
            updateStar();

            if (taskCount === 5) { // Limit: You can increase or decrease this threshold.
                alert("Congratulations! You've completed 5 tasks! The star is at its brightest!");
            }
        });

        taskList.appendChild(li);
        newTaskInput.value = ""; // Clear the input after adding the task
    }
});

// Update the star's size and brightness based on task completion
function updateStar() {
    const size = 100 + taskCount * 10; // Increases star size
    const brightness = 0.8 + (taskCount * 0.1); // Increases brightness

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.background = `radial-gradient(circle, rgba(255, 255, 255, ${brightness}), rgba(255, 255, 255, 0))`;
}
