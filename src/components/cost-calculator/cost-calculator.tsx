import React, { useRef, useEffect } from "react"
import CoastForm from "./coast-form"

import House from "../../images/cost-calculator/house.svg"
import "./cost-calculator.scss"
import { useState } from "react"

const CostCalculator = ({ name, heading }) => {
  const [selectedElem, setSelectedElem] = useState("")
//   const houseSections = document.querySelectorAll("svg.house .section")

  return (
    <section className="cost-calculator container">
      <div className="cost-calculator__name subtitle-2 col-xs-12">
        {name}
      </div>
      <h2 className="cost-calculator__title col-xs-12">{heading}</h2>
      <div className="cost-calculator__inner-wrap row">
          <House
            onClick={e => {
                const id = e?.target?.id ?? ""
                console.log(id)
                if(id.startsWith("wall")) {
                    setSelectedElem("wall")
                }
                if(id.startsWith("roof")) {
                    setSelectedElem("roof")
                }
                if(id.startsWith("slab")) {
                    setSelectedElem("floors")
                }
                if(id.startsWith("wall")) {
                    setSelectedElem("wall")
                }
            }}
            className={
              "cost-calculator__image col-xs-12 col-lg-6 " + selectedElem
            }
          />
        <div className="cost-calculator__content col-xs-12 col-lg-6">
          <CoastForm selectedElem={selectedElem} onSelected={what => setSelectedElem(what)} />
        </div>
      </div>
    </section>
  )
}

export default CostCalculator
