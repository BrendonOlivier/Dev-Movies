import api from './api';

export async function getSeries() {
  try {
    const {
      data: { results }
    } = await api.get('/tv/popular');

    // Gera um número aleatório entre 0 e 18 (inclusive)  
    const randomIndex = Math.floor(Math.random() * 19); // 0 a 18 
    return results[randomIndex]; // Retorna um filme aleatório 
  } catch (error) {
    console.error(
      'Rota: "/tv/popular" - Erro ao buscar as séries populares: ',
      error
    );
  }
}

export async function getAiringTodaySeries() {
  try {
    const {
      data: { results }
    } = await api.get('/tv/airing_today');

    return results;
  } catch (error) {
    console.error('Rota: "/tv/airing_today" - Erro ao buscar séries: ', error);
  }
}

export async function getPopularSeries() {
  try {
    const {
      data: { results }
    } = await api.get('/tv/popular');

    return results;
  } catch (error) {
    console.error(
      'Rota: "/tv/popular" - Erro ao buscar as séries populares: ',
      error
    );
  }
}

export async function getTopSeries() {
  try {
    const {
      data: { results }
    } = await api.get('/tv/top_rated');

    return results;
  } catch (error) {
    console.error(
      'Rota: "/tv/top_rated" - Erro ao buscar as top séries: ',
      error
    );
  }
}

export async function getSeriesById(serieId) {
  try {
    const { data } = await api.get(`tv/${serieId}`);

    return data;
  } catch (error) {
    console.error('Rota: "tv/:Id" - Erro ao buscar serie: ', error);
  }
}

export async function getSerieVideos(serieId) {
  try {
    const { data: { results }} = await api.get(`tv/${serieId}/videos`);

    return results;
  } catch (error) {
    console.error('Rota: "tv/:Id/videos" - Erro ao buscar os trailers: ', error);
  }
}

export async function getSerieCredits(serieId) {
  try {
    const {
      data: { cast }
    } = await api.get(`tv/${serieId}/credits`);

    return cast;
  } catch (error) {
    console.error('Rota: "tv/:Id/credits" - Erro ao buscar elenco: ', error);
  }
}

export async function getSerieSimilar(serieId) {
  try {
    const {
      data: { results }
    } = await api.get(`tv/${serieId}/similar`);

    return results;
  } catch (error) {
    console.error(
      'Rota: "tv/:Id/similar" - Erro ao buscar series similares: ',
      error
    );
  }
}