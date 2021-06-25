import * as React from "react"
import "./partners-about-us-slider.scss"
import SimpleSlider from "../slider/slider"

const partnersAboutUsSliderSettings = {
  dots: false,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const PartnersAboutUs = ({ component }) => {
  const contentPresent = Boolean(component?.content)
  if (!contentPresent) {
    return <div>no content</div>
  }

  const content = component.content

  return (
    <section className="partners-about-us container">
      <span className="partners-about-us__name subtitle-2 col-xs-12">
        {component.name}
      </span>
      <h2 className="partners-about-us__title col-xs-12">{component.title}</h2>
      <div className="partners-about-us__inner-wrap col-xs-12">
        <SimpleSlider customSettings={partnersAboutUsSliderSettings}>
          {content.map((props, id) => (
            <ProductsSliderItem key={id.toString()} {...props} />
          ))}
        </SimpleSlider>
      </div>
    </section>
  )
}

const ProductsSliderItem = ({ image, link }) => (
  <a href={link} target="_blank" className="partners-about-us__item">
    <img
      src={image.file.url}
      alt={image.title}
      className="partners-about-us__image"
    />
  </a>
)

export default PartnersAboutUs
