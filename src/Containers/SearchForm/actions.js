import {
  SELECTED_QUERY,
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
  DELETE_RECORD
} from './constants';

export const getSelectQuery = (query) => ({
  type: SELECTED_QUERY,
  query
});

export const getAPIData = () => ({
  type: GET_API_DATA
});

export const getAPIDataLoaded = (data) => ({
  type: GET_API_DATA_LOADED,
  data
});

export const getAPIDataError = (error) => ({
  type: GET_API_DATA_ERROR,
  error
});

export const getDeleteRecord = (data) => ({
  type: DELETE_RECORD,
  data
});