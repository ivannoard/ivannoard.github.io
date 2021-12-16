const todoList = [];

function removeTodo(i) {
  todoList.splice(i, 1);
  displayTodo();
}

function clearTodo() {
  const todoTable = document.getElementById('todotable');
  while (todoTable.firstChild) {
    todoTable.removeChild(todoTable.firstChild);
  }
}

function createTodo(i, todo) {
  const trTodo = document.createElement('tr');
  const tableBtnCol = document.createElement('td');
  const tableBtn = document.createElement('input');
  tableBtn.value = 'Done';
  tableBtn.type = 'submit';
  tableBtn.onclick = function () {
    removeTodo(i);
  }
  tableBtnCol.appendChild(tableBtn);
  trTodo.appendChild(tableBtnCol);

  const tableText = document.createElement('td');
  tableText.textContent = todo;
  trTodo.appendChild(tableText);

  const todoTable = document.getElementById('todotable');
  todoTable.appendChild(trTodo);
}

function displayTodo() {
  clearTodo();
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    if (todo.toLowerCase().includes(search.value.trim().toLowerCase())) {
      createTodo(i, todo);
    }
  }
}

document.forms['additem'].onsubmit = function (event) {
  event.preventDefault();

  const todo = document.forms['additem']['addform'].value;
  if (todo) {
    todoList.push(todo);
  } else {
    alert('Masukkan Data');
  }

  document.forms['additem'].reset();
  displayTodo();
}

const search = document.getElementById('search')
search.onkeyup = displayTodo;
search.onkeydown = displayTodo;