// Variabel untuk mendapatkan ID di HTMLs
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
    const expectedUsername = "ridhuan";
    const expectedPassword = "123";

    const usernameInput = document.getElementById("username").value;
    const passwordInputValue = passwordInput.value;
    
    if (usernameInput === expectedUsername && passwordInputValue === expectedPassword) {
        document.getElementById("message").innerHTML = "Login berhasil!";
        location.href ="https://github.com/RidhuanDEV";
        // Di sini, Anda bisa mengarahkan pengguna ke halaman selanjutnya.
    } else {
        document.getElementById("message").innerHTML = "Login gagal. Silakan coba lagi.";
    }
});