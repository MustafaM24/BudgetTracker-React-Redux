import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpenseEntry } from '../redux/actions';
import '../ExpenseEntry.css'; // Import your custom styling

function ExpenseEntryForm() {
  const dispatch = useDispatch();
  const [expense, setExpense] = useState(0);
  const [expenseDescription, setExpenseDescription] = useState('');

  const handleAddExpense = () => {
    dispatch(addExpenseEntry(expense, expenseDescription));
    setExpense(0);
    setExpenseDescription('');
  };

  return (
    <div className="expense-entry-form">
      <h2>Add Expense</h2>
      <div className="input-group-Expense">
        <label htmlFor="expense">Expense Amount:</label>
        <div className="input-group-inline-Expense">
          <input
            id="expense"
            type="number"
            placeholder="Amount"
            value={expense === 0 ? '' : expense}  // Clear the input when income is 0
            onChange={(e) => setExpense(Number(e.target.value))}
            />

          <button className="add-button-Expense" onClick={handleAddExpense}>
            Add Expense
          </button>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          placeholder="Description"
          value={expenseDescription}
          onChange={(e) => setExpenseDescription(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ExpenseEntryForm;
