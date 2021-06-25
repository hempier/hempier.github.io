import * as React from "react"
import { Link } from "gatsby"
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
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}


const ProductsSlider = ({ component, currentLocale }) => {
  const contentPresent = Boolean(component?.content)
  const content = component.content

  if (!contentPresent) {
    return <div>no content</div>
  }

  return (
    <section className="products-slider container">
      <span className="products-slider__name subtitle-2 col-xs">{component.name}</span>
      <h2 className="products-slider__title col-xs">{component.title}</h2>
      <div className="products-slider__inner-wrap col-xs">
        <SimpleSlider customSettings={productsSliderSettings}>
          {content.map((props, id) => (
            <ProductsSliderItem key={id.toString()} {...props} currentLocale={currentLocale} />
          ))}
        </SimpleSlider>
      </div>
    </section>
  )
}

const ProductsSliderItem = ({ image, title, description, ctaText, ctaLink, currentLocale }) => (
  <Link to={ctaLink ? `/${currentLocale}/plp/${ctaLink.productSlug}` : null} className="products-slider__item">
    <div className="products-slider__image-wrap">
      <img src={image?.file.url || []} alt="" className="products-slider__image"/>
    </div>
    <h3 className="products-slider__heading">{title}</h3>
    <p className="products-slider__description">
      {description.childMarkdownRemark.rawMarkdownBody}
    </p>
    <span className="products-slider__cta learn-more">
      {ctaText}
    </span>
  </Link>
)

export default ProductsSlider
