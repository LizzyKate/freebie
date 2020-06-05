<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <div class="d-flex flex-column bd-highlight">
          <div class="bd-highlight imahe">
            <img
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
            <div class="mt-5">
              <button type="button" class="btn btn-lg butt" v-on:click="buy()">
                ADD TO CART
              </button>
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

export default {
  data() {
    return {
      note: [
        "A wonderful serenity has taken possession of my entire like these sweet mornings.",
        "A wonderful serenity has taken possession of my entire like these sweet mornings.",
      ],

      currentProduct: {},
    };
  },
  computed: {
    itemThree() {
      return this.$store.state.itemThree;
    },
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
    buy() {
      let id = this.$route.params.id;
      let product = this.itemThree.find((e) => e._id === id);
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
  },
};
</script>

<style></style>
