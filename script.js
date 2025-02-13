document.getElementById("register").addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const termsChecked = document.getElementById("terms").checked;

    if (!username || !email || !password || !confirmPassword || !termsChecked) {
        alert("Please fill in all the required fields and agree to the terms and conditions.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const userData = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Registration successful!");
    console.log("Registered User:", userData);

    window.location.href = "login.html";
});

document.addEventListener("DOMContentLoaded", function () {
    //Log in
    const loginButton = document.getElementById("login");
    if (loginButton) {
        loginButton.addEventListener("click", function () {
            const savedUser = JSON.parse(localStorage.getItem("userData"));

            if (!savedUser) {
                alert("No user data found. Please register first.");
                return;
            }

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;

            if (username === savedUser.username && password === savedUser.password) {
                alert("Login successful!");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password.");
            }
        });
    }
})