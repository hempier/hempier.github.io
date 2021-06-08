import * as React from "react"
import "./services-list.scss"


const ServicesList = ({ component, currentLocale }) => {
  const contentPresent = Boolean(component?.content)
  const content = component.content

  if (!contentPresent) {
    return <div>no content</div>
  }

  return (
    <section className="services-list container">
      <div className="services-list__inner-wrap row">
          {content.map((props, id) => (
            <ServicesListItem key={id.toString()} {...props} currentLocale={currentLocale} />
          ))}
      </div>
    </section>
  )
}

const ServicesListItem = ({ image, title, shortDescription, ctaText, ctaLink, currentLocale }) => (
  <a href={ctaLink ? `/${currentLocale}/${ctaLink.slug}/${ctaLink.projectSlug}` : null} className="services-list__item col-6">
    <div className="services-list__image-wrap">
      <img src={image.file.url} alt="" className="services-list__image"/>
    </div>
    <h4 className="services-list__heading">{title}</h4>
    <p className="services-list__description">{shortDescription}</p>
    <span className="learn-more">{ctaText}</span>
  </a>
)

export default ServicesList
