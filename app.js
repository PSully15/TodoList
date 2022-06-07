const input = document.querySelector('#todo');
const form = document.querySelector('#todo-form');
const ul = document.getElementById('list-items');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(input.value);
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    input.value = '';
    const removebtn = document.createElement('button');
    removebtn.innerText = 'Remove';
    newTodo.appendChild(removebtn);
    ul.appendChild(newTodo);
    form.reset();
});

ul.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('finished-to-do');
    }
});