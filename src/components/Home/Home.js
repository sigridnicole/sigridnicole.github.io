import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div id="content">
      <div id="name">
        <div className="hello">Hello, this is</div>
        <span className="logo">
          <span id="s" className="letter">
            S
          </span>
          <span id="i" className="letter">
            I
          </span>
          <span id="g" className="letter">
            G
          </span>
          <span id="r" className="letter">
            R
          </span>
          <span id="i2" className="letter">
            I
          </span>
          <span id="d" className="letter">
            D
          </span>
          <span id="period" className="letter">
            ,
          </span>
        </span>
      </div>
      <p>a Full-Stack React Developer. ;)</p>
    </div>
  );
};

export default Home;
