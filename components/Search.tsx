import React from "react";
// import { connect } from 'react-redux';
// import styled from 'styled-components';
import RoundedButton from "./micro-components/Rounded-button";
// import debounce from '../utils/debounce';
// import Loading from '../icons/loading';

export function SearchIcon() {
	return (
		<RoundedButton height={35} width={110}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="26"
				viewBox="0 0 24 24"
				style={{ verticalAlign: "bottom" }}
				className="fill"
			>
				<path
					fillRule="evenodd"
					d="M14.1922 15.6064C13.0236 16.4816 11.5723 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5723 16.4816 13.0236 15.6064 14.1922L20.7782 19.364C21.1687 19.7545 21.1687 20.3877 20.7782 20.7782C20.3876 21.1687 19.7545 21.1687 19.364 20.7782L14.1922 15.6064ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z"
					clipRule="evenodd"
				/>
			</svg>
		</RoundedButton>
	);
}
// function SearchBar({ onChange, loading }) {
//     const updateSearchVal = debounce((val) => {
//         onChange(val);
//     }, 1000);

//     return (
//         <Label>
//             <input
//                 className="input"
//                 onChange={(e) => updateSearchVal(e.target.value)}
//                 placeholder="Search"
//                 onKeyPress={(e) =>
//                     e.key === 'enter' ? updateSearchVal(e.target.value) : null
//                 }
//             />
//             {loading ? (
//                 <Loading
//                     width="30px"
//                     style={{ position: 'absolute', right: '5px' }}
//                 />
//             ) : null}
//         </Label>
//     );
// }

// const Label = styled.label`
//     position: relative;
//     display: flex;
// `;

// export const Search = connect(({ search }) => ({
//     loading: search.loading,
// }))(SearchBar);
export default function () {
	return <> </>;
}
