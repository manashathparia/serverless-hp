import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getPostBySlug, getPosts } from "../apiHandlers/posts";
import Article from "../components/Article";
import Layout from "../components/Layout";
import { getWpPost, updateCurrentPost } from "../redux/Actions/Posts.actions";
import Comments from "../components/Comments";
import sortComments from "../utils/commentSorter";

const postPage = (post: any) => {
	const router = useRouter();
	const dispatch = useDispatch();
	useEffect(() => {
		if (!post) {
			const { slug } = router.query;
			dispatch(getWpPost(slug as string));
		}
		console.log(post);
		dispatch(updateCurrentPost(post));
	}, []);

	const { current_post } = useSelector((state: any) => state.posts);
	if (!post) {
		post = current_post;
	}
	// const [post] = posts.filter((post: any) => post.slug === slug);

	return (
		<Layout>
			<Article
				featuredImage={post?.featuredImages?.large}
				article={post?.content}
				title={post?.title}
				date={post?.modified}
			/>
			<Comments comments={post?.comments} notify={(f: any) => f} postID={12} />
		</Layout>
	);
};

export const getStaticProps = async (args: any) => {
	const slug = args.params.slug;
	let post = await getPostBySlug(slug);
	post = JSON.parse(JSON.stringify(post[0]));
	post.comments = sortComments.arrangeComments(post.comments);
	return {
		props: post,
	};
};

export const getStaticPaths = async () => {
	const postsSlugs = await getPosts({ fields: ["slug"], noLimit: true });
	const paths = Array.isArray(postsSlugs[0])
		? postsSlugs[0].map((post: any) => ({
				params: { slug: post.slug },
		  }))
		: null;
	return {
		paths,
		fallback: false,
	};
};

export default postPage;
