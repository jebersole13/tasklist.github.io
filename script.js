const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos =JSON.parse(localStorage.getItem('todos'))

if(todos){
  todos.forEach(todo=>addToDo(todo))
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  addToDo();
})

function addToDo(todo){
  let todoText =input.value;
  if(todo){
    todoText=todo.text;
  }

  if(todoText){
    const toDoEl= document.createElement('li');
    if(todo && todo.completed){
      toDoEl.classList.add('completed')
    }
    toDoEl.innerText = todoText;

    toDoEl.addEventListener('click', ()=>{toDoEl.classList.toggle('completed')
    updateLS()
  })

    toDoEl.addEventListener('contextmenu', (e)=>{e.preventDefault()
    toDoEl.remove();
    updateLS();
    });

    todosUL.appendChild(toDoEl)
    input.value='';

    updateLS()
  }
}

function updateLS(){
  toDoEl = document.querySelectorAll('li');

  const todos = [];

  toDoEl.forEach(toDoEl =>{
    todos.push({
      text:toDoEl.innerText,
      completed: toDoEl.classList.contains('completed')

    })
  })
localStorage.setItem('todos', JSON.stringify(todos))
}

