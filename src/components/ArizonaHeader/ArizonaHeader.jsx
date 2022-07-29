import React from 'react';
import Style from './ArizonaHeader.css';
import arizonaLogo from '../../img/arizona-logo-white.svg';

const ArizonaHeader = props => {
    return (
        <section style={Style} className='arizona-header bg-color-uared'>
            <div className="container">
                <a href="https://arizona.edu" rel="noopener noreferrer" target="_blank">
                    <img className="logo" src={arizonaLogo} alt="University of Arizona Logo" />
                </a>
            </div>
        </section>
    )
}

export default ArizonaHeader;