import React, { useRef, useEffect, useMemo } from "react";
import styled from "styled-components";
import catchLinks from "catch-links";
import HtmlToReact from "html-to-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRouter } from "next/router";
import Ad from "./Ad";

const htmlToReactParser = new HtmlToReact.Parser();

export default function Article({
	article,
	date,
	featuredImage,
	title,
}: {
	article: string;
	date: string;
	featuredImage: string;
	title: string;
}) {
	const articleRef = useRef(null);
	const router = useRouter();
	useEffect(() => {
		window.scrollTo(0, 0);
		if (article) {
			catchLinks(articleRef.current, (href: string) => {
				router.push(href);
			});
		}
	}, [article]);

	const html = useMemo(() => {
		function isValidNode() {
			return true;
		}
		const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(
			React
		);
		const processingInstructions = [
			{
				shouldProcessNode(node: any) {
					return node.name === "img";
				},
				processNode(node: any, _children: any, i: number) {
					console.log(node.attribs.width);
					return (
						<LazyLoadImage
							key={i}
							className={node.attribs.class}
							alt={node.attribs.alt}
							src={node.attribs.src}
							width={node.attribs.width}
						/>
					);
				},
			},
			{
				shouldProcessNode() {
					return true;
				},
				processNode: processNodeDefinitions.processDefaultNode,
			},
		];

		const reactComponent = htmlToReactParser.parseWithInstructions(
			article,
			isValidNode,
			processingInstructions
		);
		return reactComponent;
	}, [article]);

	return (
		<Page>
			{article ? (
				<React.Fragment>
					<div>
						<Heading dangerouslySetInnerHTML={{ __html: title }} />
						{date ? (
							<div className="date" style={{ paddingBottom: "15px" }}>
								Last Updated: {date}
							</div>
						) : null}
					</div>
					<div>
						{featuredImage ? ( // no undefined src when no featured image is present
							<img src={featuredImage} alt="featured" />
						) : null}
					</div>
					<Ad />
					<div className="article" ref={articleRef}>
						{html}
					</div>
					<Ad />
				</React.Fragment>
			) : (
				<div>Loading...</div>
			)}
		</Page>
	);
}

export const Page = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.05);
	padding: 20px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: 3px;
`;

export const Heading = styled.h1`
	color: ${({ theme }) => theme.color};
	line-height: 1.2;
	font-weight: 600;
	font-size: 32px;
	padding-bottom: 7px;
`;
