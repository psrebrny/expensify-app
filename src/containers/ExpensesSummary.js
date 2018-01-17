import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

class ExpensesSummaryClass extends Component {
  
  render() {
    this.expenseWord = this.props.expensesCount <= 1 ? 'expense' : 'expenses';
    this.formattedExpensesTotal = numeral(this.props.expensesTotal).format('$0,0.00');
    
    return (
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">
              Viewing&nbsp;
              <span>{this.props.expensesCount}</span>&nbsp;
              {this.expenseWord} totalling&nbsp;
              <span>{this.formattedExpensesTotal}</span>
            </h1>
            <div className="page-header__actions">
              <Link className="button" to="/create">Add Expense</Link>
            </div>
          </div>
        </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

const ExpensesSummary = connect(mapStateToProps, null)(ExpensesSummaryClass);

export { ExpensesSummaryClass, ExpensesSummary };