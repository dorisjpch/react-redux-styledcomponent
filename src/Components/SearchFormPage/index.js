import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../Containers/SearchForm';
import { withRouter } from 'react-router';

function SearchFormPage () {
  return (
    <div>
      <Link
        to="/" tabIndex="-1">
      </Link>
      <SearchBar/>
    </div>
  );
}

export default withRouter(SearchFormPage);
