function login(email, senha){
    email = prompt("Digite seu email:");
    senha = prompt("Digite sua senha:");
}

function mostrarSenha(){
    var senha = document.getElementById("senha");
    if(senha.type == "password"){
        senha.type = "text";
    }else{
        senha.type = "password";
    }
}

function alertaUsuario(texto){
    alert(texto);
}