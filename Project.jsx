import React from 'react';
import './project.css';
import logo from './shreyaaaaa.png';
import insta from "./insta.png";
import omni from "./omnifoodd.png";
import twitter from "./twitter.png";
import photopix from "./photopix.png";
import perfume from './perfume.png';
import microsoftgrid from './microsoftgrid.png';

const Project = () => {
    return(
    <div className='project'>
            <div id="main">
                <div className="container">
                    <nav>
                    <img src={logo} className="logo" alt="Logo"/>
                    </nav>
                </div>
            </div>
            <div className='projectcards'>
                <div class='projectcards_comp'>
                    <img src={insta} alt="instagram"></img>
                    <h1>Instagram LoginPage Clone</h1>
                    <p>My beginner's practice work is an Instagram login page created using HTML and CSS. It incorporates media queries to ensure responsiveness across different devices. The page features a clean layout resembling the official Instagram login interface, with input fields for username and password, as well as buttons for logging in and signing up. The design is visually appealing, with appropriate use of colors and styling to mimic the Instagram brand. </p>
                </div>
                <div class='projectcards_comp'>
                    <img src={omni} alt="omnifood"></img>
                    <h1>Omnifood Old Website Clone</h1>
                    <p>My webpage, inspired by the Omnifood Old Website, showcases my HTML and CSS skills in recreating a professional and visually appealing design. It emulates the style of a food franchise's website, featuring a modern and elegant layout with sections for showcasing menus, customer testimonials, and contact information. The use of CSS properties enables attractive styling elements, such as responsive navigation menus, animated transitions.</p>
                </div>
                <div class='projectcards_comp'>
                    <img src={twitter} alt="twitter"></img>
                    <h1>Twitter LoginPage Clone</h1>
                    <p>Your beginner's practice work is a Twitter login page crafted with HTML and CSS, demonstrating your foundational web development skills. Utilizing media queries enhances its responsiveness across various devices. The page mirrors the familiar Twitter interface, featuring input fields for username/email and password, along with login and signup buttons. Its design is sleek and reminiscent of the official Twitter branding, employing appropriate colors and styling.</p>
                </div>
                <div class='projectcards_comp'>
                    <img src={photopix} alt="photo-pix"></img>
                    <h1>Photopix Website</h1>
                    <p>This practice website integrates CSS Grid for layout organization, showcasing your proficiency in modern web design techniques. Beyond grid implementation, it boasts additional features like a random image generator, enhancing its interactivity and user engagement. The website likely comprises various sections, each meticulously designed using grid-based layouts for optimal visual presentation and responsiveness across devices. By incorporating advanced features like a random image generator.</p>
                </div>
                <div class='projectcards_comp'>
                    <img src={perfume} alt="photo-pix"></img>
                    <h1>Garbriel CSS Card</h1>
                    <p>My early webpage was a starting point to learn CSS basics, especially how to style and design cards. It also introduced me to media queries for making my page look good on different devices. This project helped me understand how CSS works and how to make webpages visually appealing and responsive.</p>
                </div>
                <div class='projectcards_comp'>
                    <img src={microsoftgrid} alt="photo-pix"></img>
                    <h1>Grid Component</h1>
                    <p>This practice website integrates CSS Grid for layout organization, showcasing your proficiency in modern web design techniques. Beyond grid implementation, it boasts additional features like a random image generator, enhancing its interactivity and user engagement.</p>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright© Shreya Agarwal</p>
            </div>
    </div>
    );
}
export default Project;