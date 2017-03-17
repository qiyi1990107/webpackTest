<template>
   <div class="test">hello{{msg}}</div>
</template>

<script>
   export default {
     data(){
       return {
         msg:",world"
       }
     }
   }
</script>

<style module>
  .test{
    background: #000; width: 30px; height: 50px;
  }
</style>