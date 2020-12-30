import React from "react";
import styled from "styled-components";
import Link from "next/link";

const columnStyle = { paddingBottom: 0 };

interface CardProps {
	slug: string;
	title: string;
	modified: string;
	featuredImage: string;
	excerpt: string;
}

export default function Card(props: CardProps) {
	return (
		<Root>
			<div
				style={{
					marginTop: "2px",
					height: "29%",
				}}
			>
				<Heading className="card-heading">
					<Link
						href={{
							pathname: `/${props.slug}`,
							// state: { id: props.id },
						}}
					>
						<span dangerouslySetInnerHTML={{ __html: props.title }} />
					</Link>
				</Heading>
				<div>
					<span>Last modified: {props.modified}</span>
				</div>
			</div>
			<div style={{ paddingTop: "10px", height: "70%" }}>
				<div
					className="columns"
					style={{ minHeight: "210px", paddingTop: "7px" }}
				>
					<div className="column" style={{ ...columnStyle, height: "90%" }}>
						<div style={{ width: "100%", height: "auto" }}>
							<img
								alt="featured"
								height="150"
								width="300"
								src={props.featuredImage}
							/>
						</div>
					</div>
					<div
						className="column expert-container" // in global-styles
						style={columnStyle}
					>
						<Excerpt>
							<span
								dangerouslySetInnerHTML={{
									__html: props.excerpt?.replace(
										`${props.title} Read More &raquo;`,
										""
									),
								}}
							/>
							<span className="read-more">
								<Link href={`/${props.slug}`}>
									<span style={{ cursor: "pointer" }}>
										Read more <span style={{ color: "sky blue" }}>→</span>
									</span>
								</Link>
							</span>
						</Excerpt>
					</div>
				</div>
			</div>
		</Root>
	);
}

const Root = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.05);
	min-height: 300px;
	margin: auto;
	margin-bottom: 10px;
	padding: 15px 25px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: 3px;
	transition: background-color 0.3s, color 0.3s;
`;

const Excerpt = styled.div`
	width: 100%;
	padding-bottom: 10px;
	font-size: 18px;
	line-height: 1.7;
	@media only screen and (min-width: 1024px) {
		min-height: 190px !important;
	}
`;

const Heading = styled.h2`
	color: ${({ theme }) => `${theme.color} !important`};
	margin-bottom: 7px;
	font-size: 30px !important;
	text-decoration: none;
	font-weight: 700;
	cursor: pointer;
	line-height: 1.2;
`;
