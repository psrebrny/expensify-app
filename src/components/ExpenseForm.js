import 'react-dates/initialize';
import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends Component {
  
  constructor(props) {
    super(...arguments);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? props.expense.amount : 0,
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: null
    };
  }
  
  
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({description});
  };
  
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState({amount});
    }
    
  };
  
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState({note});
  };
  
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({createdAt});
    }
  };
  
  onFocusChange = ({focused}) => {
    this.setState({calendarFocused: focused});
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    
    if (!this.state.description || !(this.state.amount || this.state.amount === 0)) {
      this.setState({error: 'please provide description and amount'});
    } else {
      this.setState({error: null});
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
      
    }
    
  };
  
  
  render() {
    return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
            <input
                type="text"
                placeholder="Description"
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
            />
            <input
                type="text"
                placeholder="amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
            />
            <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                displayFormat='DD/MM/YYYY'
            />
            <textarea
                placeholder="Add a note for your expense (optional)"
                value={this.state.note}
                onChange={this.onNoteChange}
            />
            <button>{this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>
          </form>
        </div>
    );
  }
  
  
}


export { ExpenseForm };