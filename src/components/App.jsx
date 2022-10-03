import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handelChange = event => {
		switch (event) {
			case 'good':
				setGood(prevState => prevState + 1);
				break;
			case 'neutral':
				setNeutral(prevState => prevState + 1);
				break;
			case 'bad':
				setBad(prevState => prevState + 1);
				break;
			default:
				return;
		}
	};
	const sumReview = () => {
		return good + neutral + bad;
	};
	const percentPositive = () => {
		return Math.round((good / sumReview()) * 100);
	};
	return (
		<>
			<Section title="Please leave feedback">
				<FeedbackOptions
					options={['good', 'neutral', 'bad']}
					onLeaveFeedback={handelChange}
				></FeedbackOptions>
			</Section>

			<Section title="Statistics">
				{sumReview() ? (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={sumReview()}
						positivePercentage={percentPositive()}
					></Statistics>
				) : (
					<Notification message="There is no feedback"></Notification>
				)}
			</Section>
		</>
	);
}
