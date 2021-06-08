import React from "react"

import Layout from "../components/layout"
import TopPageBanner from "../components/top-banner/top-banner"
import AplicationAreas from "../components/service-aplication-areas/service-aplication-areas";
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

  const serviceTopBanner = findByInternalName(
    page,
    ComponentInternalName.ServiceTopBanner
  )
  const serviceAplicationAreas = findByInternalName(
    page,
    ComponentInternalName.ServiceAplicationAreas
  )
  const plpFeedbackForm = findByInternalName(
    page,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout  allLocales={allLocales} currentLocale={page.node_locale}>
      <TopPageBanner {...serviceTopBanner} />
      <AplicationAreas items={serviceAplicationAreas}/>
      <FeedbackForm {...plpFeedbackForm} />
    </Layout>
  )
}
