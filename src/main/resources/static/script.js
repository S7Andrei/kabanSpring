document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('dueDate').value;

    const task = {
        title,
        description,
        priority,
        dueDate,
        status: 'todo'
    };

    addTask(task);
    closeTaskModal();
});

function addTask(task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Prioridade: ${task.priority}</p>
        <p>Data Limite: ${task.dueDate}</p>
        <button onclick="editTask(this)">Editar</button>
        <button onclick="deleteTask(this)">Excluir</button>
        <button onclick="moveTask(this, 'in-progress')">Mover para Em Progresso</button>
        <button onclick="moveTask(this, 'done')">Mover para Concluído</button>
    `;
    document.getElementById(task.status).querySelector('.task-list').appendChild(taskElement);
}

function editTask(button) {
    const taskElement = button.parentElement;
    const title = taskElement.querySelector('h3').innerText;
    const description = taskElement.querySelector('p').innerText;
    const priority = taskElement.querySelector('p:nth-child(3)').innerText.split(': ')[1];
    const dueDate = taskElement.querySelector('p:nth-child(4)').innerText.split(': ')[1];

    document.getElementById('title').value = title;
    document.getElementById('description').value = description;
    document.getElementById('priority').value = priority;
    document.getElementById('dueDate').value = dueDate;

    openTaskModal();
    taskElement.remove();
}

function deleteTask(button) {
    button.parentElement.remove();
}

function moveTask(button, status) {
    const taskElement = button.parentElement;
    taskElement.querySelector('button:nth-child(5)').style.display = status === 'in-progress' ? 'none' : 'inline-block';
    taskElement.querySelector('button:nth-child(6)').style.display = status === 'done' ? 'none' : 'inline-block';
    document.getElementById(status).querySelector('.task-list').appendChild(taskElement);
}

function openTaskModal() {
    document.getElementById('taskModal').style.display = 'block';
}

function closeTaskModal() {
    document.getElementById('taskModal').style.display = 'none';
    document.getElementById('taskForm').reset();
}