import { fork, all } from 'redux-saga/effects';
import SearchFormSagas from '../src/Containers/SearchForm/sagas'

const sagas = [
  SearchFormSagas
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));
  yield all([...globalSagasForks]);
}

export default globalSagas;
