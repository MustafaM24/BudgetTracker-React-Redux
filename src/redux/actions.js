export const ADD_INCOME_ENTRY = 'ADD_INCOME_ENTRY';
export const ADD_EXPENSE_ENTRY = 'ADD_EXPENSE_ENTRY';

export const addIncomeEntry = (amount, description) => ({
  type: ADD_INCOME_ENTRY,
  payload: { amount, description, timestamp: new Date() },
});

export const addExpenseEntry = (amount, description) => ({
  type: ADD_EXPENSE_ENTRY,
  payload: { amount, description, timestamp: new Date() },
});
