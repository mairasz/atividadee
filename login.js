let emails = ["ricardo.silva@outlook.com", "mariasantosgmail.com"]
let senhas = ["abc1", "fgh1"]
let usuarios = ["ricardo", "maria"]

function login(){

    let email = id_email.value
    let senha = id_senha.value
    let auth = false

    for (let contador = 0; contador < emails.length; contador++) {
        
        if(email == emails[contador]){
           if(senha == senhas[contador]){
            auth = true
            alert("Bem-vindo!")
            }
        }
    }

    if(auth == false){
        alert('e-mail ou senha incorretos. tente novamente')
    }
    

}