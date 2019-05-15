<template>
  <div class = "register">
    <h1> {{ msg }} </h1> <!-- contents of msg can be found in view folder Register.vue -->
    <input
    type = "email"
    name = "email"
    v-model = "email"
    placeholder ="email" />
     <!-- v-model creates a 2-way binding that syncs email input with and an returned data property named email(line 31)-->
   <br>
   <input
    type = "password"
    name = "passowrd"
    v-model = "password"
    placeholder = "password" />
    <br>
    <button @click="register"> <!-- @click is shorthand for v-on:click send this input to register-->
      Register
      </button>
    </div>
</template>

<script>
import authenticate from '@/services/authenticate' //@=src
export default {
  name: 'Register', 
  // Declaring the Register component when it is imported by other files
  props: { 
  // props let us make a custom attribute with a specified type value (string in this case) that form a one-way data binding from this parent to a child
  // VUE DOC on props https://vuejs.org/v2/guide/components-props.html
    msg: String 
  },
  data () { 
  // This is the data associated with the Register component
    return { 
    // pass email and password data to the child component/when this imported
      email: '',
      password: '' }
  },
  methods: {
    async register () { 
    // The Register component has a regesister method
      const response = await authenticate.register({ // grab the register method from the imported authenticate file
        email: this.email, 
        // this refers to the Register object/component, grab the email data? Review this keyword***
        password: this.password
      }) 
      // the () following register represents the credentials argument (see authenticate.js)
      console.log(response.data) 
      // print the data associated with the response
    } // The execution of this funciton will send a post request to the /register endpoint of the server (server/src/app.js)
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
