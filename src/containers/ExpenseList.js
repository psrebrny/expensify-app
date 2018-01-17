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
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
          {
            props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                  <span>No expenses </span>
                </div>
            
            ) : (
                getExpenses(props.expenses)
            )
          }
        </div>
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

