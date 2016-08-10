import { combineReducers } from 'redux'
import events from './Events'
import eventFull from './EventFull'

export default combineReducers({
  events,
  eventFull
})

