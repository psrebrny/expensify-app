import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItemClass = (props) => {
  let {description, amount, createdAt, id} = props;
  return (
      <Link className="list-item" to={`/edit/${id}`}>
        <div>
          <h3 className="list-item__title">{description}</h3>
          <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do YYYY')}</span>
        </div>
        <div className="list-item__right-align">
          <h3 className="list-item__data">{numeral(amount).format('$0,0.00')}</h3>
          <button className="button button--secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    props.removeExpense(id);
                  }}>Remove
          </button>
        </div>
      </Link>
  
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeExpense
  }, dispatch);
};

export const ExpenseListItem = connect(null, mapDispatchToProps)(ExpenseListItemClass);