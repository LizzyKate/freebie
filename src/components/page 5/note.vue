<template>
<div>
<div class="d-flex flex-row bd-highlight mb-5 justify-content-between align-items-center four mx-auto mt-3">
  <div class="p-2 bd-highlight" v-for="(list, i) in note" :key="i">
      <p class="">{{list}}</p>
      </div>
</div>
<div class="d-flex flex-row bd-highlight my-3 align-items-center four mx-auto">
  <div class="p-2 bd-highlight">
    <i class="far fa-comment"></i>
    <p>48</p>
  </div>
  <div class="ml-3 p-2 bd-highlight">
    <i class="far fa-thumbs-up"></i>
    <p>2k</p>
  </div>
  <div class="ml-3 p-2 bd-highlight down">
    <i class="far fa-thumbs-down "></i>
    <p>148</p>
  </div>
</div>
<div class="strikeUp mb-5"></div>
</div>
</template>

<script>


export default {
    
    data () {
    return {
      note:['A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart',
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart'
      ]
    }
  }
}
</script>

<style>

</style>
