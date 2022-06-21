// Davi: Função em javascript para validar o formulário do "aply"

function validateForm(){
    var email = document.getElementsByName('email')[0].value
    var confirmEmail = document.getElementsByName('confirmemail')[0].value
    var birthdate = new Date(document.getElementsByName('birthdate')[0].value)

    // Davi: valida se o usuário é menor de 18 anos e se tem menos de 100 anos
    // Davi: valida se os campos do email são iguais
    if(email == confirmEmail && (2022 - birthdate.getFullYear()) < 100 && (2022 - birthdate.getFullYear()) > 18){
        // Davi: Substitui o conteúdo da tela pela mensagem de Parabéns por preencher corretamente
        document.querySelector('section').innerHTML = '<h1>Parabéns o formulário está correto!!</h1>'
        setInterval(
            function(){
                window.location.href = 'index.html'
            }
            , 5000
        ) 
    }else{
        // Davi: Retorna para o usuário que ocorreu erro
        document.getElementById('validateForm').textContent = 'O formulário está incorreto'
        setInterval(
            function(){
                document.getElementById('validateForm').textContent = ''
            }
        , 3000) 
    }
}