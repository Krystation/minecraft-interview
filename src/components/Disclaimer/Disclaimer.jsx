import React from 'react';
import Style from './Disclaimer.css';

const Disclaimer = () => {
	return(
		<div style={Style} className="disclaimer container">
			<div className="disclaimer-text border-color-bloom">
				<h4>DISCLAIMER</h4>
				<p>Minecraft Education Edition WILL NOT WORK on our server. This experience is not supported for tablets, phones or other devices – only Windows, Mac or Linux systems.</p>
				<p>Participants are expected to abide by the <a href="https://public.azregents.edu/Policy%20Manual/5-308-Student%20Code%20of%20Conduct.pdf" target="_blank" rel="noopener noreferrer">Student Code of Conduct</a> as outlined by the Arizona Board of Regents. Any destructive, abusive, or behavior otherwise deemed inappropriate by the game monitors will result in expulsion from the Minecraft build and may be forwarded to the Arizona Dean of Students Office.</p>
				<p>Please note, this experience is 100% voluntary. Participation will not impact student enrollment plans in any way.</p>
			</div>
		</div>
	)
}

export default Disclaimer