import React, { Component, Suspense } from 'react';
import { unstable_createResource } from 'react-cache';
import styled, { createGlobalStyle } from 'styled-components';
import * as Style from './AppStyle';


/*  Moved the CreateReactApp default css style to
    a styled-components globalStyle variable.
    This just appends this style to the whole document */
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

/*  We utilize the createResource provied by React,
    which allows to access the image data asynchronously */
const ImageResource = unstable_createResource(
  source =>
    new Promise(resolve => {
      const img = new Image();
      img.src = source;
      img.onload = resolve;
    })
);

/*  We create a new img component, that will read and display
    the full resolution picture from the cache, once it gets loaded */
const Img = ({ src, alt, ...props }) => {
  ImageResource.read(src);
  return <img src={src} alt={alt} {...props} />
}

const ImageContainer = styled.div`
  width:100%;
  height:100%;
  display:block;
  overflow:hidden;
  position:relative;
  img {
    height:100%;
  width:100%;
  object-fit:cover;
  opacity:0.3;
  }
  .blurry {
    filter:blur(10px);
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:2;
  }
`;

/*  an image wrapper component, that holds
    all of our data inside it, plus it
    get triggered to run only when scrolled into view. */
const ImageWrapper = ({ image, nr, render }) => {

return (
  render ?
  <ImageContainer>
    <Suspense fallback={
      <ImageContainer> {/* This gets shown while the full res image is preloading */}
      {/* <img className="blurry" src={image.small} alt={`img_small_${nr}`}/> */}
      {/* This gets shown below while the low res image is preloading */}
      <img src={image.small} className="blurry"/>
      {/* <Style.Loader>{'Loading...'}</Style.Loader> */}
      </ImageContainer>
    }>
      <ImageContainer>
        {/* This gets shown when the full res image is finally loaded */}
        <Img src={image.large} alt={`img_large_${nr}`}/>
      </ImageContainer>
    </Suspense>
  </ImageContainer>
  :
  <ImageContainer/>
);
  
};


export default ImageWrapper;