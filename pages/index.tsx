import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { getWpAllPosts } from "../redux/Actions/Posts.actions";

const IndexPage = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state: any) => state.posts.all_posts);
	console.log(posts);
	useEffect(() => {
		dispatch(getWpAllPosts(0));
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
		</Layout>
	);
};

export default IndexPage;
