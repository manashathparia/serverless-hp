/* eslint-disable no-use-before-define */
import { showLoading, hideLoading } from "react-redux-loading-bar";
// import { push } from 'connected-react-router';
import axios from "axios";
// import { sortComments } from '../utils/wordpress';
import { addNotification } from "./notification.actions";
import { PostType } from "../../mongo/models/post.model";
// import config from '../../config.json';

export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_ALL_POSTS = "UPDATE_ALL_POSTS";
export const UPDATE_FETCHED_POSTS = "UPDATE_FETCHED_POSTS";
export const UPDATE_TOTAL_POSTS = "UPDATE_TOTAL_POSTS";
export const UPDATE_DISPLAY_POSITION = "UPDATE_DISPLAY_POSITION";

export const getAllPostsAction = (_posts: [any]) => {
	const posts = _posts?.map((post) => ({
		...post,
		title: post?.title,
		modified: new Date(post?.modified).toDateString(),
	}));
	return {
		type: UPDATE_ALL_POSTS,
		payload: posts,
	};
};

export const getWpPostAction = (_post: PostType) => {
	// const post = {
	//     ..._post,
	//     title: _post.title.rendered,
	//     article: _post.content.rendered
	//         .split(`href="${config.api}`)
	//         .join('href="'), // replace wordpress url with react site url
	//     modified: new Date(_post.modified).toDateString(),
	//     comments: _post.sorted
	//         ? _post.comments
	//         : sortComments.arrangeComments(_post.comments),
	// };
	// return {
	//     type: UPDATE_POST,
	//     payload: post,
	// };
};

export const updateTotalPageAction = (
	totalPosts: number,
	totalPages: number
) => ({
	type: UPDATE_TOTAL_POSTS,
	payload: {
		total_pages: totalPages,
		total_posts: totalPosts,
	},
});

export const clearCurrentPost = () => ({
	type: UPDATE_POST,
	payload: {},
});

export const getWpAllPosts = (pageNo: number, fields: string[]) => async (
	dispatch: Function
) => {
	try {
		dispatch(showLoading());
		const _posts = await axios.get(
			`/api/posts?fields=${fields}&page=${pageNo}`
		);
		dispatch(hideLoading());
		console.log(_posts);
		dispatch(getAllPostsAction(_posts.data[0]));

		// dispatch(
		// 	updateTotalPageAction(
		// 		_posts.headers["x-wp-total"],
		// 		_posts.headers["x-wp-totalpages"]
		// 	)
		// );
	} catch (e) {
		dispatch(hideLoading());
		dispatch(
			addNotification({
				varient: "error",
				message: e.message,
				autoDismiss: false,
			})
		);
	}
};

export const getWpPost = (slug: string) => async (
	dispatch: Function,
	getState: Function
) => {
	try {
		const {
			posts: { fetched_posts: fetchedPosts },
		} = await getState();

		if (fetchedPosts[slug]) {
			dispatch(getWpPostAction(fetchedPosts[slug]));
			return;
		}

		dispatch(showLoading());
		const {
			data: [post],
		} = await axios.get(`/posts/?slug=${slug}`);

		dispatch(hideLoading());
		if (!post) {
			// dispatch(push('/404'));
			return;
		}

		dispatch(getWpPostAction(post));
		post.sorted = true;
		dispatch(updateFetchedPosts(post));
	} catch (e) {
		console.log(e);
	}
};

export const setDisplayPosition = (x: Number, y: Number) => ({
	type: UPDATE_DISPLAY_POSITION,
	payload: [x, y],
});

export const updateFetchedPosts = (post: any) => async (
	dispatch: Function,
	getState: Function
) => {
	const {
		posts: { fetched_posts: fetchedPosts },
	} = await getState();
	dispatch({
		type: UPDATE_FETCHED_POSTS,
		payload: { ...fetchedPosts, [post.slug]: post },
	});
};
