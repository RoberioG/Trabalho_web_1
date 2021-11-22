function alertaUsuario(texto){
    alert(texto);
}

var email = document.getElementById('email');
var password = document.getElementById('password');
email.addEventListener('focus', ()=>{
    email.style.borderColor = '#4A5F6A';
})
email.addEventListener('blur', ()=>{
    email.style.borderColor = '#ccc';
})
password.addEventListener('focus', ()=>{
    password.style.borderColor = '#4A5F6A';
})
password.addEventListener('blur', ()=>{
    password.style.borderColor = '#ccc';
})

/*
document.getElementById("submitBtn").addEventListener("Entrar", myFunction);
function myFunction(){
    window.location.href="redirecionamento.html"
}

function mostrarSenha(){
    var senha = document.getElementById("senha");
    if(senha.type == "password"){
        senha.type = "text";
    }else{
        senha.type = "password";
    }
}
*/
