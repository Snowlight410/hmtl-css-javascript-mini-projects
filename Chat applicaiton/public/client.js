let socket = io();
let input = document.getElementById('input');
let button = document.getElementById('button');
let messages = document.getElementById('messages');


button.addEventListener('click',()=>{
    sendmessage(input.value)
    
})

function sendmessage(msg){
    appendclass(msg,'outgoing')
    socket.emit('chat message',msg)
}

function appendclass(msg,type){
let classname  =type
let div = document.createElement('div')
div.classList.add(classname)

let data =`
<p>${msg}</p>
`
div.innerHTML=data

messages.appendChild(div)
}

socket.on('message',(msg)=>{

appendclass(msg,'incomming')    
})

