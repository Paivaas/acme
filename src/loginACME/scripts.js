
document.addEventListener('DOMContentLoaded', function() {
    
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            var storedUsername = localStorage.getItem('username');
            var storedPassword = localStorage.getItem('password');

            if (username === storedUsername && password === storedPassword) {
                window.location.href = './homeACME/home.html';
            } else {
                alert('Usuário ou senha incorretos.');
            }
        });
    }
})

const registerbutton = document.getElementById('registerbutton')
registerbutton.addEventListener('click', function(){
    window.location.href = './cadastroACME/cadastro.html';
})