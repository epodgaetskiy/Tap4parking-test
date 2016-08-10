import {
  GET_EVENTID_REQUEST,
  GET_EVENTID_SUCCESS,
  GET_EVENTID_FAILURE
} from '../constants/Event'

var request = require('superagent-bluebird-promise');
var urlId = 'http://api.itboost.org/app_dev.php/api/community.get?community_id=';

export function getEventFull(id) {

  return (dispatch) => {
    dispatch({
      type: GET_EVENTID_REQUEST,
      idFull: id
    })

    request.get(urlId+id)
      .then(function(res) {
        dispatch({
          type: GET_EVENTID_SUCCESS,
          payload: res.body.response
        })
      }, function(error) {
        dispatch({
          type: GET_EVENTID_FAILURE,
          error: error
        })
      });

  }

}