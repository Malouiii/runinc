import React from 'react'
import ContactInfo from '../components/layout/body/ContactInfo'
import ContactFormular from '../components/layout/body/ContactFormular'

const Contact = () => {
    return (
        <div className="container-fluid">
            <article className="row">
                <section className="col-lg-6 col-12 noMP">
                    <ContactInfo />
                </section>
                <section className="col-lg-6 col-12 noMP">
                    <ContactFormular />
                </section>
            </article>
        </div>
    )
}

export default Contact