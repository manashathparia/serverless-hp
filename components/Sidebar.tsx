import React from "react";
import styled from "styled-components";

export default function Sidebar(props: any) {
	return (
		<Root hidden={props.hidden} className="column sidebar">
			{props.children}
		</Root>
	);
}

const Root = styled.div`
	@media only screen and (max-width: 1024px) {
		display: ${(props) => (props.hidden ? "none !important" : "block")};
	}
`;
