import api from './api';

// Buscando um filme Popular pela posição desejada
export async function getMovies() {
    const { data: { results } } = await api.get('/movie/popular')

    return results[0]
}

// Busca os Top Filmes do momento
export async function getTopMovies() {
    const { data: { results } } = await api.get('/movie/top_rated')

    return results
}

// Busca as Top Series do momento
export async function getTopSeries() {
    const { data: { results } } = await api.get('/tv/top_rated')

    return results
}

// Busca as Series Populares de TV
export async function getSeries() {
    const { data: { results } } = await api.get('/tv/popular')

    return results
}

// Buscando os top Artistas
export async function getTopPeoples() {
    const { data: { results } } = await api.get('/person/popular')

    return results
}

// Buscando o filme pelo ID
export async function getMovieVideos(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/videos`)

    return results[1]
}