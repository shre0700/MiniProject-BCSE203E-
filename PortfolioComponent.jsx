import React from 'react';
import projectimage1 from './ifinal.jpeg';
import projectimage2 from './omnifood.jpg';
import projectimage3 from './tfinal.jpeg';
import projectimage4 from './camera.jpg';

const PortfolioComponent = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src={projectimage1} alt="Instagram Login Frontend" />
            <div className="layer">
              <h3>Instagram Login Frontend</h3>
              <p>Clone of Instagram's Login Page using HTML and CSS</p>
              <a href="portfolio.html">View</a>
            </div>
          </div>
          <div className="work">
            <img src={projectimage2} alt="Omnifood Website" />
            <div className="layer">
              <h3>Omnifood Website</h3>
              <p>Omnifood Webpage (OLD) using HTML and CSS</p>
              <a href="portfolio.html">View</a>
            </div>
          </div>
          <div className="work">
            <img src={projectimage3} alt="Twitter Login Frontend" />
            <div className="layer">
              <h3>Twitter Login Frontend</h3>
              <p>Clone of Twitter's Login Page using HTML and CSS</p>
              <a href="portfolio.html">View</a>
            </div>
          </div>
          <div className="work">
            <img src={projectimage4} alt="PhotoPix Website" />
            <div className="layer">
              <h3>PhotoPix Website</h3>
              <p>PhotoPix Webpage using HTML, CSS, and Javascript</p>
              <a href="portfolio.html">View</a>
            </div>
          </div>
        </div>
        <a href="portfolio.html" className="btn">See More</a>
      </div>
    </div>
  );
}

export default PortfolioComponent;
