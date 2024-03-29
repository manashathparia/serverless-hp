import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../apiHandlers/posts";
import Card from "../components/Card";
import Layout from "../components/Layout";
import LoadMore from "../components/micro-components/LoadMore";
import {
	getAllPostsAction,
	getWpAllPosts,
	updateTotalPageAction,
} from "../redux/Actions/Posts.actions";
import { wrapper } from "../redux/Reducers";

const IndexPage = () => {
	const dispatch = useDispatch();
	const {
		posts: { all_posts: posts, total_posts },
		loadingBar: { default: loading },
	} = useSelector((state: any) => state);
	function loadMorePosts(page: number) {
		dispatch(
			getWpAllPosts(page, [
				"title",
				"featuredImages",
				"slug",
				"excerpt",
				"modified",
			])
		);
	}
	return (
		<Layout>
			{posts.map((post: any) => (
				<Card
					title={post.title}
					featuredImage={post.featuredImages?.["medium"]}
					excerpt={post.excerpt}
					modified={post.modified}
					slug={post.slug}
					key={post.id}
					// id={post.id}
					// push={history.push}
					// updatePostID={updatePostID}
				/>
			))}
			<div style={{ height: 35, position: "relative" }}>
				<LoadMore
					loading={loading}
					total={total_posts}
					onClick={loadMorePosts}
				/>
			</div>
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }: any) => {
	let posts: any = await getPosts({
		fields: ["title", "excerpt", "modified", "slug", "featuredImages"],
		page: 1,
	});
	const totalPosts = JSON.parse(JSON.stringify(posts[1]));
	posts = JSON.parse(JSON.stringify(posts[0])); //https://github.com/vercel/next.js/issues/11993#issuecomment-617375501
	store.dispatch(getAllPostsAction(posts));
	store.dispatch(updateTotalPageAction(totalPosts, 0));
});

export default IndexPage;
