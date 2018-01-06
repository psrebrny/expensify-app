import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

class ExpensesSummaryClass extends Component {
  
  render() {
    this.expenseWord = this.props.expensesCount <= 1 ? 'expense' : 'expenses';
    this.formattedExpensesTotal = numeral(this.props.expensesTotal).format('$0,0.00');
    
    return (
        <div>
          <h1>Viewing {this.props.expensesCount} {this.expenseWord} totalling {this.formattedExpensesTotal}</h1>
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