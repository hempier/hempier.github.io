export enum ComponentInternalName {
  HeroSlider = "hero slider",
}

export function findByInternalName(page: any, name: ComponentInternalName) {
 return page.content.find(x => x.internalName === name)
}