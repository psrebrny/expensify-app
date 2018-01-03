import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseForm } from './ExpenseForm';
import expenses from '../test/expensesMock';

test('render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
});

test('render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value
    }
  });
  
  expect(wrapper.state('description')).toBe(value);
  
});

test('set note on input change', () => {
  const value = 'New note';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('textarea').simulate('change', {
    target: {
      value
    }
  });
  
  expect(wrapper.state('note')).toBe(value);
});

describe('set amount', () => {
  
  const wrapper = shallow(<ExpenseForm/>);
  
  test('valid', () => {
    const value = '23.50';
    wrapper.find('input').at(1).simulate('change', {
      target: {
        value
      }
    });
    
    expect(wrapper.state('amount')).toBe(value);
    
  });
  
  test('not valid', () => {
    const value = '23.501';
    wrapper.find('input').at(1).simulate('change', {
      target: {
        value
      }
    });
    expect(wrapper.state('amount')).not.toBe(value);
  });
  
});

describe('submit', () => {
  
  test('valid', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {
      }
    });
    
    expect(wrapper.state('error')).toBe(null);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[0].description,
      amount: expenses[0].amount,
      createdAt: expenses[0].createdAt,
      note: expenses[0].note
    });
    
  });
  
  
  test('render error after invalid form submit', () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {
      }
    });
    
    expect(wrapper.state('error')).not.toBe(null);
    expect(wrapper).toMatchSnapshot();
  });
  
});

test('on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  
  expect(wrapper.state('createdAt')).toEqual(now);
});


test('on focus change', () => {
  //TODO fals because moment mock error _moment2.default.isMoment is not a function find  solution
  const focused = true;
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper.state('calendarFocused')).toBe(false);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);
});