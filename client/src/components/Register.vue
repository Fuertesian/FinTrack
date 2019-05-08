<template>
  <div class = "register"> 
    <h1>{{ msg }} </h1>
    <input
    type = "email"
    name = "email"
    placeholder ="email" />
   </div>
</template>
    
   <script>
export default {
  name: 'Register',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
