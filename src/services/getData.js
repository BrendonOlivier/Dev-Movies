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

// Busca os Top Filmes do momento
export async function getTopMovies() {
    try {
        const { data: { results } } = await api.get('/movie/top_rated')

        return results
    } catch (error) {
        console.error('Rota: "movie/top_rated" - Erro ao buscar os filmes: ', error);
    }
}

// Busca as Top Series do momento
export async function getTopSeries() {
    try {
        const { data: { results } } = await api.get('/tv/top_rated')
        return results
    } catch (error) {
        console.error('Rota: "tv/top_rated" - Erro ao buscar as top series de tv: ', error);
    }
}

// Busca as Series Populares de TV
export async function getSeries() {
    try {
        const { data: { results } } = await api.get('/tv/popular')

        return results
    } catch (error) {
        console.error('Rota: "tv/popular" - Erro ao buscar as series populares: ', error);
    }
}

// Buscando os top Artistas
export async function getTopPeoples() {
    try {
        const { data: { results } } = await api.get('/person/popular')

    return results
    } catch (error) {
        console.error('Rota: "person/popular" - Erro ao buscar os artistas populares: ', error);
    }
}

// Buscando o filme pelo ID
export async function getMovieVideos(movieId) {
    try {
        const { data: { results } } = await api.get(`/movie/${movieId}/videos`)

    return results
    } catch (error) {
        console.error('Rota: "movie/movieid/videos" - Erro ao buscar o trailer: ', error);
    }
}