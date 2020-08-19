// Component for the transaction list
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} /> // for each transaction item render a transaction component
        ))}
      </ul>
    </React.Fragment>
  );
}

export default TransactionList;
