// event add todo button
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.btn-add-todo').onclick = addTodo;
});

//function add todo
function addTodo(event) {
  event.preventDefault();
  const todoInput = document.getElementById('input').value;

  // Create an 'todo' :
  const todo = document.createElement('li');
  todo.classList.add('list-item');

  const todoContent = document.createElement('span');
  todoContent.innerHTML = `${todoInput}`;

  // Create btn delete
  const btnX = document.createElement('button');
  btnX.classList.add('btn', 'btn-delete');
  btnX.innerHTML = 'X';

  todo.appendChild(todoContent);
  todo.appendChild(btnX);

  document.querySelector('.todo-list').appendChild(todo);

  //function toggle done status
  todoContent.onclick = function toggleTodo() {
    todoContent.classList.toggle('toggle');
  };

  //function remove todo
  btnX.onclick = function removeTodo() {
    todo.remove();
  };
}
