import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={s.transaction__history}>
      <thead>
        <tr className={s.string}>
          <th className={s.label}>Type</th>
          <th className={s.label}>Amount</th>
          <th className={s.label}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={s.string} key={item.id}>
            <td className={s.item}>{item.type}</td>
            <td className={s.item}>{item.amount}</td>
            <td className={s.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
