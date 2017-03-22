<template>
   <div class="test">hello{{msg}}</div>
</template> 

<script>
   export default {
     name:"Hello",
     data(){
       return {
         msg:",123456"
       }
     }
   }
</script>

<style>
  .test{
    background: #fff; width: 30px; height: 50px;color: #000; 
  }
</style>