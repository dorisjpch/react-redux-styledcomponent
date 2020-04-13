import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import SearchFormPage from './SearchFormPage/index';

const App = ({ routes }) => {
  return (
    <div>
        <main>
          <SearchFormPage />
        </main>
          {routes}
    </div>
  );
};

App.propTypes = {
  routes: PropTypes.object.isRequired
};

export default compose(
  connect(),withRouter)(App);

