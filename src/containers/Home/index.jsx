import { useState, useEffect } from 'react'
import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImagens';


function Home() {
    const [movie, setMovie] = useState();
    const [topMovies, setTopMovies] = useState();

    useEffect(() => {
        async function getMovies() {
            const { data: { results } } = await api.get('/movie/popular')

            setMovie(results[0])
        }

        async function getTopMovies() {
            const { data: { results } } = await api.get('/movie/top_rated')


            console.log(results)
            setTopMovies(results)
        }


        getMovies();
        getTopMovies();
    }, [])


    return (
        <>
            {movie && ( // (funciona como if no react) se existir algum filme, mostro as informações :
                <Background img={getImages(movie.backdrop_path)}>

                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red>Assista Agora</Button>
                                <Button>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>

                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>

                </Background>
            )}

            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
        </>
    )
}

export default Home