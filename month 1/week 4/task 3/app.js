const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = '';
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

addTaskButton.addEventListener('click', addTask);

function simulateAsyncOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Async operation completed!');
        }, 1000);
    });
}

async function performAsyncTask() {
    try {
        const result = await simulateAsyncOperation();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

performAsyncTask();
