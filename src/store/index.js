import { createStore } from 'vuex';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

//we will create mutations and to fetch the products from the API
//then we will create another mutations to set the products in the shopping bag

export default createStore({
  state: {
    products :[],
    cart : [],
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    cartTotal: (state) => {
      return state.cart.reduce((total, product) => total + product.price, 0);
    }
  },

  //mutations are functions that can be used to access the state
  mutations: {
    SET_PRODUCTS(state, products){
      state.products = products;
    },
    ADD_TO_CART(state, product){
      const item = {...product, uniqueId: uuidv4()};
      state.cart.push(item);
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    REMOVE_FROM_CART(state, uniqueId) {
      state.cart = state.cart.filter((item) => item.uniqueId !== uniqueId);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }, 
    SET_CART(state, cart){
      state.cart = cart;
    },
  },

  // actions are asynchronous functions that can be used to commit mutations
  // they can't change the state directly, but they can commit mutations
  // this allow us to modify our datas in a more controlled way
  //call a mutations requires the commit function

  // getters and setters are called in the computeds,
  // actions are called in the methods

  actions: {
    async fetchProducts({ commit}) {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        commit('SET_PRODUCTS', response.data);
      } catch (error) {
        console.error('Erreurs de la récupération des produits', error);
      }
    },
    addToCart({commit }, product){
      commit('ADD_TO_CART', product);
    },
    removeFromCart({commit}, uniqueId){
      commit('REMOVE_FROM_CART', uniqueId);
    },
    loadCart({ commit}){
      const cart = JSON.parse(localStorage.getItem('cart'));
      if(cart)
        {
          commit('SET_CART', cart);
        }
    },
  },
  modules: {
  }
})
