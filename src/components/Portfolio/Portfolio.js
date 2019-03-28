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
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://facecounter.herokuapp.com/">Demo</a>
            <a target="_blank" rel="noopener noreferrer" href="https://facecounter.herokuapp.com/">Code</a>
          </div>
          <div className="icons">
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-github-plain"></i>
            <i class="devicon-postgresql-plain"></i>
            <i class="devicon-html5-plain"></i>
            <i class="devicon-css3-plain"></i>
          </div>
        </div>
        <div className="box">
          <div className="project-title">Face Counter</div>
          <div className="project-content">An app that detects and counts faces. It has register and sign in features to save the total count of faces detected in a database.</div>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://facecounter.herokuapp.com/">Demo</a>
            <a target="_blank" rel="noopener noreferrer" href="https://facecounter.herokuapp.com/">Code</a>
          </div>
        </div>
        <div className="box">
          <div className="project-title">Face Counter</div>
          <div className="project-content">An app that detects and counts faces. It has register and sign in features to save the total count of faces detected in a database.</div>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://facecounter.herokuapp.com/">Demo</a>
            <a target="_blank" rel="noopener noreferrer" href="https://facecounter.herokuapp.com/">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;