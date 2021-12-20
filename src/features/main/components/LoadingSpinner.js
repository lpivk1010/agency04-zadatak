import React from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const LoadingSpinner = () => {
  return (
    <div className="loader">
      <Loader type="Oval" height={200} width={200} color="#000000" />
    </div>
  );
};
