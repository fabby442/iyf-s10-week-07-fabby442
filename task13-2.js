const input = document.getElementById("todoInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// STATE (important)
let todos = [];

// Add todo
button.addEventListener("click", () => {
    const text = input.value.trim();

    if (!text) return;

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(newTodo);

    renderTodos();

    input.value = "";
});

// Render function (VERY IMPORTANT)
function renderTodos() {
    list.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        list.appendChild(li);
    });
}