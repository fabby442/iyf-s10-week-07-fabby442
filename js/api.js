
// Simulated API layer

export async function fetchProducts() {
    return [
        { id: 1, name: "Book", price: 15 },
        { id: 2, name: "Pen", price: 3 },
        { id: 3, name: "Notebook", price: 8 }
    ];
}