import { useState, useEffect } from 'react'
import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImagens';
import Modal from '../../components/Modal';


function Home() {
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
    const [topMovies, setTopMovies] = useState();
    const [topSeries, setTopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [topPeople, setTopPeople] = useState();


    useEffect(() => {
        async function getMovies() {
            const { data: { results } } = await api.get('/movie/popular')

            setMovie(results[0])
        }

        async function getTopMovies() {
            const { data: { results } } = await api.get('/movie/top_rated')


            setTopMovies(results)
        }

        async function getTopSeries() {
            const { data: { results } } = await api.get('/tv/top_rated')


            console.log(results)
            setTopSeries(results)
        }

        async function getSeries() {
            const { data: { results } } = await api.get('/tv/popular')


            console.log(results)
            setPopularSeries(results)
        }

        async function getTopPeoples() {
            const { data: { results } } = await api.get('/person/popular')


            console.log(results)
            setTopPeople(results)
        }

        getMovies();
        getTopMovies();
        getTopSeries();
        getSeries();
        getTopPeoples();
    }, [])


    return (
        <>
            {movie && ( // (funciona como if no react) se existir algum filme, mostro as informações :
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}

                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>

                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>

                </Background>
            )}

            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Atores Populares'} />}
        </>
    )
}

export default Home