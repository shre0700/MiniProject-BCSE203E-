
import './src/index.css';
import React from 'react';
const Project = () => {
    return(
    <div className='project'>
            <div id="header">
                <div className="container">
                    <nav>
                    <img src={logo} className="logo" alt="Logo"/>
                    <ul id="sidemenu">
                        <li><a href="#">Go Back</a></li>    
                    </ul>
                    </nav>
                </div>
            </div>
            <div className='projectcards'>
                <div className='cards'>
                    
                </div>
            </div>

    </div>
    );
}