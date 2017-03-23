<template>
<div>
  <Hello> </Hello>
</div>
</template>
<script>
import Hello from './components/Hello.vue'   
export default {
  name:"app",
  data(){
    return {
      test:"78959" 
    }
  },
  components:{Hello}
}
</script>
