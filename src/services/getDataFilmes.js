import api from './api';

// Buscando um filme Popular pela posição desejada
export async function getMovies() {
    try {
        const { data: { results } } = await api.get('/movie/popular')

        // Gera um número aleatório entre 0 e 18 (inclusive)  
        const randomIndex = Math.floor(Math.random() * 19); // 0 a 18 
        return results[randomIndex] // Retorna um filme aleatório  
    } catch (error) {
        console.error('Rota: "movie/popular" - Erro ao buscar os filmes: ', error);
    }
}

// Buscando um filme Popular pela posição desejada
export async function getPopularMovie() {
    try {
        const { data: { results } } = await api.get('/movie/popular')

        return results
    } catch (error) {
        console.error('Rota: "movie/popular" - Erro ao buscar os filmes: ', error);
    }
}

// Busca os Top Filmes do momento
export async function getTopMovies() {
    try {
        const { data: { results } } = await api.get('/movie/top_rated')

        return results
    } catch (error) {
        console.error('Rota: "movie/top_rated" - Erro ao buscar os filmes: ', error);
    }
}

export async function getLaunch() {
    try {
        const { data: { results } } = await api.get('/movie/now_playing')

        return results
    } catch (error) {
        console.error('Rota: "movie/now_playing" - Erro ao buscar os filmes em pré lançamento: ', error);
    }
}

export async function getPreLaunch() {
    try {
        const { data: { results } } = await api.get('/movie/upcoming')

        console.log(results)
        return results
    } catch (error) {
        console.error('Rota: "movie/now_playing" - Erro ao buscar os filmes em pré lançamento: ', error);
    }
}