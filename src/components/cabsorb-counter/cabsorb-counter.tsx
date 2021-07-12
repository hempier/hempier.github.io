import * as React from "react"
import "./cabsorb-counter.scss"
import { useEffect, useState } from "react"

import IconCarEmission from "../../images/cabsorb-counter/car-carbon-emission.svg"
import IconPeoplesEmission from "../../images/cabsorb-counter/peoples-carbon-emission.svg"

// function component
const StaticCard = ({ value, measure, identifier }) => {
  return (
    <div className="cabsorb-counter__item col-xs-4 col-sm-6 col-lg-3">
      <div className="cabsorb-counter__value">
        <span className="cabsorb-counter__value-inner-wrap">{value}</span>
      </div>
      <span className="cabsorb-counter__label">{measure}</span>
    </div>
  )
}

const MILLIARD = 1_000_000_000
const MILLION = 1_000_000
const THOUSAND = 1000
const currentDate = Date.now()

const CAbsorbCounter = ({ props, measure }) => {
  const initialMg = props.initialMg + (currentDate - props.initialDate) / THOUSAND * props.incrementMg
  const [totalMg, setInitialMg] = React.useState(initialMg)
  const tons = Math.floor(totalMg / MILLIARD)
  const onlyTones = tons * MILLIARD
  const kilograms = Math.floor((totalMg - onlyTones) / MILLION)
  const onlyKilograms = kilograms * MILLION
  const grams = Math.floor((totalMg - onlyTones - onlyKilograms) / THOUSAND)
  const onlyGrams = grams * THOUSAND
  const miligrams = Math.floor(totalMg - onlyTones - onlyKilograms - onlyGrams)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setInitialMg(totalMg + props.incrementMg)
    }, THOUSAND)

    return () => clearTimeout(interval)
  }, [totalMg])

  return (
    <div className="cabsorb">
      <div className="cabsorb-counter">
          <StaticCard value={tons} measure={measure.tonsLabel}/>
          <StaticCard value={kilograms} measure={measure.kilogramsLabel}/>
          <StaticCard value={grams} measure={measure.gramsLabel}/>
          <StaticCard value={miligrams} measure={measure.miligramsLabel}/>
      </div>
      <div className="cabsorb-emission col-xs-12">
        <div className="cabsorb-emission__item">
          <div className="cabsorb-emission__icon-wrap">
            <IconCarEmission className="cabsorb-emission__icon" />
          </div>
          <div className="cabsorb-emission__conten">
            <strong className="cabsorb-emission__value">{props.carCarbonEmissionNumber}</strong>
            <div className="cabsorb-emission__description">{props.carCarbonEmissionTitle}</div>
          </div>
        </div>
        <div className="cabsorb-emission__item">
          <div className="cabsorb-emission__icon-wrap">
            <IconPeoplesEmission className="cabsorb-emission__icon" />
          </div>
          <div className="cabsorb-emission__conten">
            <strong className="cabsorb-emission__value">{props.peoplesCarbonEmissionNumber}</strong>
            <div className="cabsorb-emission__description">{props.peoplesCarbonEmissionTitle}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CAbsorbCounter