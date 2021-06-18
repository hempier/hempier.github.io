import * as React from "react"
import { Link } from "gatsby"
import "./projects-slider.scss"
import SimpleSlider from "../slider/slider"

const productsSliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: 'projects-slider',
}

const ProjectsSlider = ({ component }) => {
  const contentPresent = Boolean(component?.content)
  const content = component.content

  if (!contentPresent) {
    return <div>no content</div>
  }

  return (
    <section className="projects-slider container">
      <span className="projects-slider__name subtitle-2">{component.name}</span>
      <h2 className="projects-slider__title">{component.title}</h2>
      <div className="projects-slider__inner-wrap">
        <SimpleSlider customSettings={productsSliderSettings}>
          {content.map((props, id) => (
            <ProjectsSliderItem key={id.toString()} {...props} />
          ))}
        </SimpleSlider>
      </div>
    </section>
  )
}

const ProjectsSliderItem = ({ image, title, description, ctaText, ctaLink, currentLocale }) => (
  <Link to={ctaLink ? `/${currentLocale}/${ctaLink.slug}/${ctaLink.serviceSlug}` : null} className="projects-slider__item">
    <img src={image.file.url} alt="" className="projects-slider__image"/>
    <div className="projects-slider__content">
      <h4 className="projects-slider__heading">{title}</h4>
      <div className="projects-slider__content-inner">
        <p className="projects-slider__description">
          {description.childMarkdownRemark.rawMarkdownBody}
        </p>
        <span className="projects-slider__cta learn-more learn-more_light">
          {ctaText}
        </span>
      </div>
    </div>
  </Link>
)

export default ProjectsSlider
