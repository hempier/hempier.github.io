import React from "react"
import HeroSlider from "../components/hero-slider/hero-slider"
import InformationSection from "../components/information-section/information-section"
import ProductsSlider from "../components/products-slider/products-slider"
import PartnersAboutUsSlider from "../components/partners-about-us-slider/partners-about-us-slider"

import Layout from "../components/layout"

import {
  findByInternalName,
  ComponentInternalName,
} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

export default ({ pageContext: { page } }) => {
  // const localizedPage = filterPageLocale(page, locale)
  const localizedPage = page

  console.log(JSON.stringify(page, null, 4))


  const heroSliderItems =
    findByInternalName(localizedPage, ComponentInternalName.HeroSlider)
      ?.content || []
  const infoSectionAboutUs = findByInternalName(
    localizedPage,
    ComponentInternalName.InfoSectionAboutUs
  )
  const infoSectionHempcrete = findByInternalName(
    localizedPage,
    ComponentInternalName.InfoSectionHempcrete
  )
  const productsSlider = findByInternalName(
    localizedPage,
    ComponentInternalName.ProductSlider
  )
  const partnersAboutUsSlider = findByInternalName(
    localizedPage,
    ComponentInternalName.PartnersAboutUsSlider
  )

  return (
    <Layout>
      <HeroSlider items={heroSliderItems} />
      <InformationSection {...infoSectionAboutUs} />
      <PartnersAboutUsSlider component={partnersAboutUsSlider} />
      <InformationSection {...infoSectionHempcrete} />
      <ProductsSlider component={productsSlider} />

      <div>{page.title}</div>
    </Layout>
  )
}
