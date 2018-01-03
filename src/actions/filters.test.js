import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './filters';
import moment from 'moment';

describe('actions/filters.js', () => {
  
  test('.setStartDate', () => {
    
    expect(setStartDate(moment(0))).toEqual({
      type: 'SET_START_DATE',
      payload: moment(0)
    });
    
  });
  
  test('.setEndDate', () => {
    
    expect(setEndDate(moment(0))).toEqual({
      type: 'SET_END_DATE',
      payload: moment(0)
    });
    
  });
  
  
  describe('.setTextFilter', () => {
    
    test('with text', () => {
      expect(setTextFilter('mocked text')).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: 'mocked text'
      });
    });
    
    test('without text', () => {
      expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: ''
      });
    });
    
    
  });
  
  test('.sortByDate', () => {
    expect(sortByDate()).toEqual({
      type: 'SORT_BY_DATE',
    });
  });
  
  test('.sortByAmount', () => {
    expect(sortByAmount()).toEqual({
      type: 'SORT_BY_AMOUNT',
    });
  });
  
});