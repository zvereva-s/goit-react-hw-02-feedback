import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './feedbackOptions.module.css';

function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <>
      {options.map((option) => (
        <button key={nanoid()}
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
  options: PropTypes.arrayOf(PropTypes.string.isRequired,),
	onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;