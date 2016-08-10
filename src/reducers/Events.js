import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILURE
} from '../constants/Event'

const initialState = {
	events: [],
  error: ''
}

export default function events(state = initialState, action) {

  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return { ...state }

    case GET_EVENTS_SUCCESS:
      return { ...state, events: action.payload }

    case GET_EVENTS_FAILURE:
      return { ...state, error: action.payload }

    default:
      return state;
  }

}

