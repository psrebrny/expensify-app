import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

export const ExpenseListItemClass = (props) => {
  let {description, amount, createdAt, id} = props;
  return (
      <div>
        <Link to={`/edit/${id}`}>
          <h3>{description}</h3>
          <p>{amount} - {createdAt}</p>
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