import React from 'react'
import './ContactFormular.scss';

const ContactFormular = () => {
    return (
        <article>
            <section className="contactForm">
                <h3 id="beskedTxt" className="mb-3">SEND EN BESKED</h3>
                <form className="text-left">
                    <label htmlFor="">NAVN:</label>
                    <input className="inputContact mb-3" type="text" placeholder="" aria-label="Search" required></input>
                    <label htmlFor="">EMAIL:</label>
                    <input className="inputContact mb-3" type="email" placeholder="" aria-label="Search" required></input>
                    <label htmlFor="">TELEFONNR.:</label>
                    <input className="inputContact mb-3" type="tel" placeholder="" aria-label="Search" required></input>
                    <label htmlFor="">BESKED:</label>
                    <input className="inputContact mb-3" type="text" placeholder="" aria-label="Search" required></input>
                    <button className="button" type="submit">Send besked</button>
                </form>
            </section>
        </article>
    )
}

export default ContactFormular
