<template>
<div class="container mt-5">
  <div class="row">
    <div class="col">
      <div class="d-flex flex-column bd-highlight ">
  <div class=" bd-highlight imahe">
      <img src="../../assets/img/imahe.png">
  </div>
  <div class="bd-highlight mt-5">
      <div class="d-flex flex-row bd-highlight justify-content-between tiger2">
  <div class="bd-highlight tiger " v-for="(product, i) in items" :key="i">
      <img v-bind:src="require('../../assets/img/' + product)"/>
  </div>
  
</div>
  </div>
</div>
    </div>
    <div class="col">
      <div class="d-flex flex-column bd-highlight ">
  <div class=" bd-highlight max">
      <h2>Max Product Name</h2>
      <p>BLUE & WHITE</p>
      <h2>$140</h2>
      <div class=" mt-5">
        <button type="button" class="btn btn-lg butt">ADD TO CART</button>
    </div>
  </div>
  <div class="bd-highlight london mt-5">Delivery from <strong class="strong">London</strong>, 3-4 week delivery</div>
  <div class=" bd-highlight mt-5 describe">
      <h6>Description</h6>
      <p class="w-75">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.</p>
      <div class="d-flex flex-column bd-highlight mb-3" >
  <div class="bd-highlight">
    <div class="d-flex flex-row bd-highlight mb-3 " v-for="(read, i) in note" :key="i">
  <div class=" bd-highlight">
    <i class="fas fa-circle tire"></i>
  </div>
  <div class="bd-highlight entire w-50 ml-3 ">{{read}}</div>
    </div>
  </div>
      </div>
  </div>
</div>
    </div>
  </div>
</div>
</template>

<script>



export default {
   
    data () {
    return {
      items:['blanket_product_04_large@2x.png', '2016-10-16_2048_large.png', 'blanket_product_04_large@2x.png', '2016-10-16_2048_large.png'],
      note:['A wonderful serenity has taken possession of my entire like these sweet mornings.', 'A wonderful serenity has taken possession of my entire like these sweet mornings.']
    }
  }
}
</script>

<style>

</style>
