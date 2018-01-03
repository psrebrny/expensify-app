import React, { Component } from 'react';
import { ExpenseForm } from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editExpense, removeExpense } from '../actions/expenses';

class EditExpensePageClass extends Component {
  
  constructor(props) {
    super(...arguments);
    if (!props.expense) {
      props.history.push('/');
    }
  }
  
  render() {
    
    return (
        <div>
          <h1>Edit Expense</h1>
          <ExpenseForm
              expense={this.props.expense}
              onSubmit={(expense) => {
                this.props.editExpense(this.props.expense.id, expense);
                this.props.history.push('/');
              }}/>
          <button onClick={
            () => {
              this.props.removeExpense(this.props.expense.id);
              this.props.history.push('/');
            }}
          >Remove
          </button>
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