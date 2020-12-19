import {
	UPDATE_SEARCH_RESULTS,
	SEARCH_LOADING,
	SEARCH_LOADING_DONE,
} from "../Actions/search.actions";

const inital = {
	searchText: "",
	searchItems: [""],
	loading: false,
};

export default function searchReducer(
	state = inital,
	{ type, payload }: { type: string; payload: any }
) {
	switch (type) {
		case SEARCH_LOADING:
			return { ...state, loading: true };

		case SEARCH_LOADING_DONE:
			return { ...state, loading: false };

		case UPDATE_SEARCH_RESULTS:
			return { ...state, searchItems: payload };

		default:
			return state;
	}
}
