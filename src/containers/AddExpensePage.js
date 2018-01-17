import React, { Component } from 'react';
import { ExpenseForm } from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addExpense } from '../actions/expenses';


class AddExpensePageClass extends Component {
  
  render() {
    return (
        <div>
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Add Expense</h1>
            </div>
          </div>
          <div className="content-container">
            <ExpenseForm
                onSubmit={(expense) => {
                  this.props.addExpense(expense);
                  this.props.history.push('/');
                }}/>
          </div>
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