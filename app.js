// console.log("hello world");

const input = document.querySelector(".input-task");
const btn = document.querySelector(".task-button");
const tasks = document.querySelector(".task-list");
const deletetask = document.querySelectorAll(".delete");
const donetasks = document.querySelectorAll(".done");

var tasklist = "";

btn.addEventListener("click", function () {
  console.log(input.value);
  console.log(input.placeholder);

  if (input.value) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("todo");
    taskItem.innerHTML = `
      ${input.value}
      <div class="buttons">
        <button class="done">Done</button>
        <button class="delete">Delete</button>
      </div>
    `;
    tasks.appendChild(taskItem);
    input.value("");

    doneTask(taskItem.querySelector(".done"));
    removeTask(taskItem.querySelector(".delete"));
    saveData();
  } else {
    return (input.placeholder = "Please add a task");
  }
});

const doneTask = (btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.toggle("checked");
    saveData();
  });
};
const removeTask = (btn) => {
  btn.addEventListener("click", () => {
    const litag = btn.parentElement.parentElement;
    litag.remove();
    saveData();
  });
};
function saveData() {
  localStorage.setItem("data", tasks.innerHTML);
}
function showTask() {
  tasks.innerHTML = localStorage.getItem("data") || "";
  const allTasks = tasks.querySelectorAll(".todo");
  allTasks.forEach((task) => {
    const doneBtn = task.querySelector(".done");
    const deleteBtn = task.querySelector(".delete");
    doneTask(doneBtn);
    removeTask(deleteBtn);
  });
}
showTask();
// function deleteTask() {
//   tasks.innerHTML = localStorage.removeItem("data");
// }
// deleteTask();
