document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");

    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const email = document.querySelector("#email-login").value;
        const password = document.querySelector("#password-login").value;

        if (email.trim() === "" || password.trim() === "") {
            alert("Email and password cannot be empty.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Login successful!");
            
            // Store user session in localStorage
            localStorage.setItem("loggedInUser", JSON.stringify(user));

            window.location.href = "index.html";
        } else {
            alert("Invalid email or password.");
        }
    });
});
