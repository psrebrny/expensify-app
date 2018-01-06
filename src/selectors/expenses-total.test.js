import selectExpensesTotal from './expenses-total';
import expenses from '../test/expensesMock';

test('shold return 0 when not expenses', () => {
  const res = selectExpensesTotal([]);
  expect(selectExpensesTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
  const expectTotal = expenses
      .map((expense) => expense.amount)
      .reduce((sum, value) => sum + value, 0);
  
  expect(selectExpensesTotal(expenses)).toBe(expectTotal);
});