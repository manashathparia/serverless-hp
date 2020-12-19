import { showLoading, hideLoading } from "react-redux-loading-bar";
import axios from "axios";

import { UPDATE_POST } from "./Posts.actions";

export const getWpPageAction = (_post: any) => {
	const post = {
		..._post,
		title: _post?.title.rendered,
		article: _post?.content.rendered,
	};

	return {
		type: UPDATE_POST,
		payload: post,
	};
};

export const getWpPost = (slug: string) => async (dispatch: Function) => {
	dispatch(showLoading());
	const {
		data: [post],
	} = await axios.get(
		`/pages/?slug=${slug}&_fields=id,content,title,yoast_head`
	);

	dispatch(getWpPageAction(post));
	dispatch(hideLoading());
};
