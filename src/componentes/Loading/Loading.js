import React from "react";
import {Spinner} from './LoadingStyles'
export default function Loading() {
  return (
    
    <Spinner className="page-container d-flex align-items-center justify-content-center">
      <div className="outer">
        <div className="middle">
          <div className="inner" />
        </div>
      </div>
    </Spinner>
  );
}
