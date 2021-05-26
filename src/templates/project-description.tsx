import React from "react"

import Layout from "../components/layout"
import TopPageBanner from "../components/top-banner/top-banner"
import ProjectsList from "../components/projects-list/projects-list"
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

  const projectsListTopBanner = findByInternalName(
    localizedPage,
    ComponentInternalName.ProjectsListTopBanner
  )
  const projectsList = findByInternalName(
    localizedPage,
    ComponentInternalName.ProjectsList
  )
  const plpFeedbackForm = findByInternalName(
    localizedPage,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout>
      <TopPageBanner {...projectsListTopBanner} />
      <ProjectsList component={projectsList} />
      <FeedbackForm {...plpFeedbackForm} />
    </Layout>
  )
}
