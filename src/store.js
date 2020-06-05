import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    itemThree: [],

    carts: [],
  },

  mutations: {
    AddtoCart(state, payload) {
      state.carts.push(payload);
    },
    remove(state, payload) {
      state.carts.splice(payload, 1);
    },
    total(state, payload) {
      console.log("I cleared");
      state.carts = [];
    },
    updateCartsOnAppMounted(state, payload) {
      if (payload) {
        state.carts = payload;
      } else {
        state.carts = [];
      }
    },
    fromServer(state, payload) {
      state.itemThree = payload;
    },
  },

  actions: {
    getProductFromServer: ({ state, commit }, payload) => {
      axios.get("api/products").then(
        (product) => {
          console.log(product);
          commit("fromServer", product.data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
});
