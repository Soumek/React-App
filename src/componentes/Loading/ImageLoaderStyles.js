import styled, { keyframes } from 'styled-components';

export const loaderAnimation = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;
export const Loader = styled.div`
  position:absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
  margin:auto;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: ${loaderAnimation} 1.8s infinite ease-in-out;
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: ${loaderAnimation} 1.8s infinite ease-in-out;
  }
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }
  &:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }
`;

export const ImageContainer = styled.div`
width: 100%;
height: 100%;
display: block;
overflow: hidden;
position: relative;
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.3;
}
.blurry {
  filter: blur(5px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
`;