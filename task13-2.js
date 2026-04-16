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

        // Text
        const span = document.createElement("span");
        span.textContent = todo.text;

        if (todo.completed) {
            span.style.textDecoration = "line-through";
        }

        // Toggle when clicking text
        span.addEventListener("click", () => {
            toggleTodo(todo.id);
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        deleteBtn.addEventListener("click", () => {
            deleteTodo(todo.id);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}