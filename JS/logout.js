document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser"); // Remove session
            alert("You have logged out.");
            window.location.href = "login_page.html"; // Redirect to login page
        });
    }
});
