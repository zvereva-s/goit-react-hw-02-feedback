import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

import { Component } from 'react';

export default class App extends Component {
  static defaultProps = {
    total: 0,
    positivePercentage: 0,
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ({ target }) => {
    const { name } = target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => {
      this.total = bad + good + neutral;
    });
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good }) => {
      this.positivePercentage = Number(((good / this.total) * 100).toFixed(2));
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { total, positivePercentage } = this;
    const names = Object.keys(this.state);
    

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={names}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total ? (
          <Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				) : (
					<Notification message="There is no feedback" />
				)}
      </>
    );
  }
}
