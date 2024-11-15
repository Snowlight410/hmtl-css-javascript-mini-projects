const input  = document.querySelector('input')
const add = document.querySelector('.add')
const addText = add.innerText
const items = document.querySelector('#items')
let array = []
let edit_id=null
let objstring = localStorage.getItem('users')
if(objstring!==null){
    array=JSON.parse(objstring)
}
function todolist(){
    const name = input.value
    if(name===''){
        alert('please enter a name')
    }
    else{
        if(edit_id != null){
            array.splice(edit_id,1,{'name':name})
            edit_id  = null
        }
        else{
            array.push({'name':name})
        }
        saveInfo(array)
        input.value = ''
        add.innerText = addText
    }
}
function saveInfo(){
localStorage.setItem('users',JSON.stringify(array))
DisplayInfo()
}
function DisplayInfo(){
let statement = ''
array.forEach((item,i)=>{
    statement +=`
    <li>${item.name}<div class='edit-delete'><button class='edit' onclick='EditInfo(${i})'>Edit</button><button class='delete' onclick='DeleteInfo(${i})'>delete</button></div></li>
    `
})
items.innerHTML = statement
}
function EditInfo(id){
edit_id = id
input.value = array[id].name
add.innerText = 'Save changes'
}
function DeleteInfo(id){
array.splice(id,1)
saveInfo(array)
}
add.addEventListener('click',todolist)