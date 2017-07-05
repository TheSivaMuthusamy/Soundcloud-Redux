import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Stream from './components/Stream';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import SC from 'soundcloud';
import {CLIENT_ID, REDIRECT_URI} from './constants/auth';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import App from './components/App';
import Callback from './components/Callback';

SC.initialize({client_id: CLIENT_ID, redirect_uri: REDIRECT_URI});

const store = configureStore();


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Stream}/>
				<Route path="/" component={Stream} />
				<Route path="/callback" component={Callback} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);

module.hot.accept();