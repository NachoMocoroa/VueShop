import Vue from 'vue'
import Vuex from 'vuex'
import vuexmethods from './methods'
import data from '../mocks/data'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: data.products,
    cart: data.cart,
    sizes: data.config.sizes,
    quantities: data.config.quantities
  },
  actions: {
    addToCart ({commit}, order ) {
      commit('ADD_TO_CART', order)
    },
    deleteToCart ({ commit }, index ) {
      commit('DELETE_TO_CART', index)
    },
    setCart ({ commit }, newArray )  {
      commit('SET_CART', newArray)
    },
    setItemPrice ({ commit }, data )  {
      commit('SET_ITEM_PRICE', data)
    },
    setItemQuantity ({ commit }, data )  {
      commit('SET_ITEM_QUANTITY', data)
    }
  },
  mutations: {
    'ADD_TO_CART': (state, order) => {
      state.cart.items.push(order);
      state.cart.total = vuexmethods.getters.getTotalPrice(state);
    },
    'DELETE_TO_CART': (state, index) => {
      state.cart.items.splice(index, 1);
    },
    'SET_CART': (state, newArray) => {
      state.cart.items = newArray;
    },
    'SET_ITEM_PRICE': (state, data) => {
      vuexmethods.setters.setItemPrice(state, data);
    },
    'SET_ITEM_QUANTITY': (state, data) => {
      vuexmethods.setters.setItemQuantity(state, data);
    }
  },
  getters: {
    getProducts: state => {
      return vuexmethods.getters.getProducts(state);
    },
    getCart: state => {
      return vuexmethods.getters.getCart(state);
    },
    getSizes: state => {
      return vuexmethods.getters.getSizes(state);
    },
    getQuantities: state => {
      return vuexmethods.getters.getQuantities(state);
    },
    getTotalPrice: state => {
      return vuexmethods.getters.getTotalPrice(state);
    }
  }
});
