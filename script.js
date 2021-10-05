// ADCIONAR DATA ATUAL NA TELA 
const todayDate = document.getElementById('todayDate');
let data = new Date();

const addZero = (number) => {
    if (number <= 9)
        return "0" + number;
    else
        return number;
}
function today() {
    let date = (addZero(data.getDate().toString()) + "/" + (addZero(data.getMonth() + 1).toString()) + "/" + data.getFullYear());
    return date;
}

window.onload = () => todayDate.innerText = today();

//Validação campos vazios
let userName = document.getElementById('name');
let pass = document.getElementById('password');
let passConfirm = document.getElementById('passwordConfirm');
let email = document.getElementById('email');

const verifyEmptyValue = (input) => {
    if (input.value == '') {
        alert(`O campo ${input.name} não pode estar vazio`)
    } else {
        console.log(`${input.name} preenchido`);
    }
}

let inputsLogin = document.querySelectorAll('input');
const verifyInputs = () => {
    inputsLogin.forEach(input => {
        verifyEmptyValue(input);
    })
}


const form = document.querySelector('form')

form.addEventListener('submit', (event => {
    event.preventDefault()
    console.log('parou');
    verifyInputs()
}))

// salvar dados
function User(name, password, email)  {
    this.name = name;
    this.password = password;
    this.email= email;
}

let users = []


const saveUserData = () => {
    let user = new User(userName.value, pass.value, email.value) 
    users.push(user)
    localStorage.setItem('users', users)
}



