import * as React from "react"
import "./carbon-dioxid-counter.scss"
import CAbsorbCounter from "../cabsorb-counter/cabsorb-counter"

const CarbonDioxidCounter = ({
  name,
  title,
  heading,
  tonsLabel,
  kilogramsLabel,
  gramsLabel,
  miligramsLabel,
  carCarbonEmissionTitle,
  carCarbonEmissionNumber,
  peoplesCarbonEmissionTitle,
  peoplesCarbonEmissionNumber,
  initialMg,
  incrementMg,
  initialDate,
}) => {

  const measureLabels = {
    tonsLabel,
    kilogramsLabel,
    gramsLabel,
    miligramsLabel,
  }

  const cAbsorbCounterProps = {
    initialMg,
    incrementMg,
    initialDate,
    carCarbonEmissionTitle,
    peoplesCarbonEmissionTitle,
    carCarbonEmissionNumber,
    peoplesCarbonEmissionNumber,
  }

  return (
    <section className="carbon-counter container">
      <div className="carbon-counter__inner-wrap">
        <div className="carbon-counter__subtitle subtitle-2">{name}</div>
        <h2 className="carbon-counter__title">{title}</h2>
        <div className="carbon-counter__content">
          <h3 className="carbon-counter__heading">{heading}</h3>
          <CAbsorbCounter props={cAbsorbCounterProps}  measure={measureLabels}/>
        </div>
      </div>
    </section>
  )
}

export default CarbonDioxidCounter
