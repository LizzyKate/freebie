<template>
  <div class="bd-highlight w-100">
    <banner></banner>
    <lux></lux>
    <relax></relax>
    <product></product>
    <blanket></blanket>
    <best></best>
    <pauli></pauli>
  </div>
</template>

<script>
import banner from "./banner";
import luxary from "./luxary";
import relax from "./relax";
import product from "./product";
import blanket from "./blanket";
import best from "./best";
import pauli from "./pauli";

export default {
  components: {
    banner: banner,
    lux: luxary,
    relax: relax,
    product: product,
    blanket: blanket,
    best: best,
    pauli: pauli
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>