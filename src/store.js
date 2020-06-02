import Vue from "vue";
import Vuex from "vuex";
import request from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict:true,
    state:{
          itemThree: [
            {
              name:'Hyde Product Name',
              id:1,
              price:'140.99',
              color:'blue and white',
              order:'Order Now',
              image:'blanket_product_04_large@2x.png'
            },
            {
               name:'Hyde Product Name',
               id:2,
              price:'140.99',
              color:'blue and white',
              order:'Order Now',
              image:'2016-10-16_2048_large.png'
            },
            {
               name:'Hyde Product Name',
               id:3,
              price:'140.99',
              color:'blue and white',
              order:'Order Now',
              image:'blanket_product_03_large@2x.png'
            },
            {
              name: "Hyde Product Name",
              id: 4,
              price: "140.99",
              color: "blue and white",
              order: "Order Now",
              image: "blanket_product_04_large@2x.png"
            },
            {
              name: "Hyde Product Name",
              id: 5,
              price: "140.99",
              color: "blue and white",
              order: "Order Now",
              image: "2016-10-16_2048_large.png"
            },
            {
              name: "Hyde Product Name",
              id: 6,
              price: "140.99",
              color: "blue and white",
              order: "Order Now",
              image: "blanket_product_03_large@2x.png"
            }
          ],

          carts:[]
    },

    mutations:{
        AddtoCart(state, payload){
            console.log(state, payload);
            state.carts.push(state.itemThree[+payload])
        },
        remove(state, payload) {
            state.carts.splice(payload, 1);
          },
          total(state, payload){
            console.log("I cleared")
            state.carts = [];
          },
          updateCartsOnAppMounted(state, payload){
            if (payload){
            state.carts = payload;
            } else {
              state.carts = []
            }
          }
    },

    actions:{
      async getProductFromServer({ state }, payload) {
        const produce = await request.get("/api/products");
        console.log(produce);
        state.produce = produce.data.data;
      }
    }
})