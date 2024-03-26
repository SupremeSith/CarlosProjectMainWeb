document.addEventListener('DOMContentLoaded', function() {
    // ADICIONA EVENTO PARA O FORMULÁRIO DE LOGIN
    document.getElementById('loginForm').addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obter os valores dos campos de entrada
        const email = document.getElementById('loginEmail').value;
        const senha = document.getElementById('loginPassword').value;

        // Enviar uma solicitação POST para a API Flask com as credenciais de login
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, senha: senha})
        })
        .then(response => {
            if (response.ok) {
                // Se o login for bem-sucedido, redirecionar para a página homepage.html
                window.location.href = "./homepage.html";
            } else {
                // Se o login falhar, exibir mensagem de erro
                return response.json().then(data => {
                    alert(data.error);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao fazer login:', error);
        });
    });
});
