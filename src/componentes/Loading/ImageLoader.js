import React, { Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { Loader, ImageContainer } from "./ImageLoaderStyles";

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
  return <img src={src} alt={alt} {...props} />;
};
/*  an image wrapper component, that holds
    all of our data inside it, plus it
    get triggered to run only when scrolled into view. */
const ImageWrapper = ({ image, nr }) => {
  return (
    <ImageContainer>
      <Suspense
        fallback={
          <ImageContainer className="d-flex align-items-center justify-content-center">
            <img src={image.small} className="blurry" />
            <Loader />
          </ImageContainer>
        }
      >
        <ImageContainer>
          <Img src={image.large} alt={`img_large_${nr}`} />
        </ImageContainer>
      </Suspense>
    </ImageContainer>
  );
};

export default ImageWrapper;
