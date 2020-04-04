/*
 * action types
 */

export const REGIONAL_POP = 'REGIONAL_POP'
export const HOSPITAL_MARKET = 'HOSPITAL_MARKET'
export const CURRENT_PATIENTS = 'CURR_PATIENTS'
export const DOUBLING_TIME = 'DOUBLING_TIME'
export const SOCIAL_DISTANCING = 'SOCIAL_DISTANCING'
export const RESET_PARAMS = 'RESET_PARAMS'

/*
 * action creators
 */

export function setRegionalPopulation(value) {
  return { type: REGIONAL_POP, value }
}

export function setHospitalMarket(value) {
  return { type: HOSPITAL_MARKET, value }
}

export function setCurrentPatients(value) {
  return { type: CURRENT_PATIENTS, value }
}

export function setDoublingTime(value) {
  return { type: DOUBLING_TIME, value }
}

export function setSocialDistancing(value) {
  return { type: SOCIAL_DISTANCING, value }
}

export function resetParams(value) {
  return { type: RESET_PARAMS, value}
}