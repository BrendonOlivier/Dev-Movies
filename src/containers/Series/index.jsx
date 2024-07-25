import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';

import { getSeries, getTopSeries, getAiringTodaySeries, getPopularSeries } from '../../services/getDetailsSeries'
import { getImages } from '../../utils/getImagens';
import {
    Background,
    Container,
    ContainerButtons,
    Info,
    Poster
} from './styles';

function Series() {
    const [showModal, setShowModal] = useState(false);
    const [series, setSeries] = useState();
    const [airingTodaySeries, setAiringTodaySeries] = useState();
    const [topSeries, setTopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getSeries(),
                getPopularSeries(),
                getAiringTodaySeries(),
                getTopSeries()
            ])
                .then(([series, airingTodaySeries, topSeries, popularSeries]) => {
                    setSeries(series);
                    setAiringTodaySeries(airingTodaySeries);
                    setTopSeries(topSeries);
                    setPopularSeries(popularSeries);
                })
                .catch((err) => console.error(err));
        }

        getAllData();
    }, []);

    return (
        <>
            {series && ( // (funciona como if no react) se existir algum filme, mostro as informações :
                <Background img={`${getImages(series.backdrop_path)}`}>
                    {showModal && <Modal serieId={series.id} setShowModal={setShowModal} />}

                    <Container>
                        <Info>
                            <h1>{series.name}</h1>
                            <p>{series.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe-series/${series.id}`)}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>

                        <Poster>
                            <img src={`https://image.tmdb.org/t/p/original${series.poster_path}`} alt="capa-da-serie" />
                        </Poster>
                    </Container>

                </Background>
            )}
            {airingTodaySeries && <Slider info={airingTodaySeries} title={'Séries Saindo hoje 🔥'} route={`/detalhe-series/`} />}
            {topSeries && <Slider info={topSeries} title={'Top Series'} route={`/detalhe-series/`} />}
            {popularSeries && <Slider info={popularSeries} title={'Series Populares'} route={`/detalhe-series/`} />}
        </>
    );
}

export default Series;