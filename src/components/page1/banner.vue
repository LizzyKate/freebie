<template>
  <div class="container-fluid banner pl-3 pr-0 m-0 " id="ban">
    <div class="classic">
        <div data-aos="fade-down-right" data-aos-duration="4000" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h2 class="text-white">
          The
          <br />Classic - Collection
          <br />Shop House
        </h2>
        <div class="text-left">
          <button type="button" class="btn shop px-5 mt-4 btn-lg" v-on:click="navigate()">Shop Now</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
  
    };
  },
  methods:{
    navigate(){
       this.$router.push({ name: "shop-general" });
    }
  }
};
</script>

<style>
</style>
