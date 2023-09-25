import React from "react";
import "./loader.css";


const Spinner = () => {
  return (
    <>
      <div className="cont-loader">
        <div className="loader book-load">
          <figure className="page"></figure>
          <figure className="page"></figure>
          <figure className="page"></figure>
        </div>
        <h1 className="reading">Reading</h1>
      </div>
    </>
  );
};

export default Spinner;
