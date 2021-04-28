import * as React from "react"
import "./products-slider.scss"
import SimpleSlider from "../slider/slider"

const productsSliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
}


const ProductsSlider = ({ component }) => {
  const contentPresent = Boolean(component?.content)
  const content = component.content

  if (!contentPresent) {
    return <div>no content</div>
  }

  return (
    <section className="products-slider container">
      <span className="products-slider__name subtitle-2">{component.name}</span>
      <h2 className="products-slider__title">{component.title}</h2>
      <SimpleSlider customSettings={productsSliderSettings}>
        {content.map((props, id) => (
          <ProductsSliderItem key={id.toString()} {...props} />
        ))}
      </SimpleSlider>
    </section>
  )
}

const ProductsSliderItem = ({ name, title, description, ctaText }) => (
  <div className="products-slider__item">
    <h3 className="products-slider__name">{name}</h3>
    <h1 className="products-slider__title">{title}</h1>
    <p className="products-slider__description">
      {description.childMarkdownRemark.rawMarkdownBody}
    </p>
    <a href="" className="products-slider__cta">
      {ctaText}
    </a>
  </div>
)

export default ProductsSlider
