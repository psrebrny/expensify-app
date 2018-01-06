import React from 'react';
import { ExpenseList } from '../containers/ExpenseList';
import { ExpenseListFilters } from '../containers/ExpenseListFilters';
import { ExpensesSummary } from '../containers/ExpensesSummary';

export const ExpenseDashboardPage = () => {
  return (
      <div>
        <ExpensesSummary/>
        <ExpenseListFilters/>
        <ExpenseList/>
      </div>
  );
};