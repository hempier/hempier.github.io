import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import TopPageBanner from "../components/top-banner/top-banner"
import PageText from "../components/page-text/page-text"
import CostCalculator from "../components/cost-calculator/cost-calculator"
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

  const costCaslculatorTopBanner = findByInternalName(
    page,
    ComponentInternalName.CostCaslculatorTopBanner
  )
  const costCaslculatorPageText = findByInternalName(
    page,
    ComponentInternalName.CostCaslculatorPageText
  )
  const costCaslculator = findByInternalName(
    page,
    ComponentInternalName.CostCaslculator
  )
  const feedbackForm = findByInternalName(
    page,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout allLocales={allLocales} currentLocale={page.node_locale}>
      <TopPageBanner {...costCaslculatorTopBanner} />
      <PageText text={costCaslculatorPageText} />
      <CostCalculator {...costCaslculator}/>
      <FeedbackForm {...feedbackForm}/>
    </Layout>
  )
}
