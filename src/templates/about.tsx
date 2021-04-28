import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PartnersAboutUsSlider from "../components/partners-about-us-slider/partners-about-us-slider"
import TopPageBanner from "../components/top-banner/top-banner"
import AwardsTrusted from "../components/awards-trusted/awards-trusted"

import {
  findByInternalName,
  ComponentInternalName,
} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

export default ({ pageContext: { page } }) => {
  const localizedPage = filterPageLocale(page, locale)

  const partnersAboutUsSlider = findByInternalName(
    localizedPage,
    ComponentInternalName.PartnersAboutUsSlider
  )
  const aboutPageTopBanner = findByInternalName(
    localizedPage,
    ComponentInternalName.AboutPageTopBanner
  )
  const aboutPageAwards = findByInternalName(
    localizedPage,
    ComponentInternalName.AboutPageAwards
  )

  return (
    <Layout>
      <TopPageBanner {...aboutPageTopBanner} />
      <AwardsTrusted items={aboutPageAwards}/>
      <PartnersAboutUsSlider component={partnersAboutUsSlider} />
    </Layout>
  )
}
