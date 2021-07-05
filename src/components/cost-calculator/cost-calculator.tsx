import React, { useRef, useEffect } from "react"

import House from "../../images/cost-calculator/house.svg"
import "./cost-calculator.scss"

const CostCalculator = ({
    name,
    heading,
}) => {
    return (
        <section className="cost-calculator container">
            <div className="cost-calculator__subtitle subtitle-2 col-xs-12">{name}</div>
            <h2 className="cost-calculator__title col-xs-12">{heading}</h2>
            <div className="cost-calculator__inner-wrap">
                {/* <House className="cost-calculator__image"/>
                <div className="cost-calculator__content">

                </div> */}
            </div>
        </section>
    )
}

export default CostCalculator