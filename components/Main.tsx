import React from "react";
import styled from "styled-components";

export default function Main(props: any) {
	return <Content className="column is-two-thirds">{props.children}</Content>;
}

const Content = styled.div`
	@media only screen and (min-width: 1024px) {
		width: 55% !important;
	}
`;
