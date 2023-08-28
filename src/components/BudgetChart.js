import React from 'react';
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetChart = () => {
//   const budget = useSelector((state) => state.budget);
  const totalIncome = useSelector((state) =>
    state.incomeEntries.reduce((total, entry) => total + entry.amount, 0)
  );
  const totalExpense = useSelector((state) =>
    state.expenseEntries.reduce((total, entry) => total + entry.amount, 0)
  );

  const data = {
    labels: ['Expenses', 'Remaining Budget'],
    datasets: [
      {
        // data: [2, 10],
          data: [totalExpense, totalIncome-totalExpense],
          backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(75, 192, 192, 0.5)'],
          borderColor: ['rgba(255, 0, 0, 1)', 'rgba(75, 192, 192, 1)'],
          hoverBackgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(75, 192, 192, 1)'],
      },
    ],
  };

  return (
    <div className="budget-chart">
      <h2>Budget Usage</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default BudgetChart;
