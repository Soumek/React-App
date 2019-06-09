import styled, { css,keyframes } from "styled-components";

//colores
import {primary,secondary} from '../../assets/constantes/colores';


const rotateCW = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

const outerMiddleInner = css`
  border-radius: 50%;
  box-sizing: border-box;
`;
const outerInner = css`
  border-top: 10px solid transparent;
  border-left: 10px solid ${primary};
  border-bottom: 10px solid ${secondary};
  border-right: 10px solid ${primary};
  border-radius: 50%;
`;
const middleInner=css`
    margin: 15px;

`;
export const Spinner = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
  

  > div.outer {
    height: 150px;
    width: 150px;
    animation: ${rotateCW} 1.5s infinite linear;
    ${outerMiddleInner}
    ${outerInner}
    > div.middle {
      height: 100px;
      width: 100px;
      margin: 15px;
      border-top: 10px solid transparent;
      border-left: 10px solid ${secondary};
      border-bottom: 10px solid ${primary};
      border-right: 10px solid ${secondary};
      animation: ${rotateCW} 1s infinite linear;
      animation-direction: reverse;
      ${outerMiddleInner}
      ${middleInner}
      > div.inner {
        height: 50px;
        width: 50px;
        animation: ${rotateCW} 1.2s infinite linear;
        ${outerMiddleInner}
        ${outerInner}
        ${middleInner}
      }
    }
  }
`;
