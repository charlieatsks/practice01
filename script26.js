const input = document.querySelector("input");
const addButton = document.querySelector(".add-button");
const todosHtml = document.querySelector(".todos");
const emptyImage = document.querySelector(".em-images");
let todosJson = JSON.parse(localStorage.getItem("todos")) || [];

function getTodoHtml(todo, index) {
    let checked = todo.status == "completed" ? "checked" : "";
    return /* HTML */`
        <li class="todo">
    `;
}

function showTodos() {
    if(todosJson.length == 0){
        todosHtml.innerHTML = '';
        emptyImage.style.display = 'block';
    } else{
        todosHtml.innerHTML = todosJson.map(getTodoHtml).join('');
        emptyImage.style.display = 'none';
    }
}

function addTodo(todo) {
    input.value = "";
    todosJson.unshift({ name: todo, status: "pending"});
    localStorage.setItem("todos", JSON.stringify(todosJson));
    showTodos();
}




