import React from "react";
import Link from "next/link";
import styled from "styled-components";
// import config from '../../config.json';

export default function Footer({ menu = [] }: { menu: [any] | [] }) {
	return (
		<Root>
			Copyright © 2020 {/* {config.title} */} -{" "}
			{(menu as [any]).map((menuItem) => (
				<span key={menuItem.id}>
					<Link href={menuItem.url}>{menuItem.title} </Link>
					{"  "}
				</span>
			))}
		</Root>
	);
}
const Root = styled.footer`
	margin-top: 20px;
	min-height: 70px;
	background: ${({ theme }) => theme.secondary};
	text-align: center;
	padding: 20px;
`;
