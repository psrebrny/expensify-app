import React from 'react';
import { connect } from 'react-redux';
import { ExpenseListItem } from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseListClass = (props) => {
  
  const getExpenses = (expenses) => {
    return expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense}/>;
    });
  };
  
  return (
      <div>
        {
          props.expenses.length === 0 ? (
              <p>No expenses</p>
          ) : (
              getExpenses(props.expenses)
          )
        }
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

const ExpenseList = connect(mapStateToProps)(ExpenseListClass);

export { ExpenseList, ExpenseListClass };

