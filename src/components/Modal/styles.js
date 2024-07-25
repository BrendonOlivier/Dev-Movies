import styled from "styled-components";

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    background: #000;
    width: 70%;
    min-width: 20%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 50px;

    iframe {
        border: none;
        max-height: 500px;

    @media (max-width: 430px) {
        width: 100%;
        height: 300px;
    }
    }

    span {
    color: #eeeeee;
    position: absolute;
    bottom: 93%;
    left: 92%;
    font-size: 30px;
    font-weight: bold;

    &:hover,
    &:focus {
      color: red;
      text-decoration: none;
      cursor: pointer;
    }

    @media (max-width: 430px) {
      bottom: 88%;
    }
  }

  @media (max-width: 430px) {
    width: 85%;
    padding: 1px;
  }
`