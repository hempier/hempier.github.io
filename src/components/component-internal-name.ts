export enum ComponentInternalName {
  HeroSlider = "hero slider",
  InfoSectionAboutUs = "info-section-about-us",
  InfoSectionHempcrete = "info-section-hempcrete",
  ProductSlider = "products-slider",
  PartnersAboutUsSlider = "partners-about-us",
  AboutPageTopBanner = "about-page-top-banner",
  AboutPageAwards = "about-us-awards",
}

export function findByInternalName(page: any, name: ComponentInternalName) {
 return page.content.find(x => x.internalName === name)
}