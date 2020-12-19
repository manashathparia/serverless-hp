import {
	UPDATE_ALL_POSTS,
	UPDATE_POST,
	UPDATE_FETCHED_POSTS,
	UPDATE_TOTAL_POSTS,
	UPDATE_DISPLAY_POSITION,
} from "../Actions/Posts.actions";

const initial = {
	all_posts: [{}],
	current_post: {},
	fetched_posts: {},
	total_posts: 0,
	total_pages: 0,
	displayPosition: [0, 0],
};

export default function posts(
	state = initial,
	{ type, payload }: { type: string; payload: any }
) {
	switch (type) {
		case UPDATE_ALL_POSTS:
			return { ...state, all_posts: [...state.all_posts, ...payload] };

		case UPDATE_POST:
			return { ...state, current_post: payload };

		case UPDATE_FETCHED_POSTS:
			return { ...state, fetched_posts: payload };

		case UPDATE_TOTAL_POSTS:
			return {
				...state,
				total_pages: payload.total_pages,
				total_posts: payload.total_posts,
			};

		case UPDATE_DISPLAY_POSITION:
			return { ...state, displayPosition: payload };

		default:
			return state;
	}
}
