import api from './api';

export async function getMovieVideos(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/videos`)

    return results
}

export async function getMovieCredits(movieId) {
    const { data } = await api.get(`/movie/${movieId}/credits`)

    return data
}

export async function getMovieSimilar(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/similar`)

    return results
}

export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`)

    return data
}