import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <div><table className={styles.table}>
  <thead>
    <tr className={styles.head}>
      <th className={styles.header}>Type</th>
      <th className={styles.header}>Amount</th>
      <th className={styles.header}>Currency</th>
    </tr>
  </thead>
      <tbody>
        {items.map(TrItem => {
        return (<tr key={TrItem.id} className={styles.body}>
      <td className={styles.data}>{TrItem.type}</td> 
      <td className={styles.data}>{TrItem.amount}</td> 
      <td className={styles.data}>{TrItem.currency}</td> 
    </tr>
    )
      })}
  </tbody>
</table></div>
  )
}

export default TransactionHistory