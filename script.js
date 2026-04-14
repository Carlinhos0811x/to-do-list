// script.js - Lógica da aplicação To-Do List
// Este arquivo contém todas as funções JavaScript para gerenciar as tarefas

// Selecionar elementos do DOM
const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

/**
 * Função para adicionar uma nova tarefa à lista
 * Valida o input, cria os elementos HTML e adiciona à lista
 */const newTaskInput = document.getElementById('new-task');
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

function addTask() {
    // Obter valores dos inputs
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    // Validação: verificar se o texto da tarefa não está vazio
    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    // Obter data e hora atual
    const now = new Date();
    const timestamp = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    // Criar o elemento <li> para a tarefa
    const li = document.createElement('li');
    li.className = priority; // Classe baseada na prioridade (high, medium, low)

    // Criar o elemento <span> para o texto da tarefa com timestamp
    const span = document.createElement('span');
    span.textContent = `${taskText} - ${timestamp}`;

    // Criar o botão para marcar como concluída
    const button = document.createElement('button');
    button.className = 'complete-btn';
    button.textContent = 'Concluir';

    // Adicionar evento de clique ao botão para alternar o status
    button.addEventListener('click', function() {
        toggleTaskCompletion(li, button);
    });

    // Montar a estrutura: span e button dentro do li
    li.appendChild(span);
    li.appendChild(button);

    // Adicionar a nova tarefa à lista
    taskList.appendChild(li);

    // Limpar o campo de input após adicionar
    taskInput.value = '';
}

/**
 * Função para alternar o status de conclusão de uma tarefa
 * @param {HTMLElement} li - O elemento da tarefa
 * @param {HTMLElement} button - O botão da tarefa
 */
function toggleTaskCompletion(li, button) {
    // Alternar a classe 'completed' no li
    li.classList.toggle('completed');

    // Atualizar o texto do botão baseado no status
    if (li.classList.contains('completed')) {
        button.textContent = 'Concluída';
    } else {
        button.textContent = 'Concluir';
    }
}

// Event listener para o botão "Adicionar"
addTaskBtn.addEventListener('click', addTask);

// Permitir adicionar tarefa pressionando Enter no input
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Inicializar event listeners para tarefas existentes
document.querySelectorAll('.complete-btn').forEach(button => {
    button.addEventListener('click', function() {
        const li = button.parentElement;
        toggleTaskCompletion(li, button);
    });
});
