import styled, { keyframes } from "styled-components";

const scale = keyframes`
    0% {
        transform: scale(0)
    }
    100% {
        transform: scale(1)
    }
`

const slideInBckTop = keyframes`
  0% {
    -webkit-transform: translateZ(700px) translateY(-300px);
    transform: translateZ(700px) translateY(-300px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
`;

export const Background = styled.div`
   background-image: url(${props => props.image});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   height: 70vh;
   position: relative;

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
        background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    }
`

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   height: 100%;
   max-width: 1500px;
   margin-top: -100px;
`

export const Cover = styled.div`
   padding: 20px;
   display: flex;
   align-items: flex-start;
   height: 100%;
   z-index: 1;

   img {
    width: 300px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
   }

   @media (max-width: 430px) {
    display: none;
  }
`

export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
        font-size: 50px;
        font-weight: 700;
        color: #fff;
        animation: ${scale} 0.6s ease-in;

        @media (max-width: 430px) {
            text-align: center;
            font-size: 40px;
        }   
    }

    p {
        font-weight: 700;
        color: #fff;
        margin: 20px 0 30px 0;

        -webkit-animation: ${slideInBckTop} 1.6s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: ${slideInBckTop} 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @media (max-width: 430px) {
      text-align: justify;
    }
    }

    @media (max-width: 430px) {
        justify-content: center;
        width: 100%;
    }
`

export const ContainerMovies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        width: 100%;
        height: 100%;
        margin: 30px 0;
    }

    h4 {
        color: #ffffff;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    iframe {
        border: none;

        @media (max-width: 430px) {
            width: 100%;
            height: 280px;
        }   
    }
`