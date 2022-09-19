import PropTypes from 'prop-types';

export const Statistics = ({
	good,
	neutral,
	bad,
	total,
	positivePercentage,
}) => {
	return (
		<>
			<p>Good:{good}</p>
			<p>Neutral:{neutral}</p>
			<p>Bad:{bad}</p>
			<p>Total:{total}</p>
			<p>Positive feedback:{positivePercentage}%</p>
		</>
	);
};


Statistics.propTypes = {
    good:PropTypes.number.isRequired,
	neutral:PropTypes.string.isRequired,
	bad:PropTypes.string.isRequired,
	total:PropTypes.string.isRequired,
	positivePercentage:PropTypes.string.isRequired,
}