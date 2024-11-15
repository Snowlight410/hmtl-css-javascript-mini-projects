let input = document.querySelector('input')
let addItem = document.querySelector('.add')
let items = document.getElementById('items')

function addTodoitem(){
let todotext = input.value.trim()
if(todotext!==''){
    const listItem = document.createElement("li");
    listItem.textContent = todotext;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodoItem);
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTodoItem);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    items.appendChild(listItem);
    input.value = '';
}
}
function deleteTodoItem() {
const listItem= this.parentNode
  items.removeChild(listItem)
}
function editTodoItem() {
   const listItem= this.parentNode
   const todoText = listItem.firstChild.textContent
   const updatedText = prompt("Update the todo item", todoText);
   if(updatedText !== null && updatedText.trim() !== '') {
    listItem.firstChild.textContent = updatedText
   }
}
addItem.addEventListener('click', addTodoitem)



