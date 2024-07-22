import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImagens';
import Modal from '../../components/Modal';
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

            setMovie(await getMovies())
            setTopMovies(await getTopMovies())
            setTopSeries(await getTopSeries())
            setPopularSeries(await getSeries())
            setTopPeople(await getTopPeoples())
        }

        getAllData();
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

            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Atores Populares'} />}
        </>
    )
}

export default Home