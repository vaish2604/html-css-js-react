function addTask() {
    let input = document.getElementById('todoInput')
    let todolist = document.getElementById('todolist')

    let textInput = input.value
    if(textInput === " ") return;

    let li = document.createElement('li')
    li.textContent = textInput;

    let btn = document.createElement('button')
    btn.textContent = '✖️'

    btn.onclick = function(){
        li.remove()
    }

    li.appendChild(btn)
    todolist.appendChild(li)

    input.value=" "
}