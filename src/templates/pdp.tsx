import React from "react"

import Layout from "../components/layout"
import ProductDescription from "../components/product-description/product-description"
import ProductUsagesTrusted from "../components/advantages-trusted/advantages-trusted"
import Advertisement from "../components/advertisement/advertisement"
import ProductTechInfo from "../components/product-tech-info/product-tech-info"
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

  const pdpProductDescrition = findByInternalName(
    page,
    ComponentInternalName.PdpFifthElementDescription
  )
  const pdpUsagesTrusted = findByInternalName(
    page,
    ComponentInternalName.PdpFifthElementUsages
  )
  const pdpInformationAdv = findByInternalName(
    page,
    ComponentInternalName.PlpInformationAdvertisement
  )
  const pdpTechInfo = findByInternalName(
    page,
    ComponentInternalName.PdpFifthElementTechInfo
  )
  const pdpFeedbackForm = findByInternalName(
    page,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout  allLocales={allLocales} currentLocale={page.node_locale}>
      <ProductDescription {...pdpProductDescrition} />
      <ProductTechInfo {...pdpTechInfo} />
      <ProductUsagesTrusted items={pdpUsagesTrusted} />
      <Advertisement {...pdpInformationAdv} currentLocale={page.node_locale} />
      <FeedbackForm {...pdpFeedbackForm} />
    </Layout>
  )
}
