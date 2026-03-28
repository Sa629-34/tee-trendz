document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Please enter both email and password!");
        return;
    }

    // 👇 SERVER SE LOGIN KARO
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.user) {
            // 👇 USER LOCALSTORAGE MEIN SAVE KARO
            localStorage.setItem("user", JSON.stringify(data.user));
            alert("Login Successful! ✅");
            window.location.href = "women.html"; // women page pe bhejo
        } else {
            alert(data.message); // "Wrong password" ya "User not found"
        }
    })
    .catch(err => {
        console.error("Login Error:", err);
        alert("Server se connect nahi ho pa raha! Node server chalu hai?");
    });
});