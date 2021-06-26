import * as React from "react"
import { Link } from "gatsby"
import "./projects-list.scss"


const ProjectsList = ({ component, currentLocale, listingPage }) => {
  const contentPresent = Boolean(component?.content)
  const content = component.content

  if (!contentPresent) {
    return <div>no content</div>
  }

  return (
    <section className="projects-list container">
      <div className="projects-list__inner-wrap">
          {content.map((props, id) => (
            <ProjectsListItem key={id.toString()} {...props} currentLocale={currentLocale} listingPage={listingPage}/>
          ))}
      </div>
    </section>
  )
}

const ProjectsListItem = ({ image, title, shortDescription, ctaText, projectLink, currentLocale, listingPage }) => (
  <Link
    to={projectLink
    ? `/${currentLocale}/${listingPage}/${projectLink.projectSlug}`
    : null}
    className="projects-list__item col-6 col-xs-12 col-xm-6">
      <div className="projects-list__image-wrap">
        <img src={image.file.url} alt="" className="projects-list__image"/>
      </div>
      <h4 className="projects-list__heading">{title}</h4>
      <p className="projects-list__description">{shortDescription}</p>
      <span className="projects-list__cta learn-more">{ctaText}</span>
  </Link>
)

export default ProjectsList
