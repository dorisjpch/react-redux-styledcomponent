import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import SearchFormReducer from './Containers/SearchForm/reducer'

const containersReducer = {
  containers: combineReducers({
    SearchFormReducer
  })
};

const createGlobalReducer = (history) => (
  combineReducers({
    ...containersReducer,
    router: connectRouter(history)
  })
);

export default createGlobalReducer;
