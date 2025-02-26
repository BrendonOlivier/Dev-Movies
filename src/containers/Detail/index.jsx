/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

import { Background, Container, Cover, Info, ContainerMovies } from "./styles"
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getDetails"
import { getImages } from "../../utils/getImagens"

import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import Slider from '../../components/Slider'


function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [moveCredits, setMovieCredits] = useState()
    const [moveSimilar, setMovieSimilar] = useState()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])
                .then(([movie, videos, credits, similar]) => {
                    setMovie(movie)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSimilar(similar)
                })
                .catch(error => console.error(error))

                window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        getAllData();
    }, [id])

    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={moveCredits} />
                            </div>
                        </Info>
                    </Container>

                    <ContainerMovies>
                        {movieVideos && movieVideos.map((video) => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title="Youtube Video Player"
                                    height="500px"
                                    width="90%"
                                >
                                </iframe>
                            </div>
                        ))}
                    </ContainerMovies>

                    {moveSimilar && <Slider info={moveSimilar} title={'Filmes Similares'} route={`/detalhe/`} />}
                </>
            )}
        </>
    )
}

export default Detail