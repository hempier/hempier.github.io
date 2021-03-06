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
      <span className="services-trusted__name subtitle-2 col-xs">
        {component.name}
      </span>
      <h2 className="services-trusted__title col-xs">{component.title}</h2>
      <div className="services-trusted__inner-wrap col-xs">
        {content.map((props, id) => (
          <ServicesTrustedItem
            key={id.toString()}
            {...props}
            currentLocale={currentLocale}
          />
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
  // @TODO: remove static declaration of 'service list' page
  <Link
    to={
      ctaLink ? `/${currentLocale}/services-list/${ctaLink.serviceSlug}` : null
    }
    className="services-trusted__item"
  >
    <div className="services-trusted__content-wrap">
      <h4 className="services-trusted__heading">{title}</h4>
      <p className="services-trusted__description">{shortDescription}</p>
      <span className="services-trusted__cta learn-more">
        {ctaText}
      </span>
    </div>
    <img src={image.file.url} alt="" className="services-trusted__image" />
  </Link>
)

export default ServicesTrusted
