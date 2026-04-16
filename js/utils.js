
// Utility functions

export function formatCurrency(amount) {
    return `KSh ${amount.toFixed(2)}`;
}

export function generateId() {
    return Date.now().toString(36);
}

export function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}