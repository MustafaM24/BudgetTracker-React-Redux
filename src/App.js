import './App.css';
import './components/Header.js';
import Header from './components/Header';
import ExpenseEntryForm from './components/AddExpense';
import IncomeEntryForm from './components/AddIncome';

import IncomeEntries from './components/IncomeEntries'; // Import the IncomeEntries component
import ExpenseEntries from './components/ExpenseEntries'; // Import the ExpenseEntries component

import BudgetChart from './components/BudgetChart'; // Import the BudgetChart component


function App() {
  return (
    <div className="App">
      <Header />
      <div className="entry-column">
      <IncomeEntryForm />
      <ExpenseEntryForm />
      <BudgetChart />
      </div>

      <div className="entry-column">
        <IncomeEntries />
      </div>

      <div className="entry-column">
        <ExpenseEntries />
      </div>

    </div>
  );
}

export default App;