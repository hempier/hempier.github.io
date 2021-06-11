import React from "react"
import HeroSlider from "../components/hero-slider/hero-slider"
import InformationSection from "../components/information-section/information-section"
import ProductsSlider from "../components/products-slider/products-slider"
import ServicesTrusted from "../components/services-trusted/services-trusted"
import ProjectsSlider from "../components/projects-slider/projects-slider"
import PartnersAboutUsSlider from "../components/partners-about-us-slider/partners-about-us-slider"

import Layout from "../components/layout"

import {
  findByInternalName,
  ComponentInternalName,
} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

export default ({ pageContext: { page, allLocales } }) => {
  // const localizedPage = filterPageLocale(page, locale)
  // const localizedPage = page

  // console.log(JSON.stringify(page, null, 4))


  const heroSliderItems =
    findByInternalName(page, ComponentInternalName.HeroSlider)
      ?.content || []
  const infoSectionAboutUs = findByInternalName(
    page,
    ComponentInternalName.InfoSectionAboutUs
  )
  const infoSectionHempcrete = findByInternalName(
    page,
    ComponentInternalName.InfoSectionHempcrete
  )
  const productsSlider = findByInternalName(
    page,
    ComponentInternalName.ProductSlider
  )
  const servicesTrusted = findByInternalName(
    page,
    ComponentInternalName.ServicesTrusted
  )
  const projectsSlider = findByInternalName(
    page,
    ComponentInternalName.ProjectsSlider
  )
  const partnersAboutUsSlider = findByInternalName(
    page,
    ComponentInternalName.PartnersAboutUsSlider
  )

  return (
    <Layout  allLocales={allLocales} currentLocale={page.node_locale}>
      <HeroSlider items={heroSliderItems} />
      <InformationSection {...infoSectionAboutUs} />
      <PartnersAboutUsSlider component={partnersAboutUsSlider} />
      <InformationSection {...infoSectionHempcrete} />
      <ProductsSlider component={productsSlider} />
      <ServicesTrusted component={servicesTrusted} currentLocale={page.node_locale} />
      <ProjectsSlider component={projectsSlider}/>
    </Layout>
  )
}
