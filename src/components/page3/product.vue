<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <div class="d-flex flex-column bd-highlight">
          <div class="bd-highlight imahe">
            <img
              id="__image"
              ref="image"
              v-if="currentProduct.images"
              v-bind:src="currentProduct.images[0].img"
            />
          </div>
          <div class="bd-highlight mt-5">
            <div
              class="d-flex flex-row bd-highlight justify-content-between tiger2"
            >
              <div
                class="bd-highlight tiger"
                v-for="(product, i) in currentProduct.images"
                :key="i"
                @click="changeImage(currentProduct.images[i].img)"
              >
                <img v-bind:src="currentProduct.images[i].img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex flex-column bd-highlight">
          <div class="bd-highlight max">
            <h2 v-if="currentProduct.name">{{ currentProduct.name }}</h2>
            <p>{{ currentProduct.shortDescription }}</p>
            <h2>{{ "$" + currentProduct.cost }}</h2>
            <div class="mt-5" v-if="itemNotInCart">
              <button type="button" class="btn btn-lg butt" v-on:click="buy()">
                ADD TO CART
              </button>
               <button type="button" class="btn btn-lg butt" @click="changeCounter('add')" > + </button>
               <b class="butt">{{counter}}</b>
               <button type="button" class="btn btn-lg butt" @click="changeCounter()"> - </button>
            </div>
            <div class="mt-5" v-else>
              <button type="button" class="btn btn-lg butt" disabled>
                ADDED TO CART
              </button>
            </div>
            <div v-if="authenticate">
              <button class="btn btn-danger mt-5 " @click="remove()"> Delete </button>
            </div>
          </div>
          <div class="bd-highlight london mt-5">
            {{ currentProduct.shortDescription }}
          </div>
          <div class="bd-highlight mt-5 describe">
            <h6>Description</h6>
            <p class="w-75">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the.
            </p>
            <div class="d-flex flex-column bd-highlight mb-3">
              <div class="bd-highlight">
                <div
                  class="d-flex flex-row bd-highlight mb-3"
                  v-for="(read, i) in note"
                  :key="i"
                >
                  <div class="bd-highlight">
                    <i class="fas fa-circle tire"></i>
                  </div>
                  <div class="bd-highlight entire w-50 ml-3">{{ read }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../axios";
import {authenticate} from "../../routeGuard"

export default {
  data() {
    return {
      note: [
        "A wonderful serenity has taken possession of my entire like these sweet mornings.",
        "A wonderful serenity has taken possession of my entire like these sweet mornings.",
      ],

      currentProduct: {},
      counter:1
    };
  },
  computed: {
    itemThree() {
      return this.$store.state.itemThree;
    },
    authenticate(){
      return authenticate()      
    },

    itemNotInCart(){
      let id = this.$route.params.id;
       let product = this.$store.state.carts.find((e) => e._id === id);
      if(product) return false;
      else return true;
    }
  },

  mounted() {
    // const firstIdea = () => {

    let id = this.$route.params.id;
    axios.get("api/products/" + id).then((product) => {
      console.log(product);
      this.currentProduct = product.data.data;
    });
  },

  methods: {
    changeImage (image) {
      console.log(this.$refs)
      this.$refs.image.src = image
    },
    buy() {
      let id = this.$route.params.id;
      let product = this.currentProduct
      console.log(product)
      product.qty = this.counter;
      const Items = localStorage.getItem("darts");
      if (Items) {
        let allPreviousItems = JSON.parse(Items);
        console.log(allPreviousItems, "all previous items");
        allPreviousItems.push(product);
        localStorage.setItem("darts", JSON.stringify(allPreviousItems));
        console.log(allPreviousItems, "I added a new item");
      } else {
        let firstItem = [];
        firstItem.push(product);
        localStorage.setItem("darts", JSON.stringify(firstItem));
      }
      console.log(product);
      this.$store.commit("AddtoCart", product);
    },

    changeCounter(type){
      if (type === 'add'){
        this.counter++
      } else {
        if (this.counter <= 1){
          return
        } else {
          this.counter--
        }
      }
    },

    remove(){
      let id = this.$route.params.id;
      axios.delete("api/products/" + id).then((product) => {
        console.log("deleted")
        this.$router.push("/shop")
      }, (err) => {
        alert("not deleted")
      })
    }
  }
};
</script>

<style></style>
