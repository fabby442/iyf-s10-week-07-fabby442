
// Central application state

export const state = {
    cart: [],
    products: [],
    user: null
};

export function setCart(cart) {
    state.cart = cart;
}

export function getCart() {
    return state.cart;
}