import * as React from "react"
import "./carbon-dioxid-counter.scss"

const CarbonDioxidCounter = ({ name, title, description, ctaText, image }) => {

  return (
    <section className="carbon-counter container">
      <div className="carbon-counter__inner-wrap row">
        <div className="carbon-counter__subtitle subtitle-2">{name}</div>
        <h2 className="carbon-counter__title">{title}</h2>
        <div className="carbon-counter__content">

        </div>
      </div>
    </section>
  )
}

export default CarbonDioxidCounter
