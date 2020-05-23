var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';
    for( todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        var espacoText = document.createTextNode(' ');
       
        linkElement.setAttribute('href', '#');
        
        var pos = todos.indexOf(todo);
        
        

        linkElement.appendChild(linkText);
        linkElement.setAttribute('onclick',`deleteTodo(${pos})`)
        todoElement.appendChild(todoText);
        todoElement.appendChild(espacoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        
    }
}

renderTodos();

function addTodos() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodos;

function deleteTodo(pos) {
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}