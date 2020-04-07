import { combineReducers } from 'redux'
import {
  REGIONAL_POP,
  HOSPITAL_MARKET,
  CURRENT_PATIENTS,
  DOUBLING_TIME,
  SOCIAL_DISTANCING,
  INFECTED,
  RESET_PARAMS
} from './actions'

const initialState = {
  regionalPopulation: 3600000,
  hospitalMarket: 15,
  currentPatients: 69,
  doublingTime: 4,
  socialDistancing: 30,
  infected: 18400
}

function regionalPopulation(state = initialState.regionalPopulation, {type, value}) {
  if (type === REGIONAL_POP) {
    return parseFloat(value);
  }
  return state;
}

function hospitalMarket(state = initialState.hospitalMarket, {type, value}) {
  switch (type) {
    case HOSPITAL_MARKET:
      return parseFloat(value);
    default:
      return state;
  }
}

function currentPatients(state = initialState.currentPatients, {type, value}) {
  switch (type) {
    case CURRENT_PATIENTS:
      return parseFloat(value);
    default:
      return state;
  }
}

function doublingTime(state = initialState.doublingTime, {type, value}) {
  switch (type) {
    case DOUBLING_TIME:
      return parseFloat(value);
    default:
      return state;
  }
}

function socialDistancing(state = initialState.socialDistancing, {type, value}) {
  switch (type) {
    case SOCIAL_DISTANCING:
      return parseFloat(value);
    default:
      return state;
  }
}

function infected(state = initialState.infected, {type, value}) {
  if (type === INFECTED) {
    return Math.ceil(value);
  }
  return state;
}

function rootReducer(state, action) {
  if (action.type === RESET_PARAMS) {
    state = initialState;
  }
  return allReducers(state, action);
}

const allReducers = combineReducers({
  regionalPopulation,
  hospitalMarket,
  currentPatients,
  doublingTime,
  socialDistancing,
  infected
});

export default rootReducer;