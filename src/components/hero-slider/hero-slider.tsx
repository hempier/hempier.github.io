import * as React from "react"
import "./hero-slider.scss"

const HeroSlider = ({items}) => (
        <section className="hero-slider">
            {items.map((props, id) => <HeroSliderItem key={id.toString()} {...props}/>)}
        </section>
    )

const HeroSliderItem = ({name, title, description, ctaText}) => (
        <div className="hero-slider__item">
            <h3 className="hero-slider__name">{name}</h3>
            <h1 className="hero-slider__title">{title}</h1>
            <p className="hero-slider__description">{description.childMarkdownRemark.rawMarkdownBody}</p>
            <a href="" className="hero-slider__cta">{ctaText}</a>
        </div>
    )

export default HeroSlider