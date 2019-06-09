import React, { Fragment } from "react";
import {ContentTitle} from "../HomeStyles";
import Carousels from "./Carousel/Carousels";
export default function HomeContent() {
  return (
    <Fragment>
      <ContentTitle className="d-flex justify-content-start">
        <h2>Ordena lo más destacado de la semana</h2>
      </ContentTitle>
      <Carousels />
    </Fragment>
  );
}
