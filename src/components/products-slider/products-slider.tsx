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
  className: 'products-slider',
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
      <div className="products-slider__inner-wrap">
        <SimpleSlider customSettings={productsSliderSettings}>
          {content.map((props, id) => (
            <ProductsSliderItem key={id.toString()} {...props} />
          ))}
        </SimpleSlider>
      </div>
    </section>
  )
}

const ProductsSliderItem = ({ image, title, description, ctaText }) => (
  <div className="products-slider__item">
    <div className="products-slider__image-wrap">
      <img src={image.file.url} alt="" className="products-slider__image"/>
    </div>
    <h3 className="products-slider__heading">{title}</h3>
    <p className="products-slider__description">
      {description.childMarkdownRemark.rawMarkdownBody}
    </p>
    <a href="" className="products-slider__cta learn-more">
      {ctaText}
    </a>
  </div>
)

export default ProductsSlider
