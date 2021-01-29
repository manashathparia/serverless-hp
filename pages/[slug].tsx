import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Article from "../components/Article";
import Layout from "../components/Layout";

const postPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	const { all_posts: posts } = useSelector((state: any) => state.posts);
	console.log(posts);
	const [post] = posts.filter((post: any) => post.slug === slug);
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

export default postPage;
