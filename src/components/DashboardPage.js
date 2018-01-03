import React from 'react';
import { ExpenseList } from '../containers/ExpenseList';
import { ExpenseListFilters } from '../containers/ExpenseListFilters';

export const ExpenseDashboardPage = () => {
  return (
      <div>
        <ExpenseListFilters/>
        <ExpenseList/>
      </div>
  );
};