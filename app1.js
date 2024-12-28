const input = document.querySelector(".input-task");
const btn = document.querySelector(".task-button");
const tasks = document.querySelector(".task-list");

// Add task on button click
btn.addEventListener("click", function () {
  if (input.value) {
    addTask(input.value);
    input.value = ""; // Clear input field
    input.placeholder = "Add Task"; // Reset placeholder
    saveData(); // Save updated tasks
  } else {
    input.placeholder = "Please add a task"; // Notify empty input
  }
});

// Add a single task to the list
function addTask(taskText) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("todo");
  taskItem.innerHTML = `
    ${taskText}
    <div class="buttons">
      <button class="done">Done</button>
      <button class="delete">Delete</button>
    </div>
  `;
  tasks.appendChild(taskItem);
  initializeTaskButtons(taskItem); // Initialize buttons for this task
}

// Initialize "Done" and "Delete" buttons for a specific task
function initializeTaskButtons(taskItem) {
  const doneBtn = taskItem.querySelector(".done");
  const deleteBtn = taskItem.querySelector(".delete");

  // Toggle "done" state
  doneBtn.addEventListener("click", () => {
    taskItem.classList.toggle("checked");
    saveData(); // Save updated state
  });

  // Remove task
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
    saveData(); // Save after removal
  });
}

// Save all tasks to localStorage
function saveData() {
  localStorage.setItem("data", tasks.innerHTML);
}

// Load tasks from localStorage on page load
function showTask() {
  tasks.innerHTML = localStorage.getItem("data") || ""; // Load saved tasks or start empty
  const allTasks = tasks.querySelectorAll(".todo");
  allTasks.forEach((task) => initializeTaskButtons(task)); // Reinitialize buttons for all tasks
}

// Initialize tasks from localStorage
showTask();
