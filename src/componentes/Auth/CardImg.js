import React,{Fragment} from "react";
import styled,{keyframes} from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import loginCardImg2 from "../../assets/loginCardImg2.jpg";
const LazyImage = styled(LazyLoadImage)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity:0.3;

`;

const loaderAnimation = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;


const Div= styled.div`
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
const CardImg = ({ image }) => (
  <Fragment>
    <LazyImage
      src={image} // use normal <img> attributes as props
      placeholder={<Div>AAAAAAAAAAAAH!</Div>}

      
    />
  </Fragment>
);

export default CardImg;
