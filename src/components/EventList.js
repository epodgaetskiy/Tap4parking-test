import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as eventActions from '../actions/EventActions'
 
export default class EventList extends Component {

  componentDidMount() {
    this.props.eventActions.getEvents(this.props.events.id)
  }

  render() {

    const { events } = this.props.events

    let templateList

    templateList = events.map(function(item) {

      let goId = '/' + item.id

      return ( 
        <li key={item.id}><Link to={goId}>{item.name}</Link></li>	
      )

		})

    return <div>
      <ol className="listEvent">
				{templateList}
      </ol>
    </div>
  }
}

EventList.propTypes = {
  events: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    events: state.events
  }
}

function mapDispatchToProps(dispatch) {
  return {
    eventActions: bindActionCreators(eventActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)