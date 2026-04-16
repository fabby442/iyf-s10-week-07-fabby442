// ---------- STATE ----------
const state = {
    count: 0,
    status: "Idle"
};

// ---------- DOM ----------
const countEl = document.getElementById("count");
const statusEl = document.getElementById("status");

const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");

// ---------- STATE UPDATE ----------
function setState(updates) {
    Object.assign(state, updates);
    render();
}

// ---------- ACTIONS ----------
function increment() {
    setState({
        count: state.count + 1,
        status: "Incremented"
    });
}

function decrement() {
    setState({
        count: state.count - 1,
        status: "Decremented"
    });
}

// ---------- RENDER ----------
function render() {
    countEl.textContent = state.count;
    statusEl.textContent = state.status;
}

// ---------- EVENTS ----------
incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);

// init
render();
// ---------- STORE ----------
function createStore(initialState) {
    let state = initialState;
    let listeners = [];

    return {
        getState: () => state,

        setState: (updates) => {
            state = { ...state, ...updates };
            listeners.forEach(fn => fn(state));
        },

        subscribe: (fn) => {
            listeners.push(fn);

            return () => {
                listeners = listeners.filter(l => l !== fn);
            };
        }
    };
}

// ---------- STORE INSTANCE ----------
const store = createStore({
    count: 0,
    status: "Idle"
});

// ---------- DOM ----------
const countEl = document.getElementById("count");
const statusEl = document.getElementById("status");

// ---------- SUBSCRIBE UI ----------
store.subscribe(state => {
    countEl.textContent = state.count;
    statusEl.textContent = state.status;
});

// ---------- ACTIONS ----------
document.getElementById("inc").addEventListener("click", () => {
    store.setState({
        count: store.getState().count + 1,
        status: "Incremented"
    });
});

document.getElementById("dec").addEventListener("click", () => {
    store.setState({
        count: store.getState().count - 1,
        status: "Decremented"
    });
});