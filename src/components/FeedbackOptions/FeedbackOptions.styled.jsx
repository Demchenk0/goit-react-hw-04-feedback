import styled from '@emotion/styled';

export const DivButton = styled.div`
	display: flex;
	gap: 20px;
	justify-content: center;
`;
export const ButtonEl = styled.button`
	text-decoration: none;
	display: inline-block;
	color: white;
	padding: 10px 20px;
	border-radius: 10px;
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	letter-spacing: 2px;
	background-image: linear-gradient(
		to right,
		#9eefe1 0%,
		#4830f0 51%,
		#9eefe1 100%
	);
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	border: none;
	cursor: pointer;
`;
