const input = document.getElementById("todoInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("todoList");

const STORAGE_KEY = "todos";

// Load initial state
let todos = loadTodos();

// ---------- STORAGE HELPERS ----------
function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// ---------- ADD TODO ----------
button.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const newTodo = {
        id: Date.now(),
        text,
        completed: false
    };

    todos.push(newTodo);

    saveTodos();
    renderTodos();

    input.value = "";
});

// ---------- TOGGLE TODO ----------
function toggleTodo(id) {
    todos = todos.map(todo =>
        todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
    );

    saveTodos();
    renderTodos();
}

// ---------- DELETE TODO ----------
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);

    saveTodos();
    renderTodos();
}

// ---------- RENDER ----------
function renderTodos() {
    list.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = todo.text;

        if (todo.completed) {
            span.style.textDecoration = "line-through";
        }

        span.addEventListener("click", () => toggleTodo(todo.id));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

        li.appendChild(span);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

// ---------- INIT ----------
renderTodos();