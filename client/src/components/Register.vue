<template>
  <div class = "register">
    <h1> {{ msg }} </h1>
    <input
    type = "email"
    name = "email"
    v-model = "email"
    placeholder ="email" />
   <br>
   <input
    type = "password"
    name = "passowrd"
    v-model = "password"
    placeholder = "password" />
    <br>
    <button @click="register">
      Register
      </button>
    </div>
</template>
<script>
import authenticate from '@/services/authenticate'
export default {
  name: 'Register',
  props: {
    msg: String

  },
  data () {
    return {
      email: '',
      password: '' }
  },
  methods: {
    async register () {
      const response = await authenticate.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
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
