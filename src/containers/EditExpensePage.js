import React, { Component } from 'react';
import { ExpenseForm } from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editExpense, removeExpense } from '../actions/expenses';

class EditExpensePageClass extends Component {
  
  constructor(props) {
    super(...arguments);
  }
  
  render() {
    
    return (
        <div>
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Edit Expense</h1>
            </div>
          </div>
          <div className="content-container">
            <ExpenseForm
                expense={this.props.expense}
                onSubmit={(expense) => {
                  this.props.editExpense(this.props.expense.id, expense);
                  this.props.history.push('/');
                }}/>
            <button className="button button--secondary" onClick={
              () => {
                this.props.removeExpense(this.props.expense.id);
                this.props.history.push('/');
              }}
            >Remove Expense
            </button>
          </div>
        </div>
    );
  }
  
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editExpense,
    removeExpense
  }, dispatch);
};

const EditExpensePage = connect(mapStateToProps, mapDispatchToProps)(EditExpensePageClass);

export { EditExpensePage, EditExpensePageClass };