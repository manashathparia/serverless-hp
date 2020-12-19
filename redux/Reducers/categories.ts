import {
	UPDATE_CATEGORY_POSTS,
	UPDATE_CATEGORIES,
	UPDATE_TOTAL_CATEGORY_POSTS,
} from "../Actions/category.action";

interface Category {
	categories: [] | [any];
	postsByCategory: [] | [any];
	currentCategory: string;
	total: any;
}

const initial: Category = {
	categories: [],
	postsByCategory: [],
	currentCategory: "",
	total: {},
};

export default function categoryReducer(
	state = initial,
	{ type, payload }: { type: string; payload: any }
) {
	switch (type) {
		case UPDATE_CATEGORY_POSTS:
			return { ...state, postsByCategory: payload };
		case UPDATE_CATEGORIES:
			return { ...state, categories: payload };
		case UPDATE_TOTAL_CATEGORY_POSTS:
			return { ...state, total: payload };
		default:
			return state;
	}
}
