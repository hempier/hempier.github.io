import * as React from "react"
import "./project-gallery.scss"
import SimpleGallery from "../gallery/gallery"

const ProjectGallery = ({ component }) => {
  const contentPresent = Boolean(component?.content)
  const content = component.content

  // console.log('test'+JSON.stringify(content, null, 4))

  if (!contentPresent) {
    return <div>no content</div>
  }

  return (
    <section className="project-gallery col-xs-12">
      <span className="project-gallery__name subtitle-2">
        {component.name}
      </span>
      <h2 className="project-gallery__title">{component.title}</h2>
      <div className="project-gallery__inner-wrap">
        <SimpleGallery>
          {content.map((props, id) => (
            <GalleryItem key={id.toString()} {...props} />
          ))}
        </SimpleGallery>
      </div>
    </section>
  )
}

const GalleryItem = ({ image }) => (
  <div className="project-gallery__item">
    <img
      src={image?.file.url || []}
      className="project-gallery__image"
    />
  </div>
)

export default ProjectGallery
