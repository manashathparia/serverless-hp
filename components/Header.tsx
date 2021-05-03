import React, { useState } from "react";
import Styled from "styled-components";
import Link from "next/link";
import LoadingBar from "react-redux-loading-bar";
import Logo from "./micro-components/Logo";
import Menu, { MenuItem } from "./Menu";

export default function Header({ menu = [] }: { menu?: [MenuItem] | [] }) {
	const [menuOpen, _toggleMenu] = useState(false);
	const [showAlert, toggleAlert] = useState(false);
	const toggleMenu = () => _toggleMenu(!menuOpen);

	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<Menu menu={menu} mobile={true} toggleMenu={toggleMenu} show={menuOpen} />
			<div style={{ margin: "auto" }} className="navbar-brand">
				<Link
					// style={{ zIndex: 99 }}
					href="/"
				>
					<span style={{ cursor: "pointer" }} className={`navbar-item logo`}>
						<Logo />
					</span>
				</Link>
				<span
					className="logo navbar-item"
					style={{ paddingLeft: 0, marginLeft: "-10px" }}
				>
					ALPHA{" "}
					<span
						onClick={() => toggleAlert(true)}
						style={{ color: "white", paddingLeft: 3, cursor: "pointer" }}
					>
						&#9432;
					</span>{" "}
					;
				</span>
				<label className="wrapper-menu" htmlFor="check">
					<input
						checked={menuOpen}
						className="hamInput"
						onChange={toggleMenu}
						id="check"
						type="checkbox"
					></input>
					<div className="hamContainer">
						<div className="line-menu half start"></div>
						<div className="line-menu middle"></div>
						<div className="line-menu half end"></div>
					</div>
				</label>
			</div>
			<LoadingBar
				updateTime={300}
				maxProgress={90}
				progressIncrease={5}
				className="loading"
				style={{ left: 0, right: 0 }}
			/>
			{showAlert && (
				<AlertBox>
					<div
						style={{
							fontSize: 19,
							fontWeight: 600,
							textAlign: "center",
							padding: 5,
						}}
					>
						ALPHA ALERT
					</div>
					<span
						onClick={() => toggleAlert(false)}
						style={{
							cursor: "pointer",
							position: "absolute",
							right: 10,
							top: 3,
						}}
					>
						X
					</span>
					<div style={{ padding: 10 }}>
						This website is currently being moved from wordpress(paid server) to
						serverless(free). <br /> So some functionalities is broken and is
						expected to work in near future. <br />{" "}
						<span style={{ float: "right" }}>Thank you</span>
					</div>
				</AlertBox>
			)}
		</nav>
	);
}

const AlertBox = Styled.div`
z-index: 999999999999;
	width: 400px;
	top: 4.50rem;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	padding: 10px;
	border-radius: 5px;
	background: ${({ theme }) => theme.secondary};
	box-shadow: ${({ theme }) => theme.boxShadow};
	@media only screen and (max-width: 1024px) {
		font-size: 1.7rem;
		width: 100%
	}
`;
