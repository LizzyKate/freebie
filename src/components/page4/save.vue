<template>
<div class="container-fluid">
<div class="row post mx-auto">
  <div class="col-sm px-0 to" v-for="(product, i) in items" :key="i">
      <div class="d-flex flex-column bd-highlight mb-3">
  <div class="bd-highlight p-2 money">
      <img v-bind:src=" require('../../assets/img/' + product.image) " />
  </div>
  <div class="p-2 bd-highlight">
      <h4 class="w-75 mb-0">{{product.name}}</h4>
      </div>
  <div class="p-2 bd-highlight">
      <p class=" mb-0">{{product.note}}</p>
      </div>
  <div class="p-2 bd-highlight">
      <div class="d-flex flex-row bd-highlight align-items-center">
              <div class="bd-highlight order">{{product.more.toUpperCase()}}</div>
              <div class="ml-1 bd-highlight now"></div>
            </div>
  </div>
</div>
  </div>
  <div class="w-100"></div>
  <div class="col-sm px-0 to" v-for="(product, i) in items" :key="i">
      <div class="d-flex flex-column bd-highlight mb-3">
  <div class="bd-highlight p-2 money">
      <img v-bind:src=" require('../../assets/img/' + product.image) " />
  </div>
  <div class="p-2 bd-highlight">
      <h4 class="w-75 mb-0">{{product.name}}</h4>
      </div>
  <div class="p-2 bd-highlight">
      <p class=" mb-0">{{product.note}}</p>
      </div>
  <div class="p-2 bd-highlight">
      <div class="d-flex flex-row bd-highlight align-items-center">
              <div class="bd-highlight order">{{product.more.toUpperCase()}}</div>
              <div class="ml-1 bd-highlight now"></div>
            </div>
  </div>
</div>
  </div>
 
</div>
  <div class="text-center mt-5">
        <button type="button" class="btn btn-lg butt">LOAD MORE</button>
    </div>
</div>
</template>

<script>



export default {
   data () {
    return {
      items:[
          {
              name:'Three simple way to save a money lorium ipsum',
              note:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.',
              more:'Read More',
              image:'cat_img3@2x.png'
          },
          {
              name:'Three simple way to save a money lorium ipsum',
              note:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.',
              more:'Read More',
              image:'cat_img3@2x.png'
          }

      ]
    }
  }
}
</script>

<style scoped>


</style>