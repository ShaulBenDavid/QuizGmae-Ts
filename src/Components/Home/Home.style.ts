import styled from "styled-components";

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }


`

export const StyledScore = styled.p`
    color: #fff;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 20px;
`;

export const StyledTitle = styled.h1`
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #008583);
    font-size: 70px;
    text-align: center;
    margin: 20px;
`;

export const StyledButton = styled.button`
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
`;
