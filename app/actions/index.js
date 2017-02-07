import * as types from './types';

export function fetchAllCourts() {
	return {
		type: types.FETCH_ALL_COURTS
	};
}

export function fetchAllCourtsSuccess(courtsList) {
	return {
		type: types.FETCH_ALL_COURTS_SUCCESS,
		payload: courtsList
	};
}

export function fetchAllCourtsFailure(error) {
	return {
		type: types.FETCH_ALL_COURTS_FAILURE,
		payload: error
	};
}

export function selectCourt(court) {
	return {
		type: types.SELECT_COURT,
		payload: court
	};
}

export function createCourt(props) {
	return {
		type: types.CREATE_COURT
	};
}