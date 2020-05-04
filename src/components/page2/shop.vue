<template>
  <div>
    <appHead></appHead>
    <blanket></blanket>
    <best class="mt-5"></best>
    <!-- <fill></fill> -->
  </div>
</template>

<script>
import head from "./head";
// this is the one i tried importing... you check it to see the outcome
// import blanket from "../page1/blanket";
import best from "../page1/best";
// this is the way the code should look like but i feel my structure is wrong
import blanket from "./blanket";
// import best from "./best";
// import form from "./form";
// i reused this form component in the footer

export default {
  components: {
    appHead: head,
    blanket: blanket,
    best: best
  },
  data() {
    return {
    };
  }
};
</script>

<style>
</style>