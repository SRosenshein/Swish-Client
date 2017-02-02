import { call, put, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import * as API_helper from '../utils/API_helper';
import * as actions from '../actions/index';
import * as types from '../actions/types';

//
// Worker Sagas
//
export function* getAllCourts(action) {
	try {
		const courtsList = yield call(API_helper.getAllCourts);
		yield put(actions.fetchAllCourtsSuccess(courtsList));
	} catch (e) {
		yield put(actions.fetchAllCourtsFailure(e));
	}
}


//
// Watcher Sagas
//
export function* watchFetchAllCourts() {
	yield takeLatest(types.FETCH_ALL_COURTS, getAllCourts)
}

export default function* rootSaga() {
	yield [
		fork(watchFetchAllCourts)
	]
}