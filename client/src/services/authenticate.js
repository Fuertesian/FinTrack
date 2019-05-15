import api from '@/services/api' // imports the exported function from the specified location. To use it we will use the name api
export default {
  register (credentials) {
    return api().post('register', credentials)
  }
}
// export a function called register to another file, that accepts a credentials from a method called register
// after creating a new instance of axios, send the credentials (as an argument) to the register endpoint
