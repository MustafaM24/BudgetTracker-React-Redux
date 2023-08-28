// import React, { useState } from 'react';

// import {  useDispatch } from 'react-redux';
// import { addIncomeEntry } from '../redux/actions';

// function IncomeEntryForm() {
//     const dispatch = useDispatch();
  
//     const [income, setIncome] = useState(0);
//     const [incomeDescription, setIncomeDescription] = useState('');

//   const handleAddIncome = () => {
//     dispatch(addIncomeEntry(income, incomeDescription));
//     setIncome(0);
//     setIncomeDescription('');
//   };

//   return (
//     <div>
//       <h2>Income</h2>
//       <input
//         type="number"
//         placeholder="Enter income"
//         value={income}
//         onChange={(e) => setIncome(Number(e.target.value))}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={incomeDescription}
//         onChange={(e) => setIncomeDescription(e.target.value)}
//       />
//       <button onClick={handleAddIncome}>Add Income</button>
//     </div>
//   );
// }

// export default IncomeEntryForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncomeEntry } from '../redux/actions';
import '../IncomeEntry.css'; // Import your custom styling

function IncomeEntryForm() {
  const dispatch = useDispatch();

  const [income, setIncome] = useState(0);
  const [incomeDescription, setIncomeDescription] = useState('');

  const handleAddIncome = () => {
    dispatch(addIncomeEntry(income, incomeDescription));
    setIncome(0);
    setIncomeDescription('');
  };

  return (
    <div className="income-entry-form">
      <h2>Add Income</h2>
      <div className="input-group-income">
        <label htmlFor="income">Income Amount:</label>
        <div className="input-group-inline-income">
        <input
            id="income"
            type="number"
            placeholder="Amount"
            value={income === 0 ? '' : income}  // Clear the input when income is 0
            onChange={(e) => setIncome(Number(e.target.value))}
            />
        <button className="add-button-income" onClick={handleAddIncome}>
        Add Income
      </button>
      </div>
      </div>
      <div className="input-group">
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          placeholder="Description"
          value={incomeDescription}
          onChange={(e) => setIncomeDescription(e.target.value)}
        />
      </div>
    </div>
  );
}

export default IncomeEntryForm;
