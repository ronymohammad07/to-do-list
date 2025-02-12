// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("task")) || [];
    tasks.forEach(task => addTaskDOM(task));
}

function AddNewTask() {
    let inputValue = document.getElementById('Taskinput').value.trim();
    if (inputValue === '') {
        document.getElementById('alert').classList.remove('d-none');
        return;
    }
    document.getElementById('alert').classList.add('d-none');
    
    addTaskDOM(inputValue);
    
    let tasks = JSON.parse(localStorage.getItem("task")) || [];
    tasks.push(inputValue);
    localStorage.setItem("task", JSON.stringify(tasks));
    document.getElementById('Taskinput').value = "";
}

function addTaskDOM(inputValue) {
    let ul = document.getElementById('UnoderList');
    let li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between ";
    
    li.innerHTML = `
        <span class='task-text'>${inputValue}</span>
        <div>
            <button class="btn  btn-sm " onclick="editTask(this)"><i class=" text-light ri-file-edit-fill"></i></button>
            <button class="btn btn-danger btn-sm" onclick="deleteTask(this)"><i class="text-light ri-delete-bin-5-fill"></i></button>
        </div>
    `;
    ul.appendChild(li);
}

function editTask(button) {
    let li = button.parentElement.parentElement;
    let taskText = li.querySelector(".task-text").textContent;
    let updatedTask = prompt("Edit Task:", taskText);
    if (updatedTask !== null && updatedTask.trim() !== "") {
        li.querySelector(".task-text").textContent = updatedTask.trim();
        updateLocalStorage();
    }
}

function deleteTask(button) {
    let li = button.parentElement.parentElement;
    li.remove();
    updateLocalStorage();
}

function updateLocalStorage() {
    let tasks = [];
    document.querySelectorAll(".task-text").forEach(task => {
        tasks.push(task.textContent);
    });
    localStorage.setItem("task", JSON.stringify(tasks));
}