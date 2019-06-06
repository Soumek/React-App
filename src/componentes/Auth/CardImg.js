import React,{Fragment} from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = styled(LazyLoadImage)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 0 0;
  @media (max-width: 768px) {
    object-position: 6% 0;
  }
`;

const CardImg = ({ image }) => (
  <Fragment>
    <LazyImage
      src={image.src} // use normal <img> attributes as props
      placeholder={<span>Loading...</span>}
    />
  </Fragment>
);

export default CardImg;
