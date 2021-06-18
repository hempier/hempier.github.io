import * as React from "react"
import { Link } from "gatsby"
import "./services-trusted.scss"

const ServicesTrusted = ({ component, currentLocale }) => {
  const contentPresent = Boolean(component?.content)
  const content = component.content

  if (!contentPresent) {
    return <div>no content</div>
  }

  return (
    <section className="services-trusted container">
      <span className="services-trusted__name subtitle-2">
        {component.name}
      </span>
      <h2 className="services-trusted__title">{component.title}</h2>
      <div className="services-trusted__inner-wrap">
        {content.map((props, id) => (
          <ServicesTrustedItem key={id.toString()} {...props} currentLocale={currentLocale}/>
        ))}
      </div>
    </section>
  )
}

const ServicesTrustedItem = ({
  image,
  title,
  shortDescription,
  ctaText,
  ctaLink,
  currentLocale,
}) => (
  <Link to={ctaLink ? `/${currentLocale}/${ctaLink.slug}/${ctaLink.serviceSlug}` : null} className="services-trusted__item">
    <div className="services-trusted__content-wrap">
      <h4 className="services-trusted__heading">{title}</h4>
      <p className="services-trusted__description">{shortDescription}</p>
      <a href="" className="services-trusted__cta learn-more">
        {ctaText}
      </a>
    </div>
    <img src={image.file.url} alt="" className="services-trusted__image" />
  </Link>
)

export default ServicesTrusted
