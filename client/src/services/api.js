import axios from 'axios' // this lets us use the axios library under the name axios
export default () => {
  return axios.create({
    baseURL: 'http://localhost:8000/'
  })
}
// export default (function) => {statements} Allows us to export this function (that we have returned) when we import this to other files. A new instance of axios will be created everytime we import this function
// MDN DOC on export https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

// axios.create() create a new instance of axios with a custom config {baseURL: '', timeout: '', headers: ''}
// GitHub DOC on axios https://github.com/axios/axios

/* could potentially improve, by adding axios to a property on the Vue prototype
Object.defineProperty(Vue.prototype, '$axios' {value: axios})
Vue DOC on JS libraries with Vue
https://vuejsdevelopers.com/2017/04/22/vue-js-libraries-plugins/
*/
