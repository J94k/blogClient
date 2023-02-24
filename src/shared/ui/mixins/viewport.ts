export enum RESOLUTION {
  MOBILE = 580,
  MOBILE_MD = 768,
  TABLET = 991,
  DESKTOP = 992,
}

export enum VIEWPORT {
  MOBILE = `(max-width: ${RESOLUTION.MOBILE}px)`,
  MOBILE_MD = `(max-width: ${RESOLUTION.MOBILE_MD}px)`,
  TABLET = `(max-width: ${RESOLUTION.TABLET}px)`,
  DESKTOP = `(min-width: ${RESOLUTION.DESKTOP}px)`,
}
