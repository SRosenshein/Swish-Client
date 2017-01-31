import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courtsReducer from './courtsReducer';

const rootReducer = combineReducers({courtsReducer, routing: routerReducer});

export default rootReducer;