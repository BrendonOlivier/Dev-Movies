import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button';
import Slider from '../../components/Slider';
import Modal from '../../components/Modal';

import { getImages } from '../../utils/getImagens';
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { getMovies, getSeries, getTopMovies, getTopPeoples, getTopSeries } from '../../services/getData';

function Home() {
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
    const [topMovies, setTopMovies] = useState();
    const [topSeries, setTopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [topPeople, setTopPeople] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getSeries(),
                getTopPeoples()
            ])
                .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
                    setMovie(movie)
                    setTopMovies(topMovies)
                    setTopSeries(topSeries)
                    setPopularSeries(popularSeries)
                    setTopPeople(topPeople)
                })
                .catch(error => console.error(error))
        }

        getAllData();
    }, [])

    return (
        <>
            {movie && ( // (funciona como if no react) se existir algum filme, mostro as informações :
                <Background img={`${getImages(movie.backdrop_path)}`}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}

                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>

                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>

                </Background>
            )}

            {topMovies && <Slider info={topMovies} title={'Top Filmes'} route={`/detalhe/`} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} route={`/detalhe-series/`} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} route={`/detalhe-series/`} />}
            {topPeople && <Slider info={topPeople} title={'Atores Populares'} route={false} />}
        </>
    )
}

export default Home