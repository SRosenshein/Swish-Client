import React from 'react';
import ReactDOM from 'react-dom';

//Import Components
import App from './components/App';

//Import react router deps
import { Route, IndexRoute, Router } from 'react-router';
import { Provider } from 'react-redux';
import store, {history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App} />
		</Router>
	</Provider>
);

ReactDOM.render(router, document.getElementById('app'));

