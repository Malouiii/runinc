import React from 'react'
import Hero from '../components/layout/body/Hero'
import HeroEvent from '../components/layout/body/HeroEvent'
import YellowEvent from '../components/layout/body/YellowEvent'
import YellowShop from '../components/layout/body/YellowShop'
import ShopShoes from '../components/layout/body/ShopShoes'
import ContactInfo from '../components/layout/body/ContactInfo'
import ContactFormular from '../components/layout/body/ContactFormular'

const Home = () => {
    return (
        <div className="container-fluid">
            <article className="row">
                <section className="col-12 noMP">
                    <Hero />
                </section>
                <section className="col-lg-9 col-12 noMP">
                    <HeroEvent />
                </section>
                <section className="col-lg-3 col-12 noMP">
                    <YellowEvent />
                </section>
                <section className="col-lg-3 col-12 noMP">
                    <YellowShop />
                </section>
                <section className="col-lg-9 col-12 noMP">
                    <ShopShoes />
                </section>
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

export default Home
