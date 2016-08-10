import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILURE
} from '../constants/Event'

var request = require('superagent-bluebird-promise');

export function getEvents() {

  return (dispatch) => {
    dispatch({
      type: GET_EVENTS_REQUEST
    })

    request.get('http://api.itboost.org/app_dev.php/api/community.getAll')
      .then(function(res) {
        dispatch({
          type: GET_EVENTS_SUCCESS,
          payload: res.body.response
        })
      }, function(error) {
        dispatch({
          type: GET_EVENTS_FAILURE,
          error: error
        })
      });

  }

}
