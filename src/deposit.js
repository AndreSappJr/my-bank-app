import React, { useState } from 'react';

function Deposit() {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);

  const handleDeposit = (e) => {
    e.preventDefault();
    setBalance(balance + depositAmount);
    alert(`Deposited ${depositAmount} to your account`);
  };

  return (
    <div className="container">
      <h2>Deposit</h2>
      <h3>Balance: ${balance}</h3>
      <form onSubmit={handleDeposit}>
        <div className="form-group">
          <label htmlFor="depositAmount">Deposit Amount:</label>
          <input
            type="number"
            className="form-control"
            id="depositAmount"
            placeholder="Enter amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Deposit
        </button>
      </form>
    </div>
  );
}

export default Deposit;
