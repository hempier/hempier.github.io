import * as React from "react"
import "./hero-slider.scss"
import SimpleSlider from "../slider/slider"

const HeroSlider = ({ items }) => (
  <section className="hero-slider container">
    <SimpleSlider >
      {items.map((props, id) => (
        <HeroSliderItem key={id.toString()} {...props} />
      ))}
    </SimpleSlider>
  </section>
)

const HeroSliderItem = ({ name, title, description, ctaText }) => (
  <div className="hero-slider__item">
    <span className="hero-slider__name subtitle-1">{name}</span>
    <h1 className="hero-slider__title">{title}</h1>
    <p className="hero-slider__description">
      {description.childMarkdownRemark.rawMarkdownBody}
    </p>
    <a href="" className="hero-slider__cta">
      {ctaText}
    </a>
  </div>
)

export default HeroSlider
