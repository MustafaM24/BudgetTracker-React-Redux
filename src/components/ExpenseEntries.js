import React from 'react';
import { useSelector } from 'react-redux';
import { formatTimestamp } from '../utilities/DateTime'; // Import the formatTimestamp function

const ExpenseEntries = () => {
  const expenseEntries = useSelector((state) => state.expenseEntries);

  return (
    <div >
      <h2>Expenses</h2>
      {expenseEntries.map((entry, index) => (
        <div key={index} className="entry">
          <p>{entry.description}</p>
          <p>Amount: {entry.amount}</p>
          <p>Timestamp: {formatTimestamp(entry.timestamp)}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseEntries;
