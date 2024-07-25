import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button';
import Slider from '../../components/Slider';
import Modal from '../../components/Modal';

import { getImages } from '../../utils/getImagens';
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { getMovies, getPopularMovie, getTopMovies, getLaunch } from '../../services/getDataFilmes';

function Movies() {
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
    const [moviesPopular, setMoviesPopular] = useState();
    const [topMovies, setTopMovies] = useState();
    const [launch, setLaunch] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovies(),
                getPopularMovie(),
                getTopMovies(),
                getLaunch()
            ])
                .then(([movie, moviesPopular, topMovies, launch]) => {
                    setMovie(movie)
                    setMoviesPopular(moviesPopular)
                    setTopMovies(topMovies)
                    setLaunch(launch)
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

            {moviesPopular && <Slider info={moviesPopular} title={'Top Filmes 🎞️'} route={`/detalhe/`} />}
            {topMovies && <Slider info={topMovies} title={'Top Filmes 🎥'} route={`/detalhe/`} />}
            {launch && <Slider info={launch} title={'Lançamentos 🔥'} route={`/detalhe/`} />}
        </>
    )
}

export default Movies