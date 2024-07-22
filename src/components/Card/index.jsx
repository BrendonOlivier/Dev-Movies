/* eslint-disable react/prop-types */

import { getImages } from "../../utils/getImagens"
import { Container } from "./styles"


function Card({ item }) {

    return (
    <Container>
        <img src={getImages(item.poster_path)} alt="" />
        <h3>{item.original_title}</h3>
    </Container>
    )
}

export default Card