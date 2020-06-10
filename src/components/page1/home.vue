<template>
  <div class="bd-highlight w-100">
    <banner></banner>
    <lux></lux>
    <relax></relax>
    <product></product>
    <blanket></blanket>
    <remove></remove>
    <best></best>
    <strike></strike>

    <div data-aos="fade-up" data-aos-anchor-placement="top-center">
      <pauli></pauli>
    </div>
  </div>
</template>

<script>
import banner from "./banner";
import luxary from "./luxary";
import relax from "./relax";
import product from "./product";
import blanket from "./blanket";
import remove from "./strike";
import best from "./best";
import border from "./border";
import pauli from "./pauli";

export default {
  components: {
    banner: banner,
    lux: luxary,
    relax: relax,
    product: product,
    blanket: blanket,
    remove: remove,
    best: best,
    strike: border,
    pauli: pauli
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>