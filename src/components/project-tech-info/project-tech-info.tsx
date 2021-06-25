import * as React from "react"

import "./project-tech-info.scss"

const ProjectTechInfo = ({
  image,
  title,
  characteristics,
}) => {
  return (
    <section className="project-tech container">
      <div className="project-tech__inner-wrap">
        <div className="project-tech__image col-xs-12 col-lg-6">
          <img src={image.file.url} alt="" />
        </div>
        <div className="project-tech__content col-xs-12 col-lg-5 off-lg-1">
          <h2 className="project-tech__title">{title}</h2>
          <ul className="project-tech__info">
              {characteristics.map((item, id) => (
                <li className="project-tech__info-item" key={id.toString()}>
                  <strong className="project-tech__label">{item.techLabel}</strong>
                  <span className="project-tech__value">{item.techValue}</span>
                </li>
              )) }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProjectTechInfo
