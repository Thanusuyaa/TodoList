let button=document.getElementById('add');
let todolist= document.getElementById('todoList');
let input= document.getElementById('input');

let todos=[];
button.addEventListener('click',()=>{todos.push(input.value)
    addtodo(input.value)
    input.value=' '
})
function addtodo(todo){
   let para= document.createElement('p');
   para.innerText = todo
   todoList.appendChild(para)
}