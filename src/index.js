import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {App} from './containers/App' 

import EventList from './components/EventList'
import Event from './components/Event'


import './styles/main.css'

const store = configureStore()

render(
  <Provider store={store}>
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={EventList} />
			<Route path="/:eventId" component={Event} />
		</Route>
	</Router>
  </Provider>,
  document.getElementById('root')
)
