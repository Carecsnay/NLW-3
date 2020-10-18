import axios from 'axios';  // conecta backend com frontend

const api = axios.create ({
    baseURL: 'http://localhost:3333' //define a base do url
})

export default api;