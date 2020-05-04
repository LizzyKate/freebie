<template>
  <div>
    <h6 class="four mx-auto">Comment</h6>
    <div class="four mx-auto d-flex flex-column bd-highlight my-3">
      <div class="p-2 bd-highlight"  v-for="(write, i) in jarvis" :key="i">
        <div class="d-flex flex-row bd-highlight mb-3 align-items-center">
          <div class="bd-highlight rounded-circle pic"></div>
          <div class="ml-5 bd-highlight">
            <div class="d-flex flex-column bd-highlight">
              <div class="bd-highlight">
                <div class="d-flex flex-row bd-highlight" >
                  <div class="bd-highlight jarvis">{{write.name}}</div>
                  <div class="ml-5 bd-highlight min">{{13 + write.time}}</div>
                </div>
              </div>
              <div class="bd-highlight enjoy w-75 mt-2">{{write.long}}</div>
            </div>
          </div>
        </div>
        <div class="strikeDown my-3 w-75"></div>
      </div>
      <div class="p-2 bd-highlight">
        <div class="d-flex flex-row bd-highlight mb-3 align-items-center">
          <div class="bd-highlight rounded-circle pic"></div>
          <div class="ml-5 bd-highlight">
            <div class="d-flex flex-column bd-highlight">
              <div class="bd-highlight">
                <form>
                  <div class="form-row">
                    <div class="col">
                      <input type="text" class="form-control rayan" placeholder="Name" />
                    </div>
                    <div class="col">
                      <input
                        type="email"
                        class="form-control rayan"
                        placeholder="mailto@alrayhan.com"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="bd-highlight mt-3">
                <textarea class="form-control rayan" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="text-center mt-5">
        <button type="button" class="btn btn-lg butt">Publish</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jarvis:[
        {
          name:'Pauli Jarvis',
          time: 'min ago',
          long:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.'
        },
         {
          name:'Pauli Jarvis',
          time: 'min ago',
          long:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. '
        },
         {
          name:'Pauli Jarvis',
          time: 'min ago',
          long:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. '
        }
      ]
    };
  }
};
</script>

<style>
</style>
