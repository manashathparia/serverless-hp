import styled from "styled-components";

const RoundedButton = styled.button<{ width: number; height: number }>`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	border: 1.7px solid ${({ theme }) => theme.color};
	border-radius: 50px;
	text-align: center;
	font-size: 17px;
	cursor: pointer;
	color: ${({ theme }) => theme.color};
	background: initial;
	outline: none;
	:disabled {
		cursor: not-allowed;
	}
`;

export default RoundedButton;
