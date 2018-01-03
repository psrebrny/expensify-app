import React, { Component } from 'react';
import { ExpenseForm } from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addExpense } from '../actions/expenses';


class AddExpensePageClass extends Component {
  
  render() {
    return (
        <div>
          <h1>Add Expense</h1>
          <ExpenseForm
              onSubmit={(expense) => {
                this.props.addExpense(expense);
                this.props.history.push('/');
              }}/>
        </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addExpense
  }, dispatch);
};

const AddExpensePage = connect(null, mapDispatchToProps)(AddExpensePageClass);

export { AddExpensePage, AddExpensePageClass };