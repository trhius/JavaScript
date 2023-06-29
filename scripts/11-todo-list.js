const todoList = [
  
];

displayTodoList(); 

function displayTodoList() {
  let todoListHTML = '';
  for(let i = 0; i < todoList.length; i++){
    //const name = todoList[i].name;
    //const date = todoList[i].date;
    const {name, date} = todoList[i];
    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        displayTodoList();
      ">Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}



function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;
  
  todoList.push({
    name, 
    date
  });

  inputElement.value = '';
  dateInputElement.value = '';

  displayTodoList(); 
}
