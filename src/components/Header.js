import React from "react";
import { useSelector } from 'react-redux';
import "../Header.css"; // Import your header styles

const Header = () => {
  const budget = useSelector((state) => state.budget);

  return (
    <header className="header">
      <h1>Budget Tracker</h1>
      <p className="remaining-budget">Remaining Budget: Rs {budget}</p>
    </header>
  );
}

export default Header;
