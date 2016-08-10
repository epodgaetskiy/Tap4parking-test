import {
  GET_EVENTID_REQUEST,
  GET_EVENTID_SUCCESS,
  GET_EVENTID_FAILURE
} from '../constants/Event'

const initialState = {
	loaded: false,
  idFull: 0,
  eventFull: {},
  error: ''
}

export default function eventFull(state = initialState, action) {

  switch (action.type) {
    case GET_EVENTID_REQUEST:
      return { ...state }

    case GET_EVENTID_SUCCESS:
      return { ...state, eventFull: action.payload, loaded: true }

    case GET_EVENTID_FAILURE:
      return { ...state, error: action.payload}

    default:
      return state;
  }

}