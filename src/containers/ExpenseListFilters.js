import 'react-dates/initialize';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFiltersClass extends Component {
  state = {
    calendarFocused: null,
  };
  
  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  
  onFocusChange = (focused) => {
    this.setState({
      calendarFocused: focused
    });
  };
  
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  
  render() {
    return (
        <div className="content-container">
          <div className="input-group">
            <div className="input-group__item">
              <input
                  className="text-input"
                  type="text"
                  placeholder="Search expenses"
                  value={this.props.filters.text}
                  onChange={this.onTextChange}/>
            </div>
            <div className="input-group__item">
              <select
                  className="select"
                  value={this.props.filters.sortBy}
                  onChange={this.onSortChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
              </select>
            </div>
            <div className="input-group__item">
              <DateRangePicker
                  startDateId="startDate"
                  endDateId="endDate"
                  startDate={this.props.filters.startDate}
                  endDate={this.props.filters.endDate}
                  onDatesChange={this.onDatesChange}
                  focusedInput={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  isOutsideRange={() => false}
                  displayFormat='DD/MM/YYYY'
                  numberOfMonths={1}
                  showClearDates={true}
              />
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
  }, dispatch);
};

const ExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFiltersClass);

export { ExpenseListFilters, ExpenseListFiltersClass };

