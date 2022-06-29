import PropTypes from 'prop-types';
import styles from './statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        Good:
        <span  className={styles.label}style={{ color: '#37eb34' }}>{good}</span>
      </li>
      <li className={styles.item}>
        Neutral:
        <span  className={styles.label}style={{ color: '#ebe534' }}>{neutral}</span>
      </li>
      <li className={styles.item}>
        Bad:
        <span  className={styles.label}style={{ color: '#eb3434' }}>{bad}</span>
      </li>
      <li className={styles.item}>
        Total:
        <span className={styles.label}>{total}</span>
      </li>
      <li className={styles.item}>
        Positive feedback:
        <span className={styles.label}>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
