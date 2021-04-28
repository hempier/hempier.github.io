import * as React from "react"
import "./partners-about-us-slider.scss"
import SimpleSlider from "../slider/slider"

const partnersAboutUsSliderSettings = {
  slidesToShow: 4,
}

const PartnersAboutUs = ({ component }) => {
  const contentPresent = Boolean(component?.content)
  const content = component.content

  if (!contentPresent) {
    return <div>no content</div>
  }

  return (
    <section className="partners-about-us container">
      <span className="partners-about-us__name subtitle-2">{component.name}</span>
      <h2 className="partners-about-us__title">{component.title}</h2>
      <SimpleSlider customSettings={partnersAboutUsSliderSettings}>
        {content.map((props, id) => (
          <ProductsSliderItem key={id.toString()} {...props} />
        ))}
      </SimpleSlider>
    </section>
  )
}

const ProductsSliderItem = ({ image, link }) => (
    <a href={link} className="partners-about-us__item" >
      <img src={image.file.url} alt={image.title}/>
    </a>
)

export default PartnersAboutUs
