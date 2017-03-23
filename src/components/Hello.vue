<template>
  <div class="test">
    hello{{msg}}</div> 
</template> 

<script> 
export default {
  name: "Hello",
  data() {
    return {
      msg: "111--->2222,"
    }
  }
}
</script>

<style>
.test {
  width: 300px;
  height: 150px;
  color: green;
  background: red; 
}
</style>