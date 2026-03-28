document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match! ❌");
        return;
    }

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        if (data.message.includes("✅")) {
            window.location.href = "login.html"; // login page pe bhejo
        }
    })
    .catch(err => {
        console.error("Error:", err);
        alert("Server se connect nahi ho pa raha! Node server chalu hai?");
    });
});