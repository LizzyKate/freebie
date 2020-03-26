<template>
  <div class="container-fluid pl-5">
    <div class="row mx-auto">
      <div class="p-0 feat mr-3">
        <div class="d-flex flex-column bd-highlight">
          <div
            class="mt-5 bd-highlight"
            v-for="(item, i) in list"
            :key="i"
            :class="{'jona': item.short_name === choose }"
          >
            <div
              class="d-flex flex-row bd-highlight justify-content-around mb-3"
              @click="changeMe(item.short_name)"
            >
              <div class="bd-highlight red">{{item.long_name}}</div>
              <div class="bd-highlight">
                <span class="art">
                  <i class="fas fa-question"></i>
                </span>
              </div>
            </div>
            <div class="under"></div>
          </div>
        </div>
      </div>
      <div class="col p-0 ml-5">
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="bd-highlight cuddle">
            <img src="../../assets/img/cuddle.png" />
          </div>
          <div class="bd-highlight remove mt-3">
            <div class="d-flex flex-row bd-highlight justify-content-between align-items-center">
              <div class="bd-highlight hyde">Hyde Product Name</div>
              <div class="pt-3 bd-highlight">
                <div class="d-flex flex-row bd-highlight">
                  <div class="bd-highlight">
                    <span class="tion">
                      <i class="fas fa-question"></i>
                    </span>
                  </div>
                  <div class="bd-highlight mt-1 number">
                    <p>(25)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bd-highlight blue">BLUE & WHITE</div>
          <div class="bd-highlight mt-3">
            <div class="d-flex flex-row bd-highlight align-items-center">
              <div class="bd-highlight order">ORDER NOW</div>
              <div class="ml-1 bd-highlight now"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="strike my-5"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choose: "New",
      list: [
        { short_name: "Feautured", long_name: "Feautured Product" },
        { short_name: "New", long_name: "New Product" },
        { short_name: "Best", long_name: "Best Seller" },
        { short_name: "Discount", long_name: "Discount Product" }
      ]
    };
  },
  methods: {
    changeMe(word) {
      console.log(word, this.choose);
      this.choose = word;
      console.log(word, this.choose);
    }
  }
};
</script>

<style>
</style>
