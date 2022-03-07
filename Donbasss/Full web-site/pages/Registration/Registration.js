username = document.querySelector('#username');
pass = document.querySelector('#password');
confirmpass = document.querySelector('#confirmpass');
btn = document.querySelector('#regbtn');
btn.setAttribute('disabled', true);
username.oninput = function() {
    if (username.value.length > 0) {
        pass.oninput = function() {
            if (pass.value.length > 0) {
                confirmpass.oninput = function() {
                    if (confirmpass.value.length > 0) {
                        btn.removeAttribute('disabled');
                    }
                    else {
                        btn.setAttribute('disabled', true);
                    }
                }
            }
        }
    }
}


function register() {
    pass1 = document.getElementById("password").value;
    pass2 = document.getElementById("confirmpass").value;
    if (pass1 == pass2) {
        alert('Вы успешно зарегестрировались!')
    }
    else {
        alert('Пароли не совпадают!');
    }
}