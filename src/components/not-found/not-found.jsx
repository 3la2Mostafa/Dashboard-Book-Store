import React from "react";
import './not-found.css';
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
    <div className="cont-err">
      <h1 className="text-center pt-5" style={{color:"#bbb"}}>This Page is Not Found</h1>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <NavLink to="/dashboard" >
            <a target="_blank" className="more-link">To Dashboard</a>
        </NavLink>
       </div>
    </div>

    </>
  );
};

export default NotFound;
