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

export default ({ pageContext: { page } }) => {
  // const localizedPage = filterPageLocale(page, locale)
  const localizedPage = page

  const pdpProductDescrition = findByInternalName(
    localizedPage,
    ComponentInternalName.PdpFifthElementDescription
  )
  const pdpUsagesTrusted = findByInternalName(
    localizedPage,
    ComponentInternalName.PdpFifthElementUsages
  )
  const pdpInformationAdv = findByInternalName(
    localizedPage,
    ComponentInternalName.PlpInformationAdvertisement
  )
  const pdpTechInfo = findByInternalName(
    localizedPage,
    ComponentInternalName.PdpFifthElementTechInfo
  )
  const pdpFeedbackForm = findByInternalName(
    localizedPage,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout>
      <ProductDescription {...pdpProductDescrition} />
      <ProductUsagesTrusted items={pdpUsagesTrusted} />
      <Advertisement {...pdpInformationAdv} />
      <ProductTechInfo {...pdpTechInfo} />
      <FeedbackForm {...pdpFeedbackForm} />
    </Layout>
  )
}
