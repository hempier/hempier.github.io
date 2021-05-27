import React from "react"

import Layout from "../components/layout"
import TopPageBanner from "../components/top-banner/top-banner"
import ProjectsDetails from "../components/project-tech-info/project-tech-info"
import ProjectGallery from "../components/project-gallery/project-gallery"
import FeedbackForm from "../components/feedback-form/feedback-form"

import {
  findByInternalName,
  ComponentInternalName,
} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

export default ({ pageContext: { page } }) => {
  // const localizedPage = filterPageLocale(page, locale)
  const localizedPage = page

  const projectTopBanner = findByInternalName(
    localizedPage,
    ComponentInternalName.ProjectTechTopBanner
  )
  const projectDetails = findByInternalName(
    localizedPage,
    ComponentInternalName.ProjectTechDetails
  )
  const projectGallery = findByInternalName(
    localizedPage,
    ComponentInternalName.ProjectGallery
  )
  const plpFeedbackForm = findByInternalName(
    localizedPage,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout>
      <TopPageBanner {...projectTopBanner} />
      <ProjectsDetails {...projectDetails} />
      <ProjectGallery component={projectGallery}/>
      <FeedbackForm {...plpFeedbackForm} />
    </Layout>
  )
}
