import React from 'react';
import './HomeHeader.css';

function HomeHeader() {
    return (
        <div className='home-header-container'>

            <div className='home-header-spinner-wrapper'>

                <img src="https://thumbs.gfycat.com/HelpfulDazzlingBluebottlejellyfish-max-1mb.gif"
                 className="home-header-spinner" alt="spinning record" />

            </div>

            <div className='home-header-text-wrapper'>

                <h2 className='home-header-text'>
                    Festival finder.
                </h2>
                
            </div>

        </div>
    );
}

export default HomeHeader;
