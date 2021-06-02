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

export default ({ pageContext: { page, allLocales } }) => {
  // const localizedPage = filterPageLocale(page, locale)
  // const localizedPage = page

  const projectsListTopBanner = findByInternalName(
    page,
    ComponentInternalName.ProjectsListTopBanner
  )
  const projectsList = findByInternalName(
    page,
    ComponentInternalName.ProjectsList
  )
  const plpFeedbackForm = findByInternalName(
    page,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout  allLocales={allLocales} currentLocale={page.node_locale}>
      <TopPageBanner {...projectsListTopBanner} />
      <ProjectsList component={projectsList} />
      <FeedbackForm {...plpFeedbackForm} />
    </Layout>
  )
}
