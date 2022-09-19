import PropTypes from 'prop-types';
import { Values } from './Statistics.styled';
export const Statistics = ({
	good,
	neutral,
	bad,
	total,
	positivePercentage,
}) => {
	return (
		<>
			<Values>Good:{good}</Values>
			<Values>Neutral:{neutral}</Values>
			<Values>Bad:{bad}</Values>
			<Values>Total:{total}</Values>
			<Values>Positive feedback:{positivePercentage}%</Values>
		</>
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};
