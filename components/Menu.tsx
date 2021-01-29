import React from "react";
import Link from "next/link";
import styled from "styled-components";
import DarkModeToggle from "./micro-components/DarkModeToggle";
import { SearchIcon } from "./Search";

const styles = {
	padding: "10px",
	fontSize: "1.25rem",
};

export interface MenuItem {
	ID: number | string;
	url: string;
	title: string;
}

interface MenuProps {
	menu: [MenuItem] | [];
	mobile?: boolean;
	show?: boolean;
	toggleMenu?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export default function Menu({ menu, mobile, show, toggleMenu }: MenuProps) {
	const menuItems = (
		<React.Fragment>
			{(menu as [MenuItem]).map((menuItem) => (
				<tr key={menuItem.ID}>
					<td style={styles}>
						<Link href={menuItem.url}>
							<Span onClick={toggleMenu} className="menuLink">
								{menuItem.title}
							</Span>
						</Link>
					</td>
				</tr>
			))}
			<tr>
				<td style={styles}>
					<DarkModeToggle />
				</td>
			</tr>
			<tr>
				<td style={styles}>
					<Link href="/search">
						<span onClick={toggleMenu}>
							<SearchIcon />
						</span>
					</Link>
				</td>
			</tr>
		</React.Fragment>
	);
	return mobile ? (
		<MobileMenu show={show}>
			<div>
				<table style={{ margin: "auto" }}>
					<tbody>{menuItems}</tbody>
				</table>
			</div>
		</MobileMenu>
	) : (
		<SidebarMenu>
			<table width="100%">
				<tbody>
					<tr>
						<td>
							<h2 style={{ fontSize: "32px" }}>Menu</h2>
						</td>
					</tr>
					{menuItems}
				</tbody>
			</table>
		</SidebarMenu>
	);
}

const SidebarMenu = styled.div`
	background: ${({ theme }) => theme.secondary};
	padding: 40px 20px;
	border-radius: 4px;
	position: sticky;
	top: 35px;
`;

export const Span = styled.span`
	font-size: 1.4rem;
	font-weight: 400;
	color: ${({ theme }) => theme.color};
	cursor: pointer;
	:hover {
		color: ${({ theme }) => theme.color};
	}
	@media only screen and (max-width: 1024px) {
		font-size: 1.7rem;
	}
`;

const MobileMenu = styled.div`
	position: absolute;
	display: ${({ show }: { show: boolean }) => (show ? "flex" : "none")};
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.primary};
	z-index: 9;
	font-size: 2rem !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
