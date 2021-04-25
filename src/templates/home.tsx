import React from "react"
import HeroSlider from "../components/hero-slider/hero-slider"
import InformationSection from "../components/information-section/information-section"
import ProductsSlider from "../components/products-slider/products-slider"
// import Categories from '../components/Categories'
// import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import {findByInternalName, ComponentInternalName} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

export default ({pageContext: {page}}) => {
  const localizedPage = filterPageLocale(page, locale)

  const heroSliderItems = findByInternalName(localizedPage, ComponentInternalName.HeroSlider)?.content || []
  const infoSectionAboutUs = findByInternalName(localizedPage, ComponentInternalName.InfoSectionAboutUs)
  const infoSectionHempcrete = findByInternalName(localizedPage, ComponentInternalName.InfoSectionHempcrete)
  const productsSlider = findByInternalName(localizedPage, ComponentInternalName.ProductSlider)

  return (
    <Layout>
      <HeroSlider items={heroSliderItems}/>
      {console.log(JSON.stringify(productsSlider, null, 4))}
      <InformationSection {...infoSectionAboutUs}/>
      <InformationSection {...infoSectionHempcrete}/>
      <ProductsSlider component={productsSlider}/>

      <div>{page.title}</div>
    </Layout>
  )
}
