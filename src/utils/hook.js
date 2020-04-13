
import _ from 'lodash';
import { useSelector } from 'react-redux';

export const useFilterData = (selectedFields, callback, defaultValue = {}) => {
    const data = useSelector((state) => {
      if (Array.isArray(selectedFields)) {
        return selectedFields.map((field) => _.get(state.containers.SearchFormReducer.get('apiData'), field, defaultValue));
      }
      return _.get(state.containers.SearchFormReducer.get('apiData'), selectedFields, {});
    }, _.isObject);

    if (callback) {
      return callback(data);
    }

    return data;
};