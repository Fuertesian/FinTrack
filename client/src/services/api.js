import axios from 'axios'
export default () => {
  return axios.create({
    baseURL: 'http://localhhost:8000/'
  })
}
