import { initialState } from './initialState';
import * as types from '../actions/types';

function courtsReducer(state = initialState.courts, action) {
	console.log(action.type);
	switch (action.type) {
		case types.FETCH_ALL_COURTS_SUCCESS:
			return { ...state, courtsList: action.payload.data};
		case types.FETCH_ALL_COURTS_FAILURE:
			return { ...state, error: action.payload.data };
		case types.SELECT_COURT:
			console.log(action);
			return { ...state, currentCourt: action.payload };
		default: 
			return state;
	}
}

export default courtsReducer;