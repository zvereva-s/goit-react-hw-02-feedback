import PropTypes from 'prop-types';
import styles from './notification.module.css';

function Notification({message}) {
        return (
            <div className={styles.wrapper}>
                <p className={styles.text}>{message}</p>
            </div>
        )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;