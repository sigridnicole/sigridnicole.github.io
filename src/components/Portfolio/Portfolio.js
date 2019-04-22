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
          <div className="project-title">RoboFriends</div>
          <div className="project-content">An app that lets one filter through some robots. APIs were used both for the user details and robot image. This app can be used as a template from similar functions, for example address book. </div>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://sigridnicole.github.io/robofriends/">Demo</a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sigridnicole/robofriends">Code</a>
          </div>
          <div className="icons">
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-github-plain"></i>
            <i class="devicon-html5-plain"></i>
            <i class="devicon-css3-plain"></i>
          </div>
        </div>
        <div className="box">
          <div className="project-title">Background Generator</div>
          <div className="project-content">This is a styling tool that makes it easy to make a linear gradient background. Just choose two colors and the gradient background will be previewed then grab the CSS code. </div>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sigridnicole/background-generator">Demo</a>
            <a target="_blank" rel="noopener noreferrer" href="https://sigridnicole.github.io/background-generator/">Code</a>
          </div>
          <div className="icons">
            <i class="devicon-github-plain"></i>
            <i class="devicon-html5-plain"></i>
            <i class="devicon-css3-plain"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;