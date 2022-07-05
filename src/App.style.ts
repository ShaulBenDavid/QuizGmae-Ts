import { createGlobalStyle } from "styled-components";
import BgImage from './assets/bg-color.jpg';


export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }
  body {
    background-image: url(${BgImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
  }
`;
