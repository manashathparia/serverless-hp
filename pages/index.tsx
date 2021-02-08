import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../apiHandlers/posts";
import Card from "../components/Card";
import Layout from "../components/Layout";
import LoadMore from "../components/micro-components/LoadMore";
import {
	getAllPostsAction,
	updateTotalPageAction,
} from "../redux/Actions/Posts.actions";

const IndexPage = ({ posts, totalPosts }: any) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllPostsAction(posts));
		dispatch(updateTotalPageAction(totalPosts, 0));
	}, []);
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
			<LoadMore total={totalPosts} />
		</Layout>
	);
};

export const getStaticProps = async () => {
	let posts: any = await getPosts({
		only: ["title", "excerpt", "modified", "slug", "featuredImages"],
		page: 0,
	});
	const totalPosts = JSON.parse(JSON.stringify(posts[1]));
	posts = JSON.parse(JSON.stringify(posts[0])); //https://github.com/vercel/next.js/issues/11993#issuecomment-617375501
	return {
		props: {
			posts,
			totalPosts,
		},
	};
};

export default IndexPage;
