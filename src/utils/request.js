import axios from 'axios';
const service=axios.create({
  baseURL:porcess.env.BASE_API,
  timeout:5000
})
