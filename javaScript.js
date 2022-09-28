let todos = ['Get groceries', 'Wash car', 'Make dinner', 'Do laundry'];
todos.push('another todo')

todos.forEach(function (todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
});