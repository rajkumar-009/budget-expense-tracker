// Component for balance tracking
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <React.Fragment>
      <h4>Your Balance</h4>
      <h1>$ {total}</h1>
    </React.Fragment>
  );
}

export default Balance;
