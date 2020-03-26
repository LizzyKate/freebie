<template>
 <div class="container mt-5">
  <div class="row" >
    <div class="col-sm return" v-for="(list, i) in item" :key="i">
      {{list.toUpperCase()}}
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
        item:['company', 'service', 'orders & returns', 'payment accept']
    };
  }
};
</script>

<style>
</style>