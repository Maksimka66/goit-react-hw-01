import "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  const markup = items.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{markup}</tbody>
    </table>
  );
};

export default TransactionHistory;
