import React from "react"

import Layout from "../components/layout"
import TopPageBanner from "../components/top-banner/top-banner"
import ServicesList from "../components/services-list/services-list"
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
    ComponentInternalName.ServicesListTopBanner
  )
  const servicesList = findByInternalName(
    page,
    ComponentInternalName.ServicesList
  )
  const plpFeedbackForm = findByInternalName(
    page,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout  allLocales={allLocales} currentLocale={page.node_locale}>
      <TopPageBanner {...projectsListTopBanner} />
      <ServicesList component={servicesList} currentLocale={page.node_locale} listingPage={page.slug} />
      <FeedbackForm {...plpFeedbackForm} />
    </Layout>
  )
}
