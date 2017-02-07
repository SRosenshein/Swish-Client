import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courtsReducer from './courtsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	//users: usersReducer
	form: formReducer,
	courts: courtsReducer, 
	routing: routerReducer
});

export default rootReducer;