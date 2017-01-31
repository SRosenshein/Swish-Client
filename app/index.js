import React from 'react';
import ReactDOM from 'react-dom';

//Import Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import SwishContainer from './components/SwishContainer';

//Import react router deps
import { Route, IndexRoute, Router } from 'react-router';
import { Provider } from 'react-redux';
import store, {history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="about" component={About} />
				<Route path="swish" component={SwishContainer} />
			</Route>
		</Router>
	</Provider>
);

ReactDOM.render(router, document.getElementById('app'));

