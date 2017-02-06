import React from 'react';
import { render } from 'react-dom';

//Import Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import SwishContainer from './components/SwishContainer';
import NewCourt from './components/NewCourt';

//Import react router deps
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { configStore } from './store';

const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="about" component={About} />
				<Route path="swish" component={SwishContainer} />
				<Route path="swish/new" component={NewCourt} />
			</Route>
		</Router>
	</Provider>
);

render(router, document.getElementById('app'));

