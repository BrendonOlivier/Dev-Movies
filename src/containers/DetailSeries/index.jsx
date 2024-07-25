import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Background, Container, ContainerMovies, Cover, Info } from './styles';
import { getSeriesById, getSerieVideos, getSerieCredits, getSerieSimilar } from '../../services/getDetailsSeries'
import { getImages } from "../../utils/getImagens"

import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import Slider from '../../components/Slider'

export default function DetailSeries() {
    const [serie, setSerie] = useState();
    const [serieVideos, setSerieVideos] = useState();
    const [serieCredits, setSerieCredits] = useState();
    const [serieSimilar, setSerieSimilar] = useState();

    const { id } = useParams();

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getSeriesById(id),
                getSerieVideos(id),
                getSerieCredits(id),
                getSerieSimilar(id)
            ])
                .then(([serie, videosSeries, creditsSeries, similarSeries]) => {
                    setSerie(serie);
                    setSerieVideos(videosSeries);
                    setSerieCredits(creditsSeries);
                    setSerieSimilar(similarSeries);
                })
                .catch((err) => console.error(err));

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        getAllData();
    }, [id]);

    return (
        <>
            {serie && (
                <>
                    <Background image={getImages(serie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(serie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{serie.name}</h2>
                            <SpanGenres genres={serie.genres} />
                            <p>{serie.overview}</p>
                            <div>
                                <Credits credits={serieCredits} />
                            </div>
                        </Info>
                    </Container>

                    <ContainerMovies>
                        {serieVideos && serieVideos.map((video) => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title="Youtube Video Player"
                                    height="500px"
                                    width="90%"
                                ></iframe>
                            </div>
                        ))}
                    </ContainerMovies>

                    {serieSimilar && <Slider info={serieSimilar} title={'Series Similares'} route={`/detalhe-series/`} />}
                </>
            )}
        </>
    );
}