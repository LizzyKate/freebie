<template>
  <div class>
    <nav class="navbar pt-3 navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <h2 class="ex">Ex-</h2>
        <p class="zer">BAZER SHOP</p>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ml-5">
          <li
            class="nav-item home"
            v-for="link in item"
            :key="link.id"
            v-on:click="changeMe(link.code)"
          >
            <router-link :to="`${link.page}`"
              class="nav-link"
              href="#"
              v-bind:class="{'create': link.code === choose}"
            >{{link.list}}</router-link>
          </li>
        </ul>
        <div>
          <span class="art">
            <i class="fas fa-search"></i>
          </span>
          <span class="art cle">
            <i class="fas fa-question"></i>
          </span>
          <span class="art cat">
            <i class="fas fa-shopping-cart"></i>
          </span>
        </div>
      </div>
    </nav>
    <div class="navLine w-100"></div>
  </div>
</template>

<script>
export default {
  data() {7
    return {
      choose: "Ho",
      item: [
        {
          code: "Ho",
          id:0,
          page:'/',
          list: "Home"
        },
        {
          code: "Sh",
          id:1,
          page:'/shop',
          list: "Shop"
        },
        {
          code: "Ab",
          id:2,
          page:'/about',
          list: "About"
        },
        {
          code: "Bl",
          id:3,
          page:'/blog',
          list: "Blog"
        },
        {
          code: "update",
          id:4,
          page:'/info',
          list: "Update"
        },
        {
          code:"product",
          id:5,
          page:'/cart',
          list: "Your Product"
        }
      ]
    };
  },
  methods: {
    changeMe(word) {
      this.choose = word;
    }
  }
};
</script>

<style>
</style>