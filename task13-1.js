// Save data
function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Get data
function getFromStorage(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

// Remove data
function removeFromStorage(key) {
    localStorage.removeItem(key);
}

// -------------------
// TESTING THE FUNCTIONS
// -------------------

// Save
saveToStorage("settings", {
    theme: "dark",
    fontSize: 16
});

// Get
const settings = getFromStorage("settings", {
    theme: "light",
    fontSize: 14
});

console.log(settings);

// Remove (optional test)
// removeFromStorage("settings");