<template>
<div>
<div class="container-fluid mt-5 mx-auto">
  <div class="row message mx-auto">
    <div class="col" v-for="(write, i) in comment " :key="i">
        <div class="d-flex flex-column bd-highlight">
  <div class="salah bd-highlight">{{write.doosti}}</div>
  <div class="doosti bd-highlight">
      <h6>{{write.feel}}</h6>
      </div>
  <div class="salah bd-highlight w-50">{{write.note}}</div>
</div>
    </div>
    <div class="w-100 mt-5"></div>
    <div class="col" v-for="(write, i) in more " :key="i">
        <div class="d-flex flex-column bd-highlight">
  <div class="salah bd-highlight">{{write.doosti}}</div>
  <div class="doosti bd-highlight">
      <h6>{{write.feel}}</h6>
      </div>
  <div class="salah bd-highlight w-50">{{write.note}}</div>
</div>
    </div>
  </div>
</div>
    <div class="text-center mt-5">
        <button type="button" class="btn btn-lg butt">LOAD MORE REVIEW </button>
    </div>
</div>
</template>

<script>



export default {
    
    data () {
    return {
        comment:[
            {
                doosti:'Salah doosti',
                feel:'Awesome!',
                note:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.'
            },
            {
                doosti:'Salah doosti',
                feel:'Amazing!',
                note:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.'
            }
        ],
        more:[
             {
                doosti:'Salah doosti',
                feel:'Beautiful Service!',
                note:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.'
            },
             {
                doosti:'Salah doosti',
                feel:'Awesome!',
                note:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.'
            }
        ]
    }
  },
  
}
</script>

<style>

</style>