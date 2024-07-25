import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'


// com o 'useLocation' vou saber em que página eu estou, para personalizar os Links do meu Header   
// pego o 'pathname' e passo pra saber se e o link está ativo
function Header() {
    const [changeBackground, setChangeBackground] = useState(false);
    const { pathname } = useLocation();

    window.onscroll = () => {
        if (!changeBackground && window.pageYOffset > 150) {
            setChangeBackground(true)
        }
        if(changeBackground &&  window.pageYOffset <= 150 ) {
            setChangeBackground(false)
        }
    }

    return (
        <Container changeBackground={changeBackground}>
            <img src={Logo} alt="logo-dev-movie" />
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Início</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header