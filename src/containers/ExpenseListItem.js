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
      <div>
        <Link to={`/edit/${id}`}>
          <h3>{description}</h3>
          <p>
            {numeral(amount).format('$0,0.00')} - {moment(createdAt).format('MMMM Do YYYY')}
          </p>
        </Link>
        <button onClick={() => props.removeExpense(id)}>Remove</button>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeExpense
  }, dispatch);
};

export const ExpenseListItem = connect(null, mapDispatchToProps)(ExpenseListItemClass);