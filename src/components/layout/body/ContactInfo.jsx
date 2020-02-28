import React from 'react'
import './ContactInfo.scss';
import Map from '../../../gfx/map.JPG';

const ContactInfo = () => {
    return (
        <article>
            <figure className="noMP">
                <img src={Map} alt="Map" title="Map" className="img-fluid" id="map" />
                <figcaption id="mapTxt">
                    <h2>CONTACT</h2>
                </figcaption>
            </figure>
            <section className="bg-black text-center">
                <h3 className="text-white pt-5" id="contactInfoHeadline">RUNINC</h3>
                <p className="text-white">
                    Kannikegade 12
                    <br/>
                    8000 Århus C
                    <br/>
                    Telefon 26 13 26 96
                    <br/>
                    info@runinc.dk
                </p>
            </section>
        </article>
    )
}

export default ContactInfo
