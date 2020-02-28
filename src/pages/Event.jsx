import React from 'react'
import HeroEvent from '../components/layout/body/HeroEvent'
import YellowEvent from '../components/layout/body/YellowEvent'

const Event = () => {
    return (
        <div className="container-fluid">
            <article className="row">
                <section className="col-lg-9 col-12 noMP">
                    <HeroEvent />
                </section>
                <section className="col-lg-3 col-12 noMP">
                    <YellowEvent />
                </section>
            </article>
            
        </div>
    )
}

export default Event
