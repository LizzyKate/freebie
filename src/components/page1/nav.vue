
uselesss page plese try and fix the banner and side nav


<template>
  <div class="w-100 m-0 p-0">
    <div class="d-flex flex-row bd-highlight">
      <div class="p-2 bd-highlight side">
        <div class="verticaltext">
          <div class="verticaltext_content">
            <div class="d-flex bd-highlight">
              <div class="p-2 bd-highlight">
                <a href="#">Facebook</a>
              </div>
              <div class="p-2 bd-highlight">
                <a href="#">Twitter</a>
              </div>
              <div class="p-2 bd-highlight">
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bd-highlight w-100">
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
                v-for="(link, i) in item"
                :key="i"
                v-on:click="changeMe(link.code)"
              >
                <a
                  class="nav-link"
                  href="#"
                  v-bind:class="{'create': link.code === choose}"
                >{{link.list}}</a>
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
        <!-- <banner></banner>
        <lux></lux>
        <relax></relax>
        <product></product>
        <blanket></blanket>
        <best></best>
        <pauli></pauli>-->
        <!-- nav components should be for nav bar -->
      </div>
    </div>
    <!-- <fill></fill>
    <foot></foot>-->
  </div>
</template>

<script>
// import form from "./form";
// import footer from "./footer";

export default {
  components: {
    // banner: banner,
    // lux: luxary,
    // relax: relax,
    // product: product,
    // blanket: blanket,
    // best: best,
    // pauli: pauli
    // 'fill':form,
    // 'foot':footer
  },
  data() {
    return {
      choose: "Ho",
      item: [
        { code: "Ho", list: "Home" },
        { code: "Sh", list: "Shop" },
        { code: "Ab", list: "About" },
        { code: "Bl", list: "Blog" },
        { code: "contact", list: "Contact Us" }
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

<style >
</style>