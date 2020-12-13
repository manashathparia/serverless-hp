import axios from '../utils/axios';

export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';
export const SEARCH_LOADING = 'SEARCH_LOADING';
export const SEARCH_LOADING_DONE = 'SEARCH_LOADING_DONE';

export const makeSearch = (query) => async (dispatch) => {
    if (query.length < 1) return;
    dispatch({
        type: SEARCH_LOADING,
    });
    const res = await axios.get(
        `/posts/?search=${query.split(
            ' '
        )}&_fields=id,excerpt,title,link,slug,featured_images,modified&per_page=99`
    );
    const posts = res.data.map((post) => ({
        ...post,
        title: post?.title.rendered,
        modified: new Date(post?.modified).toDateString(),
    }));
    dispatch({
        type: UPDATE_SEARCH_RESULTS,
        payload: posts,
    });
    dispatch({
        type: SEARCH_LOADING_DONE,
    });
};
export const clearSearch = () => ({ type: UPDATE_SEARCH_RESULTS, payload: [] });
