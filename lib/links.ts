export const STRIPE_DRILL_LINK = 'https://buy.stripe.com/28EbJ22KVa67dYUg83a3u00'
export const CALENDLY_DRILL_LINK = 'https://calendly.com/supipagg/45min'

export const DRILL_PRICE_MXN = 1500
export const DRILL_PRICE_LABEL = '$1,500 MXN'
export const DRILL_NAME = 'Drill MANZANA'
export const DRILL_TAGLINE = 'Sesión + Case Brief'
export const DRILL_DURATION = '45 min vía Google Meet'

export function isPaymentLive(): boolean {
  return STRIPE_DRILL_LINK.length > 0
}

export function isBookingLive(): boolean {
  return CALENDLY_DRILL_LINK.length > 0
}
