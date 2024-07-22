import axios from 'axios'

const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '5381b5bbdf2ee45f98929e863e57a893',
        language: 'pt-BR',
        page: 1
    }
})

export default api

// 5381b5bbdf2ee45f98929e863e57a893