import React, { useState } from "react";
import Link from "next/link";
import LoadingBar from "react-redux-loading-bar";
import Logo from "./micro-components/Logo";
import Menu, { MenuItem } from "./Menu";

export default function Header({ menu = [] }: { menu?: [MenuItem] | [] }) {
	const [menuOpen, _toggleMenu] = useState(false);
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
						<Logo /> ALPHA
					</span>
				</Link>
				<label className="wrapper-menu" htmlFor="check">
					<input
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
		</nav>
	);
}
