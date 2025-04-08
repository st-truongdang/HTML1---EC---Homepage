// event add todo button
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.btn-add-todo').onclick = addTodo;
});

//function add todo
function addTodo(event) {
  event.preventDefault();
  const todoInput = document.getElementById('input').value;
  console.log(todoInput);

  // Create an 'todo' :
  const todo = document.createElement('li');
  todo.innerHTML = `${todoInput}`;
  todo.classList.add('list-item');

  // Create btn delete
  const btnX = document.createElement('button');
  btnX.classList.add('btn-delete');
  btnX.innerHTML = 'X';

  //create btn done
  const btnDone = document.createElement('button');
  btnDone.classList.add('btn-toggle');
  btnDone.innerHTML = 'Toggle';

  // append btns
  todo.appendChild(btnDone);
  todo.appendChild(btnX);

  document.querySelector('.todo-list').appendChild(todo);

  //function toggle done status
  btnDone.onclick = function toggleTodo() {
    todo.classList.toggle('toggle');
  };

  //function remove todo
  btnX.onclick = function removeTodo() {
    todo.remove();
  };
}
