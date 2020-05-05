<template>
<div>
    <check></check>
    <pay></pay>
</div>
</template>

<script>
import check from './check'
import pay from './pal'

export default {
  components:{
      check:check,
      pay:pay
  },
  data () {
    return {
    
    }
  }
}
</script>

<style scoped>
</style>