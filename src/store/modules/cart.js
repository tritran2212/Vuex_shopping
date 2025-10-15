export const namespaced = true;
const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
};

const getCartFromLocalStorage = () => {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
};
export const state = {
    items: getCartFromLocalStorage(),
};
export const mutations = {
    PUSH_PRODUCT_TO_CART(state, product) {
        state.items.push({ ...product, quantity: 1 });
        saveCartToLocalStorage(state.items);
    },
    INCREMENT_ITEM_QUANTITY(state, cartItem) {
        cartItem.quantity++;
        saveCartToLocalStorage(state.items);
    },
    REMOVE_ITEM_FROM_CART(state, productId) {
        state.items = state.items.filter((item) => item.id !== productId);
        saveCartToLocalStorage(state.items);
    },
    CLEAR_CART(state) {
        state.items = [];
        saveCartToLocalStorage(state.items); // Cập nhật localStorage để giỏ thật sự trống
    },
};

export const actions = {
    addProductToCart({ state, commit }, product) {
        const cartItem = state.items.find((item) => item.id === product.id);
        if (cartItem) {
            commit('INCREMENT_ITEM_QUANTITY', cartItem);
        } else {
            commit('PUSH_PRODUCT_TO_CART', product);
        }
    },
    removeProductFromCart({ commit }, productId) {
        commit('REMOVE_ITEM_FROM_CART', productId);
    },
    checkout({ commit }) {
        commit('CLEAR_CART');
    },
};
export const getters = {
    cartItems: (state) => state.items,
    cartItemCount: (state) => {
        return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    cartTotalPrice: (state) => {
        return state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
    
};