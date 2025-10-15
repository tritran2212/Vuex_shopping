
import ApiService from '../../services/ApiService.js';
export const namespaced = true;

export const state = {
    all: [],
    categories: [],
    status: 'idle',
    searchQuery: '',
    selectedCategory: 'all',
};
export const mutations = {
    SET_PRODUCTS(state, products) {
        state.all = products;
    },
    SET_CATEGORIES(state, categories) {
        state.categories = categories;
    },
    SET_STATUS(state, status) {
        state.status = status;
    },
    SET_SEARCH_QUERY(state, query) {
        state.searchQuery = query;
    },
    SET_SELECTED_CATEGORY(state, category) {
        state.selectedCategory = category;
    },
};

export const actions = {
    async fetchAll({ commit }) {
        commit('SET_STATUS', 'loading');
        try {
            const [productsResponse, categoriesResponse] = await Promise.all([
                ApiService.getProducts(),
                ApiService.getCategories(),
            ]);
            commit('SET_PRODUCTS', productsResponse.data);
            commit('SET_CATEGORIES', categoriesResponse.data);
            commit('SET_STATUS', 'success');
        } catch (error) {
            console.error('Loi API ', error);
            commit('SET_STATUS', 'error');
        }
    },
    updateSearchQuery({ commit }, query) {
        commit('SET_SEARCH_QUERY', query);
    },
    updateSelectedCategory({ commit }, category) {
        commit('SET_SELECTED_CATEGORY', category);
    },
};

export const getters = {
    filteredProducts: (state) => {
        let products = state.all;

        if (state.selectedCategory !== 'all') {
            products = products.filter(p => p.category === state.selectedCategory);
        }
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            products = products.filter(p => p.title.toLowerCase().includes(query));
        }
        return products;
    },
    getProductById: (state) => (id) => {
        return state.all.find(p => p.id === Number(id));
    },
};