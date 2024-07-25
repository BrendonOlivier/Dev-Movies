import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(120%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 15px;
    animation: ${slideIn} 1s ease-in-out;

    span {
        padding: 8px 18px;
        border: 2px solid #fff;
        border-radius: 30px;
        font-size: 16px;
        font-weight: 600;
        background-color: #0f0f0f;
        color: #fff;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 430px) {
    flex-wrap: wrap;
  }
`
