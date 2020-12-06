/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
// import { toggleDarkMode } from '../../Actions/preferences.actions';

function DarkModeToggle({ /* toggle, */ dark }: any) {
	return (
		<Root className="toggle">
			<Icon aria-label="img" role="img">
				☀️
			</Icon>
			<CheckBox
				type="checkbox"
				// onChange={toggle}
				checked={dark}
				id="toggle-switch"
			/>
			<Label htmlFor="toggle-switch"></Label>
			<Icon aria-label="img" role="img">
				🌛
			</Icon>
		</Root>
	);
}

const Root = styled.label`
	display: -webkit-box;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	justify-content: space-around;
	max-width: 140px;
	margin: auto;
	@media only screen and (max-width: 768px) {
		max-width: 200px;
	}
`;

const Label = styled.label`
	cursor: pointer;
	width: 75px;
	height: 34px;
	background: rgba(0, 0, 0, 0.27);
	display: block;
	border-radius: 40px;
	position: relative;
	-webkit-transition: 0.3s;
	transition: 0.3s;
	:after {
		content: "";
		position: absolute;
		top: 2px;
		left: 2px;
		width: 30px;
		height: 30px;
		background: #fff;
		border-radius: 40px;
		-webkit-transition: 0.3s;
		transition: 0.3s;
	}
	@media only screen and (max-width: 768px) {
		height: 40px;
		:after {
			height: 35px;
			width: 35px;
		}
	}
`;

const CheckBox = styled.input`
	height: 0;
	width: 0;
	visibility: hidden;
	&:checked + ${Label} {
		background: white;
		-webkit-transition: 0.3s;
		transition: 0.3s;
	}
	&:checked + ${Label}:after {
		background: #353941;
		left: calc(100% - 2px);
		-webkit-transform: translateX(-100%);
		transform: translateX(-100%);
	}
`;

const Icon = styled.span`
	margin: 0 0.5rem;
	@media only screen and (max-width: 768px) {
		font-size: 2rem;
	}
`;

export default connect()(DarkModeToggle);
// ({ preferences }) => ({ dark: preferences.darkMode }),
// (/* dispatch */) => ({
//     toggle() {
//         // dispatch(toggleDarkMode());
//     },
// })
