// Model
// If localstorage has a todos array, then use it
// otherwise use the dfefault array
let todos;

// Retrieve localstorage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
// Check if it's an array
if (Array.isArray(savedTodos)) {
    todos = savedTodos; 
} else {
    todos = [{
        title: 'Get groceries',
        dueDate: '2022-10-04',
        id: 'id1'
    }, {
        title: 'Wash car',
        dueDate: '2022-11-04',
        id: 'id2'
    }, {
        title: 'Make dinner',
        dueDate: '2022-12-04',
        id: 'id3'
    }];
}

render();

//Creates a todo
function createTodo(title, dueDate ){
    const id =  '' + new Date().getTime();

        todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });
saveTodos();
    // html
}
// Deletes a todo
function removeTodo(idToDelete){
    todos = todos.filter(function (todo) {
        if (todo.id === idToDelete) {
            return false;
        }else{
            return true;
        }     
     });
     saveTodos();
}

function saveTodos(){
    localStorage.setItem('todo', JSON.stringify(todos));
}

// Controller
function addTodo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;


    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    createTodo(title, dueDate);
    render();
}

function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    removeTodo(idToDelete);
 render();
}
// View 
function render() {
    // reset our list
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todo) {
        const element = document.createElement('div');
        element.innerText = todo.title + ' ' + todo.dueDate;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 12px';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);


        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
}