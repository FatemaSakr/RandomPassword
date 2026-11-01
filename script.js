let btnEl = document.querySelector('.btn');
let copyBtn = document.querySelector('.btn-copy');
let input = document.getElementById('input');
let alertEl = document.querySelector('.alert-container')
const chars = '1234567890!@#$%^&*qwertyuiopasdfghjk;l';
btnEl.addEventListener('click', _=>{
    let password = "";
    for(let i = 0 ; i< 12; i++){
        let randomPassword = Math.floor(Math.random()* chars.length); //ليه قولنا في السطر ده * chars.length مش في 12
        password += chars[randomPassword];

    }
    input.value= password;
})
copyBtn.addEventListener('click', _=>{
    if(input !== ""){
      navigator.clipboard.writeText(input.value);
    alertEl.classList.add('active');
    setTimeout(() => {
        alertEl.classList.remove('active')
    }, 2000);
    }

    
    
})