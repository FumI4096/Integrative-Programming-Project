function redirectToHome() {
    window.location.href = "../Home_Tab/index.html";
}

document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', redirectToHome);
});

const showPass = document.getElementById("eye-password").addEventListener("click", togglePassword);

function togglePassword(){

    const passwordInput = document.getElementById("password");

    const currentType = passwordInput.type;

    passwordInput.type = currentType === "password" ? "text" : "password"
}



