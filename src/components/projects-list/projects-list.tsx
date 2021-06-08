import * as React from "react"
import "./projects-list.scss"


const ProjectsList = ({ component, currentLocale }) => {
  const contentPresent = Boolean(component?.content)
  const content = component.content

  if (!contentPresent) {
    return <div>no content</div>
  }

  return (
    <section className="projects-list container">
      <div className="projects-list__inner-wrap row">
          {content.map((props, id) => (
            <ProjectsListItem key={id.toString()} {...props} currentLocale={currentLocale} />
          ))}
      </div>
    </section>
  )
}

const ProjectsListItem = ({ image, title, shortDescription, ctaText, projectLink, currentLocale }) => (
  <a href={projectLink ? `/${currentLocale}/${projectLink.slug}/${projectLink.projectSlug}` : null} className="projects-list__item col-6">
    <div className="projects-list__image-wrap">
      <img src={image.file.url} alt="" className="projects-list__image"/>
    </div>
    <h4 className="projects-list__heading">{title}</h4>
    <p className="projects-list__description">{shortDescription}</p>
    <span className="learn-more">{ctaText}</span>
  </a>
)

export default ProjectsList
