const field = document.querySelector('#field');
const button = document.getElementById('button');
const wrapper = document.querySelector('#todo-wrapper');  

function createItem(value) {
    return `
              <div class="left">
                   name:<p>${value}</p>
                   surname:<p>${value}</p>
                   age:<p>${value}</p>
              </div>
    `;
    }    

    
button && button.addEventListener('click', function (event) {
    event.preventDefault();
    const todo = field.value;

    if(todo.length < 5){
        alert('Eng kamida 6 ta belgidan iborat bolishi kerak');

        field.focus();
        field.style.outlineColor = 'red';
        return;
    }

    const item = createItem(todo);
    wrapper.innerHTML += item;

    field.value = '';
    field.focus();
    saveItemLocalStroge(field.value);
});

const local = document.querySelector('#local');
local && local.addEventListener('click', function () {
     let name = 'Ahrorbek';
     localStorage.setItem('name', name);
     localStorage.setItem('age', age);

     const users = [
          {name: 'john', age: 25},
          {name: 'doe', age: 35},
     ];

     localStorage.setItem('users', JSON.stringify(users))
})
local.style.padding = '10px 20px';
local.style.marginTop = '25px';
local.style.marginLeft = '25px';
local.style.borderRadius = '12px';
local.style.border = 'none';
local.style.background = 'transparent';
local.style.border = '1px solid #ababab';
local.style.cursor = 'pointer';
local.style.fontSize = '16px';
local.style.fontWeight = '500';
local.style.alignItems = 'center';
local.style.color = 'chocolate';  