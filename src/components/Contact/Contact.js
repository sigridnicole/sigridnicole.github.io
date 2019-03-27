import React from 'react';
import Git from './icons/github.png';
import LinkedIn from './icons/linkedin.png';
import Mail from './icons/mail.png';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div>
        <span>
          <span className="heading c1">
            C
          </span>
          <span className="heading c2">
            O
          </span>
          <span className="heading c3">
            N
          </span>
          <span className="heading c4">
            T
          </span>
          <span className="heading c5">
            A
          </span>
          <span className="heading c6">
            C
          </span>
          <span className="heading c7">
            T
          </span>
        </span>
      </div>
      <div className="content">Let's talk business. ;)</div>
      <img src={Git} alt="Github" onClick={() => window.location.href = "https://github.com/sigridnicole"} ></img>
      <img src={LinkedIn} alt="LinkedIn" onClick={() => window.location.href = "https://www.linkedin.com/in/sigridnicole/"} ></img>
      <img src={Mail} alt="Mail" onClick={() => window.location.href = "mailto:sigridncl@gmail.comn"} ></img>
    </div>
  );
};

export default Contact;
