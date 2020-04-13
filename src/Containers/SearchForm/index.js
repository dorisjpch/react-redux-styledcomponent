import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SearchForm } from './search';

import {
  getAPIData,
  getSelectQuery
} from './actions';

import {
  selectApiData,
  selectApiDataError
} from './selectors';

import '../../styles/global.scss';

export class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.handleInputSearchSubmit = this.handleInputSearchSubmit.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.state = {
      searchQuery: ""
    };
  }

  handleInputSearchSubmit = (event) => {
    const { actions } = this.props;
    event.preventDefault();
    const searchQuery = this.state.searchQuery;
    actions.getSelectQuery(searchQuery);
    actions.getAPIData();
    this.props.history.push(`/`);
  }

  handleSearchInputChange = (event) => {
    const searchQuery = event.target.value;
    this.setState({searchQuery: searchQuery});
  }

  render() {
    return (
        <form
          onSubmit={this.handleInputSearchSubmit}
          role="search"
        >
        <SearchForm>
          <SearchForm.Input
              onChange={this.handleSearchInputChange}
              placeholder= "busqueda"
              type="text"
              autoComplete="off"
          />
          <SearchForm.Button
             type="submit"
          >Search</SearchForm.Button>
        </SearchForm>
        </form>
    )
  }
};

SearchBar.propTypes = {
  actions: PropTypes.object.isRequired,
  apiData: PropTypes.array,
  apiDataError: PropTypes.object
};

const mapStateToProps = (state) => ({
  apiData: selectApiData(state),
  apiDataError: selectApiDataError(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getAPIData,
    getSelectQuery
  }, dispatch)
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SearchBar);
