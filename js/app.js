const form = document.getElementById('form');
const button = document.getElementById('button');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const nationality = document.getElementById('nationality');
const wrapper = document.getElementById('wrapper');

function validate() {
    if (name.value.length < 3) {
        alert('Name must be more than 3 characters');
        name.focus();
        name.classList.add('error');
        return false;
    } else {
        name.classList.remove('error');
    }

    if (!age.value || age.value > 150 || age.value < 0) {
        alert('Age is not valid');
        age.focus();
        age.classList.add('error');
        return false;
    } else {
        age.classList.remove('error');
    }

    return true;
}

function getUsers() {
    let users = [];
    const Users = localStorage.getItem('users');
    if (Users) {
        users = JSON.parse(Users);
    }
    return users;
}

button && button.addEventListener('click', function (event) {
    event.preventDefault();

    const isValid = validate();
    if (!isValid) {
        return;
    }

    const users = getUsers();
    const user = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        nationality: nationality.value,
        id: Date.now()
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    name.value = '';
    surname.value = '';
    age.value = '';
    nationality.value = '';

    const card = createCard(user);
    wrapper.innerHTML += card;
});

function createCard(user) {
    return `
        <div class="card">
            <h3>${user.name} ${user.surname}</h3>
            <p>Age: ${user.age}</p>
            <p>Nationality: ${user.nationality}</p>
            <button class="edit" data-id="${user.id}">Edit</button>
            <button class="delete" data-id="${user.id}">Delete</button>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const users = getUsers();
    if (users.length > 0) {
        users.forEach(element => {
            const card = createCard(element);
            wrapper.innerHTML += card;
        });
    }
});