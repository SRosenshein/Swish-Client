import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

export const configStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	return {
		...createStore(rootReducer,
			applyMiddleware(sagaMiddleware)),
		runSaga: sagaMiddleware.run(rootSaga)
	};
};

