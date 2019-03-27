import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div>
      <div>
        <span>
          <span className="heading c1">
            W
          </span>
          <span className="heading c2">
            O
          </span>
          <span className="heading c3">
            R
          </span>
          <span className="heading c4">
            K
          </span>
          <span className="heading c5">
            S
          </span>
        </span>
      </div>
      <div className="projectGrid">
        <div className="box">
          <div className="project-title">Face Counter</div>
          <div className="project-content">An app that detects and counts faces. It has register and sign in features to save the total count of faces detected in a database.</div>
          <div></div>
        </div>
        <div className="box"> Coming Soon. </div>
        <div className="box"> Coming Soon. </div>
      </div>
    </div>
  );
};

export default Portfolio;