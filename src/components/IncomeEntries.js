import React from 'react';
import { useSelector } from 'react-redux';
import { formatTimestamp } from '../utilities/DateTime'; // Import the formatTimestamp function

const IncomeEntries = () => {
  const incomeEntries = useSelector((state) => state.incomeEntries);

  return (
    <div >
      <h2>Income</h2>
      {incomeEntries.map((entry, index) => (
        <div key={index} className="entry">
          <p>{entry.description}</p>
          <p>Amount: {entry.amount}</p>
          <p>Timestamp: {formatTimestamp(entry.timestamp)}</p>
        </div>
      ))}
    </div>
  );
};

export default IncomeEntries;
