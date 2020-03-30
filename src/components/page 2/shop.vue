<template>
  <div>
    <appHead></appHead>
    <blanket></blanket>
    <best></best>
    <!-- <fill></fill> -->
  </div>
</template>

<script>
import head from "./head";
import blanket from "./blanket";
import best from "./best";
// import form from "./form";
// i reused this form component in the footer

export default {
  components: {
    appHead: head,
    blanket: blanket,
    best: best,
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>