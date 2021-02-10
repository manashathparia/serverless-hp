import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getPostBySlug, getPosts } from "../apiHandlers/posts";
import Article from "../components/Article";
import Layout from "../components/Layout";
import { getWpPost } from "../redux/Actions/Posts.actions";

const postPage = (post: any) => {
	const router = useRouter();
	const dispatch = useDispatch();
	useEffect(() => {
		if (!post) {
			const { slug } = router.query;
			dispatch(getWpPost(slug as string));
		}
	});

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
		</Layout>
	);
};

export const getStaticProps = async (args: any) => {
	const slug = args.params.slug;
	let post = await getPostBySlug(slug);
	post = JSON.parse(JSON.stringify(post[0]));
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
