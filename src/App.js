import React from 'react';
import { ArizonaHeader, MinecraftInfo, Hero, MinecraftVideo, HowToPlayWrap, Disclaimer, ErrorBoundary } from './components';
import './App.css';

const App = props => {
	return (
		<div className="App">
			<div className="main-container">
				<ErrorBoundary>
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
					<section className="disclaimer-section">
						<Disclaimer />
					</section>
				</ErrorBoundary>
			</div>
		</div>
	)
}

export default App;