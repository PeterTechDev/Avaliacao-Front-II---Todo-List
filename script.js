// let button = document.querySelector('button')
// button.addEventListener('click', function (event) {
//     event.preventDefault()

//     let usuario = document.getElementById('username').value
//     let senha = document.getElementById('password').value

//     fetch('https://jsonplaceholder.typicode.com/todos%27')
//         .then((response) => response.json())
//         .then((json) => json.map(json => {
//             if (json.username == usuario) {
//                 alert("Usuário encontrado.")
//             } else {
//                 console.log("Usuário não encontrado.")
//             }
//         }))
// })


// ADCIONAR DATA ATUAL NA TELA 
const todayDate = document.getElementById('todayDate');
let data = new Date();

const addZero=(number)=>{
    if (number <= 9) 
        return "0" + number;
    else
        return number; 
}
function today(){
    let date = (addZero(data.getDate().toString()) + "/" + (addZero(data.getMonth()+1).toString()) + "/" + data.getFullYear());
    return date;
}

window.onload=()=> todayDate.innerText = today();


