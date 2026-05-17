export const STRIPE_DRILL_LINK = ''
export const CALENDLY_DRILL_LINK = ''

export const DRILL_PRICE_MXN = 1500
export const DRILL_PRICE_LABEL = '$1,500 MXN'
export const DRILL_NAME = 'Drill MANZANA'
export const DRILL_TAGLINE = 'Sesión + Case Brief'
export const DRILL_DURATION = '40 min vía Google Meet'

export function isPaymentLive(): boolean {
  return STRIPE_DRILL_LINK.length > 0
}

export function isBookingLive(): boolean {
  return CALENDLY_DRILL_LINK.length > 0
}
