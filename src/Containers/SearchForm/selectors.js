export const selectSearchFormContainer = (state) => state.containers.SearchFormReducer;

// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
export const selectApiData = (state) => selectSearchFormContainer(state).get('apiData');
export const selectApiDataError = (state) => selectSearchFormContainer(state).get('apiDataError');
export const selectQuery = (state) => selectSearchFormContainer(state).get('query');
