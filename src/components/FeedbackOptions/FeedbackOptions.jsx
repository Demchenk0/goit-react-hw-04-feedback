import PropTypes from 'prop-types';
import { DivButton, ButtonEl } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<DivButton>
			{options.map(element => {
				return (
					<ButtonEl
						onClick={() => {
							onLeaveFeedback(element);
						}}
						key={element}
						type="button"
					>
						{element}
					</ButtonEl>
				);
			})}
		</DivButton>
	);
};

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};
