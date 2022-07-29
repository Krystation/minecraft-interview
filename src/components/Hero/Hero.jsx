import React from 'react'
import { Link } from 'react-scroll'
import ArizonaType from '../../img/arizona-type.svg'
import MinecraftType from '../../img/minecraft-type.svg'

import Style from './Hero.css'

const Hero = props => {
    return (
        <section style={Style} className="hero">
            <div className="container">
                <h1 className="title">
                    <img src={ArizonaType} aria-label="Arizona" alt="Arizona" />
                    <span className="psuedo-after-color-bloom psuedo-before-color-bloom">MEETS</span>
                    <img src={MinecraftType} aria-label="Minecraft" alt="Minecraft" />
                </h1>
                <p>University of Arizona students have built Old Main and the University of Arizona mall – to scale! – for you to explore.</p>
				<p>Register to visit the world &amp; meet other Wildcats!</p>
				<Link to="how-to-play-wrap" smooth={true} duration={800} offset={-40} className="commit-bttn bg-color-bloom">SIGN ME UP</Link>
            </div>
            <div className="scroll">
                <div className="chevron"></div>
                <div className="chevron"></div>
            </div>
        </section>
    )
}

export default Hero;