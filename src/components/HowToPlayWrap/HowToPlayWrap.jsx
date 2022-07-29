import React from 'react';
import HowTos from '../../data/HowToPlay';
import Style from './HowToPlayWrap.css';

const HowToPlayWrap = props => {
    return(
        <div style={Style} classname="how-to-play-wrap container">
		<h3 classname="font-color-sky">MINECRAFT REQUIREMENTS</h3>
		<h4>YOU'LL NEED:</h4>
			<hr />
            <div classname="how-to-list">
				{HowTos.map(howTo => (
					<div key={howTo.id} classname="how-to-item">
						<img src={require(`../../img/how-to/how-to-${howTo.id+1}.svg`)} alt={howTo.alt} classname="how-to-item-img" />
						{howTo.text}
					</div>
				))}
			</div>
			<hr />
			<p classname="email-text">An email will be sent out to those who have registered, with instructions on how to enter the Minecraft-created University of Arizona. If you’re experiencing connection issues, <a href="https://help.minecraft.net/hc/en-us/articles/360035130871-Java-Edition-Realms-connection-issues" rel="noopener">click here</a> for help.</p>
        </div>
    )
}

export default HowToPlayWrap
