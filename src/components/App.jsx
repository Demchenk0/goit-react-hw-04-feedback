import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	sumReview = () => {
		const arrValue = Object.values(this.state);
		const ReviewFeedback = arrValue.reduce((acc, value) => {
			return acc + value;
		}, 0);
		return ReviewFeedback;
	};

	percentPositive = () => {
		const { good } = this.state;
		return Math.round((good / this.sumReview()) * 100);
	};
	onClickButton = element => {
		console.log(element);
		this.setState(prevState => ({
			[element]: prevState[element] + 1,
		}));
	};
	render() {
		const { good, neutral, bad } = this.state;
		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions
						options={Object.keys(this.state)}
						onLeaveFeedback={this.onClickButton}
					></FeedbackOptions>
				</Section>

				<Section title="Statistics">
					{this.sumReview() > 0 ? (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={this.sumReview()}
							positivePercentage={this.percentPositive()}
						></Statistics>
					) : (
						<Notification message="There is no feedback"></Notification>
					)}
				</Section>
			</>
		);
	}
}
