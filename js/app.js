const form = document.getElementById('form');
const button = document.getElementById('button');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const nationality = document.getElementById('nationality');
const wrapper = document.getElementById('wrapper');

function validate() {
    if(name.value.length < 3){
        alert('Name must be more than 3 character');
        name.focus();
        name.style.outlineColor = 'red';
        return false;

    }

    if(!age.value || age.value > 150 || age.value < 0){
            alert('Age is not valid');
            age.focus();
            age.style.outlineColor = 'red';
            return false;
    }



    return true;
}

function getUsers() {
    const users = [];
    if(localStorage.getItem('users')){
        users = JSON.parse(localStorage.getItem('users'))
    }
    return users;
}

button && button.addEventListener('click', function(event){
    event.preventDefault();

    const isValid = validate();
    if(!isValid){
        return;
    }

    const users = getUsers();
    const user = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        nationality: nationality.value,
        id: Date.now()
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    form.reset();
});

function createCard(user) {
    return `
    <div class="card">
    <h3>${user.name + " " + user.surname }</h3>
    <p>${user.age}</p>
    <p>${user.nationality}</p>

    <button data-id = "${user.id}">edit</button>
    <button data-id = "${user.id}">delete</button>
</div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    let users = getUsers();
    users.length > 0 && users.forEach(element => {
        let card = createCard(element)
        wrapper.innerHTML += card; 
    });
})