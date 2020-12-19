import { showLoading, hideLoading } from "react-redux-loading-bar";
import axios from "axios";
import { addNotification } from "./notification.actions";

export const UPDATE_CATEGORY_POSTS = "UPDATE_CATEGORY_POSTS";
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
export const UPDATE_TOTAL_CATEGORY_POSTS = "UPDATE_TOTAL_CATEGORY_POSTS";

export const getCategoryPostsAction = (_posts: [any]) => {
	const posts = _posts?.map((post) => ({
		...post,
		title: post?.title.rendered,
		modified: new Date(post?.modified).toDateString(),
	}));
	return {
		type: UPDATE_CATEGORY_POSTS,
		payload: posts,
	};
};

export const updateCategoriesAction = (categories: [any]) => ({
	type: UPDATE_CATEGORIES,
	payload: categories,
});

export const updateViewingCategory = (categoryName: string) => ({
	type: UPDATE_CURRENT_CATEGORY,
	payload: categoryName,
});

export const updateTotalCategoryPageAction = (
	postsNo: number,
	pagesNo: number
) => ({
	type: UPDATE_TOTAL_CATEGORY_POSTS,
	payload: {
		pages: pagesNo,
		posts: postsNo,
	},
});

export const getWpCategoryPosts = (slug: string) => async (
	dispatch: Function
) => {
	try {
		dispatch(showLoading());
		const {
			data: [category],
		} = await axios.get(`/categories/?slug=${slug}&_fields=id`);
		const { data, headers } = await axios.get(
			`/posts/?categories=${category?.id}&_fields=id,excerpt,title,link,slug,featured_images,modified`
		);
		dispatch(getCategoryPostsAction(data));
		dispatch(
			updateTotalCategoryPageAction(
				headers["x-wp-total"],
				headers["x-wp-totalpages"]
			)
		);
		dispatch(hideLoading());
	} catch (e) {
		console.log(e.toString());
		dispatch(hideLoading());
		dispatch(
			addNotification({
				varient: "error",
				message: e.message,
				autoDismiss: true,
			})
		);
	}
};
