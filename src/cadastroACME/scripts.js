    var registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var newUsername = document.getElementById('newUsername').value;
            var newPassword = document.getElementById('newPassword').value;

            localStorage.setItem('username', newUsername);
            localStorage.setItem('password', newPassword);

            window.location.href = '../index.html';
        });
    }


const registerbutton = document.getElementById('registerbutton')
registerbutton.addEventListener('click', function(){
    window.location.href = './index.html';
})