import { takeLatest, call, put } from 'redux-saga/effects';

import { getAPIDataLoaded, getAPIDataError } from './actions';

import {
  SELECTED_QUERY
} from './constants';

import BackendService from '../../services/BackendService';

function* getApiData(action) {
  const { query } = action;

  try {
    const { result, error } = yield call(BackendService.getDataSearchQuery, query);

    if (!result || error) {

      return yield put(getAPIDataError(error));
    }
    return yield put(getAPIDataLoaded(result));

  } catch (error) {

    return yield put(getAPIDataError(error));
  }
}

function* apiData() {
  yield takeLatest(SELECTED_QUERY, getApiData);
}

export default apiData;
