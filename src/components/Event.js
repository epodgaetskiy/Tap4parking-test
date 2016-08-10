import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'

import EventList from '../components/EventList'
import CreatedBy from '../components/CreatedBy'
import * as eventFullActions from '../actions/EventFullActions'

export default class Event extends Component {

  componentWillReceiveProps(nextProps) {
    if ((nextProps.params.eventId) !== (this.props.params.eventId)) {
      this.props.eventFullActions.getEventFull(nextProps.params.eventId)
    }
  }

  componentDidMount() {
    this.props.eventFullActions.getEventFull(this.props.params.eventId)
  }

  render() {
    let eventFull = this.props.eventFull.eventFull
    let templateFull

    if (eventFull.thread_id) {
      templateFull = (
        <ul>
          <li>{eventFull.thread_id}</li>
          <li>{eventFull.id}</li>
          <CreatedBy data={eventFull.created_by} />
          <li>{eventFull.name}</li>
          <li>{eventFull.description}</li>
          <li>{eventFull.created_at}</li>
          <li>{eventFull.event_date}</li>
        </ul>
      )
    } else {
      templateFull = <p>Loading...</p>
    }

    return (
      <div>
        <EventList />
        <p>Полный вид выбранного мероприятия</p>
        {templateFull}
      </div>
    )
  }
}

Event.propTypes = {
  eventFull: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    eventFull: state.eventFull
  }
}

function mapDispatchToProps(dispatch) {
  return {
    eventFullActions: bindActionCreators(eventFullActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Event))