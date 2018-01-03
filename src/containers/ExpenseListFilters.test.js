import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFiltersClass } from './ExpenseListFilters';
import { filters, altFilters } from '../test/filtersMock';
import moment from 'moment';


describe('expense list filters', () => {
  const setTextFilter = jest.fn();
  const sortByDate = jest.fn();
  const sortByAmount = jest.fn();
  const setStartDate = jest.fn();
  const setEndDate = jest.fn();
  const wrapper = shallow(<ExpenseListFiltersClass
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
  
  />);
  
  test('render list', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('render list with alt data', () => {
    wrapper.setProps({
      filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
  });
  
  test('text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
      target: {
        value
      }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });
  
  test('sort by date', () => {
    const value = 'date';
    wrapper.setProps({
      filters: altFilters
    });
    wrapper.find('select').simulate('change', {
      target: {
        value
      }
    });
    
    expect(sortByDate).toHaveBeenCalled();
  });
  
  
  test('sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
      target: {
        value
      }
    });
    
    expect(sortByAmount).toHaveBeenCalled();
    
  });
  
  
  test('date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    //DateRangePicker render to withStyles(DateRangePicker) tag
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  });
  
  
  test('date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
    
  });
  
  
});

