// import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getPosts } from "../apiHandlers/posts";
import Article from "../components/Article";
import Layout from "../components/Layout";
import { wrapper } from "../redux/Reducers";

const postPage = (post: any = {}) => {
	// const router = useRouter();
	// const { slug } = router.query;

	const { all_posts: posts } = useSelector((state: any) => state.posts);
	console.log(posts);
	// const [post] = posts.filter((post: any) => post.slug === slug);
	console.log(post);

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

export const getStaticProps = wrapper.getStaticProps(async () => {});
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
