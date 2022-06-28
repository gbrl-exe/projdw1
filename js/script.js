// Davi: Função em javascript para validar o formulário do "Contact Us!"

function validateForm(){
    var email = document.getElementsByName('email')[0].value
    var confirmEmail = document.getElementsByName('confirmemail')[0].value
    var birthdate = new Date(document.getElementsByName('birthdate')[0].value)

    // Davi: valida se o usuário é menor de 18 anos e se tem menos de 100 anos
    // Davi: valida se os campos do email são iguais
    if(email == confirmEmail && (2022 - birthdate.getFullYear()) < 100 && (2022 - birthdate.getFullYear()) > 18){
        // Davi: Substitui o conteúdo da tela pela mensagem de Parabéns por preencher corretamente
        document.querySelector('article').innerHTML = '<h1>Your message has been sent successfully!</h1>'
        setInterval(
            function(){
                window.location.href = 'index.html'
            }
            , 5000
        ) 
    }else{
        // Davi: Retorna para o usuário que ocorreu erro na entrada de dados
        
        if (email != confirmEmail)
        document.getElementById('validateForm').textContent = 
        'a different email was placed in the confirmation'

        if ((2022 - birthdate.getFullYear()) < 18)
        document.getElementById('validateForm').textContent = 
        'We do not accept contacts from under 18s.'
         
    }
}