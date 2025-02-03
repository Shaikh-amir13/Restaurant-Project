document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.getElementById("signup-btn");

    signupBtn.addEventListener("click", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.querySelector(".name").value;
        const email = document.querySelector("#email-reg").value;
        const password = document.querySelector("#password-reg").value;
        const confirmPassword = document.querySelector("#confpass-reg").value;

        // Validation
        if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
            alert("All fields are required.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email format.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Get stored users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if user already exists
        if (users.some(user => user.email === email)) {
            alert("User already exists with this email.");
            return;
        }

        // Store new user
        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful! You can now log in.");
        window.location.href = "login_page.html"; // Redirect to login page
    });
});
