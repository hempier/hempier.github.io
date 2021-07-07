import * as React from "react"
import { Link } from "gatsby"
import SimpleSlider from "../slider/slider"
import "./hero-slider.scss"

const HeroSliderSettings = {
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const HeroSlider = ({ items, currentLocale }) => (
  <section className="hero-slider">
    <SimpleSlider customSettings={HeroSliderSettings}>
      {items.map((props, id) => (
        <HeroSliderItem
          key={id.toString()}
          {...props}
          currentLocale={currentLocale}
        />
      ))}
    </SimpleSlider>
  </section>
)

const HeroSliderItem = ({
  name,
  title,
  description,
  ctaText,
  ctaLink,
  externalCtaLink,
  image,
  currentLocale,
}) => {
  const sliderItemImage = {
    backgroundImage: `url(${image.file.url})`,
  }
  return (
    <div className="hero-slider__item">
      <div className="hero-slider__inner-wrap container">
        <div className="hero-slider__text">
          <span className="hero-slider__name subtitle-1">{name}</span>
          <h1 className="hero-slider__title">{title}</h1>
          <p className="hero-slider__description">
            {description.childMarkdownRemark.rawMarkdownBody}
          </p>
          {Boolean(ctaLink?.slug) && (
            <Link
              to={ctaLink ? `/${currentLocale}/${ctaLink.slug}` : null}
              className="hero-slider__cta cta-link"
            >
              {ctaText}
            </Link>
          )}
          {Boolean(externalCtaLink !== null) && (
            <a 
              href={externalCtaLink}
              target="_blank"
              className="hero-slider__cta cta-link"
            >
              {ctaText}
            </a>
          )}
        </div>
        <div className="hero-slider__image" style={sliderItemImage} />
      </div>
    </div>
  )
}

export default HeroSlider
