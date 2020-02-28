import React from 'react'
import HeroPic from '../../../gfx/hero.jpg';
import './Hero.scss';

const Hero = () => {
    return (
        <figure className="noMP">
            <img src={HeroPic} alt="Hero" title="Hero" className="img-fluid heroImg"/>
            <figcaption className="heroTxt">
                <h2>WE LOVE <span className="yellowTxt">RUNNING</span></h2>
            </figcaption>
        </figure>
    )
}

export default Hero
