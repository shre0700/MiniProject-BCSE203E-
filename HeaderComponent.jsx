

import React from 'react';
import logo from './shreyaaaaa.png';
const HeaderComponent = () => {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src={logo} className="logo" alt="Logo"/>
          <ul id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className="fa-solid fa-circle-xmark"></i>
          </ul>
          <i className="fa-solid fa-bars"></i>
        </nav>
        <div className="header-text">
          <h1>Hi, I am <span>Shreya Agarwal</span></h1>
          <p>Second Year Undergrad</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
