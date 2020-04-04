import { combineReducers } from 'redux'
import {
  REGIONAL_POP,
  HOSPITAL_MARKET,
  CURRENT_PATIENTS,
  DOUBLING_TIME,
  SOCIAL_DISTANCING,
  RESET_PARAMS
} from './actions'

const initialState = {
  regionalPopulation: 3600000,
  hospitalMarket: 15,
  currentPatients: 69,
  doublingTime: 4,
  socialDistancing: 30
}

function regionalPopulation(state = initialState.regionalPopulation, action) {
  switch (action.type) {
    case REGIONAL_POP:
      return action.value
    default:
      return state
  }
}

function hospitalMarket(state = initialState.hospitalMarket, action) {
  switch (action.type) {
    case HOSPITAL_MARKET:
      return action.value
    default:
      return state
  }
}

function currentPatients(state = initialState.currentPatients, action) {
  switch (action.type) {
    case CURRENT_PATIENTS:
      return action.value
    default:
      return state
  }
}

function doublingTime(state = initialState.doublingTime, action) {
  switch (action.type) {
    case DOUBLING_TIME:
      return action.value
    default:
      return state
  }
}

function socialDistancing(state = initialState.socialDistancing, action) {
  switch (action.type) {
    case SOCIAL_DISTANCING:
      return action.value
    default:
      return state
  }
}

function resetParams(state = initialState, action) {
  switch (action.type) {
    case RESET_PARAMS:
      return Object.assign({}, initialState);
    default:
      return state
  }
}

const chimeApp = combineReducers({
  regionalPopulation,
  hospitalMarket,
  currentPatients,
  doublingTime,
  socialDistancing,
  resetParams
});

export default chimeApp;