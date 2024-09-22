import "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <div><table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
      <tbody>
        {items.map(TrItem => {
        return (<tr key={TrItem.id}>
      <td>{TrItem.type}</td> 
      <td>{TrItem.amount}</td> 
      <td>{TrItem.currency}</td> 
    </tr>
    )
      })}
  </tbody>
</table></div>
  )
}

export default TransactionHistory