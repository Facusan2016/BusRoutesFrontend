import axios from 'axios'

const bus = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + 'buses'
})

export default bus