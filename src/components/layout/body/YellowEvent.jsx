import React from 'react'
import './YellowEvent.scss';

const YellowEvent = () => {
    return (
        <section className="bg-yellow">
            <h3 className="biggerTopM">EVENTS</h3>
            <h4>COPENHAGEN MARATHON</h4>
            <p>Den 24. maj 2018</p>
            <h4 className="nextEvents">AARHUS CITY RUN</h4>
            <p className="smallTxt">Den 1. juni 2018</p>
            <h4 className="nextEvents">BERLIN MARATHON</h4>
            <p className="smallTxt">Den 6. juni 2018</p>
        </section>
    )
}

export default YellowEvent
