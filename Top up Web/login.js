
const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("showPassword");

showPasswordCheckbox.addEventListener("change", function() {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ganti username dan password sesuai dengan yang Anda inginkan
    const expectedUsername = "username";
    const expectedPassword = "password";

    const usernameInput = document.getElementById("username").value;
    const passwordInputValue = passwordInput.value;
    
    if (usernameInput === expectedUsername && passwordInputValue === expectedPassword) {
        document.getElementById("message").innerHTML = "Login berhasil!";
        // Di sini, Anda bisa mengarahkan pengguna ke halaman selanjutnya.
    } else {
        document.getElementById("message").innerHTML = "Login gagal. Silakan coba lagi.";
    }
});