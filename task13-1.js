// Store a value
localStorage.setItem("username", "Fabby");

// Retrieve it
const username = localStorage.getItem("username");
console.log("Username:", username);

// Check if it exists
if (localStorage.getItem("username")) {
    console.log("User exists");
}