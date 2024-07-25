import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100px;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 50px;
    background-color: ${props => props.changeBackground ? '#000' : 'transparent'};
    transition: background-color .6s ease-in-out;

    img {
        width: 25%;

    @media (max-width: 430px) {
        width: 50%;
        padding-bottom: 8px;
    }
    }

    @media (max-width: 430px) {
        width: 100vw;
        height: 110px;
        padding: 16px 10px;
        justify-content: center;
        flex-direction: column;
  }
`

export const Menu = styled.ul`
    display: flex;
    gap: 50px;

    @media (max-width: 430px) {
        gap: 10px;
    }
`

export const Li = styled.li`
    font-weight: 600;
    font-size: 28px;
    cursor: pointer;
    position: relative;

    a {
        color: #fff;
    }

    &::after {
        content: '';
        height: 3px;
        width: ${props => props.isActive ? '100%' : 0};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;

        @media (max-width: 430px) {
            height: 3px;
        }   
    }

    &:hover::after {
        width: 100%;
    }

    @media (max-width: 430px) {
        font-size: 22px;
    }
`