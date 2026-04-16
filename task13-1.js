// Store a value
localStorage.setItem("username", "Fabby");

// Retrieve it
const username = localStorage.getItem("username");
console.log("Username:", username);

// Check if it exists
if (localStorage.getItem("username")) {
    console.log("User exists");
}
// Create object
const user = {
    name: "Fabby",
    age: 22,
    hobbies: ["coding", "gaming"]
};

// Convert to string before saving
localStorage.setItem("user", JSON.stringify(user));

// Get from storage
const storedUser = localStorage.getItem("user");

// Convert back to object
const parsedUser = JSON.parse(storedUser);

console.log(parsedUser);
console.log(parsedUser.name);