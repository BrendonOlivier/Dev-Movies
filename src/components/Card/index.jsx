/* eslint-disable react/prop-types */

import { getImages } from "../../utils/getImagens"
import { Container } from "./styles"

// Na minha imagem, para os cards de filme, series, etc eu uso o 'poster_path'
// Caso não existir o 'poster_path' no caso de Artistas, a dou uma segunda opção que é o 'profile_path'
// Ou se não existir, deixo vazio pra não quebrar o código
// E a mesma coisas pro titulo...
function Card({ item }) {

    return (
    <Container>
        <img src={getImages(item.poster_path || item.profile_path || '')} alt="" />
        <h3>{item.title || item.name || ''}</h3>
    </Container>
    )
}

export default Card