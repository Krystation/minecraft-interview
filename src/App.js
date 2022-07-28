import React from 'react';
import { ArizonaHeader, MinecraftInfo, Hero, MinecraftVideo, HowToPlayWrap, RegistrationForm, Disclaimer } from './components';
import './App.css';

const App = props => {
	return (
		<div className="App">
			<div className="main-container">
				<ArizonaHeader />
				<MinecraftInfo>
					<Hero />
				</MinecraftInfo>
				<section className="minecraft-video-section">
					<MinecraftVideo />
				</section>
				<section className="how-to-play-section">
 					<HowToPlayWrap />
 				</section>
				<section className="registration-form-section">
					<RegistrationForm />
				</section>
				<section className="disclaimer-section">
 					<Disclaimer />
 				</section>
			</div>
		</div>
	)
}

export default App;