<template>
<section>
<div class="d-flex flex-row bd-highlight align-items-center post mx-auto" >
  <div class="p-3 bd-highlight late" v-for="(list, i) in item" :key="i" @click="changeMe(list.short_name)" :class="{'test': list.short_name===choose }" >{{list.long_name}}</div>
</div>
<div class="strikeMe mx-auto"></div>
</section>
</template>

<script>



export default {
   data () {
    return {
      choose:'popular',
      item:[
          {short_name:'popular', long_name:'Popular Post'},
          {short_name:'latest', long_name:'Latest Post'},
          {short_name: 'add', long_name:'Add A Post'}
      ]
    }
  },
  methods:{
      changeMe(post){
          this.choose = post;
      }
  }
}
</script>

<style scoped>
.test{
    border-bottom: 2px solid #FF7A00;
    color: #FF7A00;
}

</style>