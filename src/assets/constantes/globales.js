import { createGlobalStyle } from 'styled-components'
import LatoUrl from "../fonts/Lato-Regular.ttf";
import MontserratUrl from "../fonts/Montserrat-Regular.ttf";
// Fuentes globales
export const Fuentes = createGlobalStyle`
  @font-face {
    font-family: "Lato";
    src: url(${LatoUrl});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url(${MontserratUrl});
    font-weight: 400;
    font-style: normal;
  }
`;
