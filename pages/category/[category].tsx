import { getPostsByCategory } from "../../apiHandlers/posts";
import { wrapper } from "../../redux/Reducers";
import { getAllPostsAction } from "../../redux/Actions/Posts.actions";

export default function CategoryPage() {
	return <div></div>;
}
export const getStaticProps = wrapper.getStaticProps(
	async ({ store, params }: any) => {
		let posts: any = await getPostsByCategory(params.id);
		posts = JSON.parse(JSON.stringify(posts[0])); //https://github.com/vercel/next.js/issues/11993#issuecomment-617375501
		store.dispatch(getAllPostsAction(posts));
	}
);
