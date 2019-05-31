import React, { Fragment } from "react";
import {ContentTitle} from "../Layout/HeaderStyles";
import Carousels from "./Carousels";
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
