import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card } from '../Card/index';

import {
  selectApiData,

 } from '../SearchForm/selectors';

import {
  getAPIDataLoaded,
  getDeleteRecord
} from '../SearchForm/actions';

import '../../styles/global.scss';


const CardList = (props) => {
 
let items = props.apiData;

const deletedCard = (title) => {
  let newData = props.apiData.filter(rec => rec.title !== title);
   props.actions.getAPIDataLoaded(newData);
  props.actions.getDeleteRecord(title);

}

  let search_result;
  let searchResultItems;
  if (items) {
    searchResultItems= items.map((item, index) => (
      <Card key={`${index}`}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>height: {item.height}</Card.Text>
          <Card.Text>Gender: {item.gender}</Card.Text>
          <Card.Button onClick={()=> deletedCard(item.title)}>Eliminar</Card.Button>
        </Card.Body>
      </Card>
    ))
  }

  search_result =
    <ol>{ searchResultItems }</ol>

  return (
    <main>
      { search_result }
    </main>
  );

};

CardList.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  apiData: selectApiData(state) || []
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getAPIDataLoaded,
    getDeleteRecord
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
