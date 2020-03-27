<template>
 <div class="container mt-5">
  <div class="row" >
    <div class="col-sm return" v-for="(list, i) in item" :key="i" >
      <div v-for="(val, key) in list" :key="i">{{key.toUpperCase()}}</div>
      <div class="d-flex flex-column bd-highlight mb-3">
  <div class="p-2 bd-highlight" v-for="(val, key) in list" :key="i">{{val[0]}}</div>
  
</div>
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
        item:[
          {Company : ['Home', 'About Us', 'Shop', 'Blog', 'Contact Us']},
          {Service:['Support', 'Faq', 'Warranty', 'Live Chat', 'Privacy Policy']},
          {'Orders & Returns': ['Order', 'Status', 'Shipping', 'Policy & Services','Cart']},
          {'Payment Accept': ''}
        ]
    };
  }
};
</script>

<style>
</style>