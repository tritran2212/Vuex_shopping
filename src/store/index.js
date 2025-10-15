import Vue from 'vue';
import Vuex from 'vuex';
import * as products from './modules/products.js';
import * as cart from './modules/cart.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
    products,
    cart,
  },
});