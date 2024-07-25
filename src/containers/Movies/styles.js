import styled, { keyframes } from "styled-components";

const scale = keyframes`
    0% {
        transform: scale(0)
    }
    100% {
        transform: scale(1)
    }
`

const slideLeft = keyframes`
    0% {  
        transform: translateX(-100%); /* Começa fora da tela à esquerda */  
    }  
    100% {  
        transform: translateX(0); /* Termina fora da tela à direita */  
    }  
`;


export const Background = styled.div`
    background-image: url( ${(props) => props.img});
    background-position: center;
    background-size: cover;
    height: 97vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    max-width: 1500px;

    @media (max-width: 430px) {
    flex-direction: column-reverse;
    width: 98%;
    justify-content: end;
  }
`

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 4rem;
        font-weight: 700;
        color: #fff;
        animation: ${slideLeft} 1.2s ease-in-out;

        @media (max-width: 430px) {
            font-size: 3rem;
            text-align: center;
        }
    }

    p {
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        margin-top: 30px;
        margin-bottom: 20px;
        animation: ${slideLeft} 1.5s ease-in-out;

        @media (max-width: 430px) {
            width: 100%;
            font-size: 14px;
            text-align: justify;
        }
    }

    @media (max-width: 430px) {
    width: 98%;
    font-size: 10px;
    padding: 15px;
  }
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 15px;
    animation: ${slideLeft} 1.9s ease-in-out;

    @media (max-width: 430px) {
        gap: 10px;
        justify-content: center;
    }
`

export const Poster = styled.div`
    z-index: 2;

    img {
        width: 300px;
        border-radius: 30px;
        animation: ${scale} 0.5s linear;

        @media (max-width: 430px) {
            display: none;
    }
    }
`