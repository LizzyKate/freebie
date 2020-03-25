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
            <ul class="navbar-nav mr-auto">
              <li class="nav-item home">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item home">
                <a class="nav-link" href="#">Shop</a>
              </li>
              <li class="nav-item home">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item home">
                <a class="nav-link" href="#">Contact us</a>
              </li>
              <li class="nav-item home">
                <a class="nav-link" href="#">Blog</a>
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
        <banner></banner>
        <lux></lux>
        <relax></relax>
        <product></product>
        <blanket></blanket>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "./banner";
import luxary from "./luxary";
import relax from "./relax";
import product from "./product";
import blanket from "./blanket";

export default {
  components: {
    banner: banner,
    lux: luxary,
    relax: relax,
    product: product,
    blanket: blanket
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>