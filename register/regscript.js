function toLogin() {
    window.location.href = "../index.html";
}

document.addEventListener('DOMContentLoaded', function () {
    var submitButton1 = document.getElementById('submit1');
    var submitButton2 = document.getElementById('submit2');
    submitButton1.addEventListener('click', toLogin);
    submitButton2.addEventListener('click', toLogin);
});

const showPass = document.getElementById("eye-password").addEventListener("click", togglePassword);

function togglePassword(){

    const passwordInput = document.getElementById("password");

    const currentType = passwordInput.type;

    passwordInput.type = currentType === "password" ? "text" : "password";
}
