import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './feedbackOptions.module.css';

function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <>
      {options.map((option) => (
        <button key={shortid.generate()}
          className={styles.btn}
          type="button"
          name={option}
          onClick={()=> onLeaveFeedback(option)}
        >{option}
        </button>
      ))}
    </>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;