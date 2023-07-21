import axios from 'axios'

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=1e29fd4e7a21e0e3f45d2ae8abbf9dad&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api
