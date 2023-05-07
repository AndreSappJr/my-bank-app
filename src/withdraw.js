import React, { useState } from 'react';

function Withdraw() {
  const [balance, setBalance] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (withdrawAmount > balance) {
      alert('Insufficient balance!');
    } else {
      setBalance(balance - withdrawAmount);
      alert(`Withdrawn ${withdrawAmount} from your account`);
    }
  };

  return (
    <div className="container">
      <h2>Withdraw</h2>
      <h3>Balance: ${balance}</h3>
      <form onSubmit={handleWithdraw}>
        <div className="form-group">
          <label htmlFor="withdrawAmount">Withdraw Amount:</label>
          <input
            type="number"
            className="form-control"
            id="withdrawAmount"
            placeholder="Enter amount"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(+e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Withdraw
        </button>
      </form>
    </div>
  );
}

export default Withdraw;
