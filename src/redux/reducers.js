import { ADD_INCOME_ENTRY, ADD_EXPENSE_ENTRY } from './actions';

const initialState = {
  budget: 0,
  incomeEntries: [],
  expenseEntries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME_ENTRY:
      return {
        ...state,
        budget: state.budget + action.payload.amount,
        incomeEntries: [...state.incomeEntries, action.payload],
      };
    case ADD_EXPENSE_ENTRY:
      return {
        ...state,
        budget: state.budget - action.payload.amount,
        expenseEntries: [...state.expenseEntries, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
