const newTaskInput = document.getElementById('new-task');
const todoList = document.querySelector('.todo-list');
let nextTaskId = 6;

newTaskInput.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') {
    return;
  }

  const text = newTaskInput.value.trim();
  if (!text) {
    return;
  }

  addTodoItem(text);
  newTaskInput.value = '';
});

function addTodoItem(text) {
  const taskId = `task${nextTaskId++}`;

  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');

  checkbox.type = 'checkbox';
  checkbox.id = taskId;
  checkbox.className = 'task-checkbox';

  label.htmlFor = taskId;
  label.textContent = text;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  todoList.appendChild(listItem);
}
