import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../../icons/loading";
import RoundedButton from "./Rounded-button";

export default function LoadMore({ onClick, loading, total }: any) {
	const [pageNo, changePage] = useState(2);

	const postsAvailable = total === pageNo;

	const call = () => {
		if (postsAvailable) {
			onClick(pageNo);
			changePage(pageNo + 1);
		}
	};

	if (total > 1) {
		return loading ? (
			<Loader style={{ height: "30px" }} />
		) : (
			<RoundedButton
				width={150}
				height={35}
				disabled={!postsAvailable}
				onClick={call}
			>
				{postsAvailable ? (
					<React.Fragment>
						<Svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
							className="fill"
						>
							<path
								fill="#000"
								d="M5.30506 8.30602C4.89748 8.71405 4.89748 9.37559 5.30506 9.78361L11.2089 15.694C11.4372 15.9225 11.745 16.0231 12.0432 15.9956C12.3122 15.9969 12.5816 15.8949 12.7868 15.6897L18.6941 9.78283C19.102 9.37504 19.102 8.71388 18.6941 8.3061C18.2863 7.89831 17.6251 7.89831 17.2173 8.3061L11.9962 13.5269L6.78103 8.30602C6.37345 7.89799 5.71263 7.89799 5.30506 8.30602Z"
							/>
						</Svg>
						<span>Load More</span>
					</React.Fragment>
				) : (
					<span>No more posts</span>
				)}
			</RoundedButton>
		);
	}
	return null;
}

const Svg = styled.svg`
	display: inline-block;
	vertical-align: middle;
`;
