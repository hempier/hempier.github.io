import React from "react"

import Layout from "../components/layout"
import TopPageBanner from "../components/top-banner/top-banner"
import ProductsList from "../components/products-list/products-list"
import Advertisement from "../components/advertisement/advertisement"
import FeedbackForm from "../components/feedback-form/feedback-form"

import {
  findByInternalName,
  ComponentInternalName,
} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

export default ({ pageContext: { page, allLocales } }) => {
  // const localizedPage = filterPageLocale(page, locale)
  const localizedPage = page

  const plpPageTopBanner = findByInternalName(
    localizedPage,
    ComponentInternalName.PlpTopBanner
  )
  const productsList = findByInternalName(
    localizedPage,
    ComponentInternalName.ProductsList
  )
  const plpInformationAdv = findByInternalName(
    localizedPage,
    ComponentInternalName.PlpInformationAdvertisement
  )
  const plpFeedbackForm = findByInternalName(
    localizedPage,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout  allLocales={allLocales} currentLocale={page.node_locale}>
      <TopPageBanner {...plpPageTopBanner} />
      <ProductsList component={productsList} />
      <Advertisement {...plpInformationAdv} />
      <FeedbackForm {...plpFeedbackForm} />
    </Layout>
  )
}
