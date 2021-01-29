import React, { useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
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
						<Logo /> BETA
					</span>
				</Link>
				<NavbarBurger className="navbar-burger" onClick={toggleMenu}>
					<div>{menuOpen ? <CloseIcon /> : <Burger />}</div>
				</NavbarBurger>
			</div>
			<LoadingBar
				updateTime={300}
				maxProgress={90}
				progressIncrease={5}
				className="loading"
			/>
		</nav>
	);
}

const NavbarBurger = styled.span`
	width: 2.6em;
	background: none;
	z-index: 999;
	margin-right: 0.75rem;
	-webkit-tap-highlight-color: transparent;
	:hover {
		background-color: inherit;
	}
`;

const sharedBurger = () => css`
	pointer-events: none;
	display: block;
	width: 100%;
	border-radius: 0.25em;
	background-color: ${({ theme }) => theme.color};
	height: 0.2em;
	position: absolute;
	top: 2.125rem;
`;

const Burger = styled.div`
	${sharedBurger}
	:after,
	:before {
		${sharedBurger}
		content: "";
		width: 1.5em;
	}
	:before {
		left: 1em;
		top: 11px;
	}
	:after {
		top: -11px;
	}
`;

export const CloseIcon = styled.div`
	${sharedBurger}
	-webkit-transform: translateX(-2em);
	transform: translateX(-2em);
	background-color: initial;
	:after,
	:before {
		${sharedBurger}
		content: "";
		left: 0.5em;
		top: 0;
	}
	:after {
		-webkit-transform: translateX(1.5em) rotate(-135deg);
		transform: translateX(1.5em) rotate(-135deg);
	}
	:before {
		-webkit-transform: translateX(2em) rotate(135deg);
		transform: translateX(1.5em) rotate(135deg);
	}
`;
