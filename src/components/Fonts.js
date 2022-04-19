import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   h1 {
    font-family: 'DM Serif Display', serif;
    font-size: 2.8em;
    font-weight: 400;
    line-height: 1em;
    @media (min-width: 785px) {
      font-size: min(5em, 5vw);
    }
   }
   h2 {
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
   }
   p {
    font-family: 'Karla', sans-serif;
    line-height: 1.8em;
    font-weight: 400;
   }
`;
