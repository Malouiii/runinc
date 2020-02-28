import React from 'react'
import EventPic from '../../../gfx/event.jpg';
import './HeroEvent.scss';

const HeroEvent = () => {
    return (
        <figure className="noMP">
            <img src={EventPic} alt="Event Hero" title="Event Hero" className="img-fluid eventHeroImg"/>
            <figcaption className="eventHeroTxt">
                <h2>NEXT EVENT</h2>
            </figcaption>
        </figure>
    )
}

export default HeroEvent
