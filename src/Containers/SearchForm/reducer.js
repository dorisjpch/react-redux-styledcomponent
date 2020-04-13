import { fromJS } from 'immutable';

import {
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
  SELECTED_QUERY
} from './constants';

const initialState = fromJS({
  apiData: null,
  apiDataLoading: null,
  apiDataLoaded: null,
  apiDataError: null,
  title: ''
});

const SearchFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_QUERY:
      return state
        .set('query', action.query);
    case GET_API_DATA:
      return state
        .set('apiDataLoading', true)
        .set('apiDataError', null);
    case GET_API_DATA_LOADED:
      return state
        .set('apiData', action.data)
        .set('apiDataLoading', false)
        .set('apiDataLoaded', true)
        .set('apiDataError', null);
    case GET_API_DATA_ERROR:
      return state
        .set('apiDataLoading', false)
        .set('apiDataLoaded', false)
        .set('apiDataError', action.error);
    case 'DELETE_RECORD':
      return state
        .set('apiData', action.data)
        .set('apiDataLoading', false)
        .set('apiDataLoaded', true)
        .set('apiDataError', null)
        .set('title', action.title);
    default:
      return state;
  }
};

export default SearchFormReducer;
