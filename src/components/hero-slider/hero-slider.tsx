import * as React from "react"
import { Link } from "gatsby"
import SimpleSlider from "../slider/slider"
import "./hero-slider.scss"

const HeroSlider = ({ items }) => (
  <section className="hero-slider">
    <SimpleSlider>
      {items.map((props, id) => (
        <HeroSliderItem key={id.toString()} {...props} />
      ))}
    </SimpleSlider>
  </section>
)

const HeroSliderItem = ({ name, title, description, ctaText, image }) => {
  const sliderItemImage = {
      backgroundImage: `url(${image.file.url})`,
  }
  return (
    <div className="hero-slider__item">
      <div className="hero-slider__inner-wrap">
        <div className="hero-slider__text">
          <span className="hero-slider__name subtitle-1">{name}</span>
          <h1 className="hero-slider__title">{title}</h1>
          <p className="hero-slider__description">
            {description.childMarkdownRemark.rawMarkdownBody}
          </p>
          <Link to="" className="hero-slider__cta cta-link">
            {ctaText}
          </Link>
        </div>
        <div className="hero-slider__image" style={sliderItemImage} />
      </div>
    </div>
  )
}

export default HeroSlider
