export enum ComponentInternalName {
  HeroSlider = "hero slider",
  InfoSectionAboutUs = "info-section-about-us",
  InfoSectionHempcrete = "info-section-hempcrete",
  ProductSlider = "products-slider",
  PartnersAboutUsSlider = "partners-about-us",
  AboutPageTopBanner = "about-page-top-banner",
  AboutPageAwards = "about-us-awards",
  ProjectsSlider = "projects-slider",
  AboutPageText = "about-page-text",
  HempcreteTopBanner = "hempcrete-page-top-banner",
  HempcretePageText = "hempcrete-page-text",
  HempcreteAdvantagesTrusted = "hempcrete-advantages-trusted",
  HempcreteBenefitsTrusted = "hempcrete-environmental-benefits",
  HempcreteAplicationAreas = "hempcrete-aplication-areas",
  FeedbackForm = "feedback-form",
  PlpTopBanner = "plp-top-banner",
  ProductsList = "products-list",
  PlpInformationAdvertisement = "plp-information-advertisement",

  PdpFifthElementDescription = "product-description",
  PdpFifthElementUsages = "product-usages",
  PdpFifthElementTechInfo = "technical-information",

  ContactTopBanner = "contact-top-banner",
  ContactAddress = "contact-address",
  ContactFeedbackForm = "feedback-form",
  
  ProjectsListTopBanner = "projects-list-top-banner",
  ProjectsList = "projects-list",
  ProjectTechTopBanner = "project-top-banner",
  ProjectTechDetails = "project-details",
  ProjectGallery = "project-gallery",
  ProjectText = "project-text",

  ServicesTrusted = "services-trusted",
  ServicesListTopBanner = "services-top-banner",
  ServicesList = "services-list",
  ServiceTopBanner = "service-top-banner",
  ServiceAplicationAreas = "service-aplication-areas"
}

export function findByInternalName(page: any, name: ComponentInternalName) {
 return page.content.find(x => x.internalName === name)
}