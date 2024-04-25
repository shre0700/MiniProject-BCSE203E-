// AboutComponent.js

import React, { useState } from 'react';
import myimage from './aboutmee.jpg';

const AboutComponent = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={myimage} alt="About Me" />
          </div>
          <div className="about-col-2">
            <h1 className="title">About Me</h1>
            <p className="aboutme">
              <span>Shreya Agarwal <br />Second-year Undergraduate in Computer Science<br /> Vellore Institute of Technology, Vellore<br /><br />
                Technical Skills:</span>
              Proficient in C, C++, JavaScript, HTML, CSS, React. Strong communication and leadership abilities. Skilled in content creation.
              <br /><br />
              <span>Hobbies:</span>
              Passionate about painting, dancing, and sketching.
              <br /><br />
              <span>Objective:</span>
              To utilize my technical skills and soft skills to excel in Computer Science and contribute effectively to the field.
            </p>
            <div className="tab-titles">
              <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => handleTabClick('skills')}>Skills</p>
              <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => handleTabClick('education')}>Education</p>
            </div>
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li><span>Web Development</span><br />Experienced in crafting responsive and user-friendly web applications using modern technologies and best practices.</li>
                <li><span>Data Structures</span><br />Proficient in applying data structures and algorithms to efficiently solve complex problems and optimize system performance.</li>
                <li><span>Problem Solving</span><br />Skilled at solving problems, finding solutions, and making things work smoothly.</li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li><span>2024- Current</span><br />2nd Year Student - 9.14 CGPA<br />Vellore Institute of Technology,Vellore</li>
                <li><span>2022</span><br />Senior Secondary- 98%<br />Bhartiya Public School,Sikar</li>
                <li><span>2020</span><br />Secondary- 96%<br />Euro International School,Sikar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
